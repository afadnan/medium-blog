import { Appbar } from "./Appbar";
import { Avatar2 } from "./BlogCard";

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
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-500">
              Author Details
              <div className="flex w-full pt-2 ">
                <div className="pr-4 flex flex-col justify-center">
                  <Avatar2 name={blog.author.name || "Anonymous"} />
                </div>
                <div>
                    <div className="text-xl font-bold text-black">
                    {blog.author.name || "Anonymous"}
                    </div>
                    <div className="pt-2  text-slate-500">
                    Random catch phrase about the author's ability to grab the
                    users's attention
                    </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
