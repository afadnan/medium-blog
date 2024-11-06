import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

//route in different dir
app.route("api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);

app.get("/", (c) => {
  return c.text("Blog Website");
});

export default app;
