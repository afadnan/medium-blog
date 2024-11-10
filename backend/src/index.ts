import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.use('/*', cors())
//route in different dir
app.route("api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);

app.get("/", (c) => {
  return c.text("Blog Website");
});

export default app;

