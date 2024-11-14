import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    
    <div className="py-4 border-b px-20 justify-between flex text-2xl font-bold">
      <Link to="/blogs" className="flex flex-col justify-center">Medium</Link>
    <div>
      <Avatar name="Adnan" />
    </div>
    </div>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center w-7 h-7  bg-gray-100 rounded-full dark:bg-gray-600 ">
      <span className="font-xs text-gray-600 dark:text-gray-300 ">
        {name[0]}
      </span>
    </div>
  );
}
