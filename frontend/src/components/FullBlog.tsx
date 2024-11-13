import { Appbar } from "./Appbar";

export const FullBlog = ({ blog }: { blog: blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full px-10 pt-200 max-w-screen-xl pt-12">
          <div className=" col-span-8">
            <div className="text-3xl font-extrabold">{blog.title}</div>
            <div className="text-slate-600 pt-4">
                Posted on 13th November 2024
            </div>
            <div className="pt-4">
                {blog.content}
            </div>
          </div>
          <div className="bg-green-200 col-span-4">hello</div>
        </div>
      </div>
    </div>
  );
};
