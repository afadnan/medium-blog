import { Hono } from "hono";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
blogRouter.post("/", (c) => {
  return c.text("Blog");
});

blogRouter.put("/", (c) => {
  return c.text("Blog-put");
});

blogRouter.get("/", (c) => {
  return c.text("Blog-get");
});

blogRouter.get("/blog", (c) => {
  return c.text("get-all-Blog-get");
});
