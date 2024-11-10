

export const Appbar = () => {
  return <div className="py-4 border-b px-20 justify-between flex text-2xl font-bold">
    <div className="flex flex-col justify-center">Medium</div>
    <div><Avatar name="Adnan"/></div>

  </div>;
};

export function Avatar({ name }: { name: string }) {
    return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ">
      <span className="font-xs text-gray-600 dark:text-gray-300 ">
        {name[0]}
      </span>
    </div>);
  }
