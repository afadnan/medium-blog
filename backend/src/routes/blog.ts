import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

//for Authentication use Middlewares
//middleware
// blogRouter.use("/*", (c, next)=> {
//     next()
// })

blogRouter.post("/", async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
        data: {
            title : body.title,
            content : body.content,
            authorId : 1
        }
    })
  return c.json({
    id : blog.id
  });
});

//put -> change the content and title
blogRouter.put("/",async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.update({
        where: {
            id : body.id
        },
        data: {
            title : body.title,
            content : body.content,
            authorId : 1
        }
    })
  return c.json({
    id : blog.id
  });
});

blogRouter.get("/", (c) => {
  return c.text("Blog-get");
});

blogRouter.get("/blog", (c) => {
  return c.text("get-all-Blog-get");
});