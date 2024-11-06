import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign,verify} from 'hono/jwt'

const app = new Hono<{
  Bindings:{
    DATABASE_URL: string,
    JWT_SECRET : string
  }
}>()

//middleware


app.get('/', (c) => {
  return c.text('Blog WEbsite');
})


app.post('/api/v1/user/signup',async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

  try {
    
  const user= await prisma.user.create({
    data : {
      name:body.name,
      username : body.username,
      password: body.password,
    }}
  )
  const jwt = await sign({
    id : user.id
  },c.env.JWT_SECRET);

  return c.text(`U are signed up & your token is ${jwt}`)
  
  } catch (e) {
    c.status(411);
    return c.text('Invalid');
  }
  
})

app.post('/api/v1/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const user = await prisma.user.findUnique({
		where: {
			username: body.username
		}
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
})

app.post('/api/v1/blog', (c) => {
  return c.text('Blog')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Blog-put')
})

app.get('/api/v1/blog', (c) => {
  return c.text('Blog-get')
})

app.get('/api/v1/blog/blog', (c) => {
  return c.text('get-all-Blog-get')
})

export default app
