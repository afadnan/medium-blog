import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    
    <div className="py-4 w-full border-b px-20 justify-between flex  ">
      <Link to={'/blogs'} className="flex flex-col justify-center font-bold text-2xl cursor-pointer">Medium</Link>
    <div className="flex justfy-center">
      <Link to={'/publish'}>
    <button type="button" className="mr-8 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button></Link>
      <Avatar name="Adnan" />
    </div>
    </div>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center w-10 h-10  bg-gray-100 rounded-full dark:bg-gray-600 ">
      <span className="text-xl text-gray-600 dark:text-gray-300 ">
        {name[0]}
      </span>
    </div>
  );
}
