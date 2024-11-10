interface BlogCardProps {
  authName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  authName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="p-4 border-b border-slate-200">
      < div className="flex">
        <div className="flex justify-center flex-col"><Avatar name={authName} /></div>
        
        <div className="font-extralight text-base pl-2">{authName} </div>
        <div className="pl-2 flex justify-center flex-col "> <Circle/></div>
        <div className="pl-2 font-thin text-slate-400">{publishedDate}</div> 
      </div>
      <div className="text-xl font-semibold pt-2">{title}</div>
      <div className="text-sm font-extralight">{content.slice(0, 150) + " ..."}</div>
      <div className="text-slate-400 text-sm font-thin pt-4">{`${Math.ceil(content.length / 100)} minute(s) read`} </div>
      
    </div>
  );
};

function Circle (){
    return (
        <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
    )
}



export default BlogCard;

function Avatar({ name }: { name: string }) {
    return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ">
      <span className="font-xs text-gray-600 dark:text-gray-300 ">
        {name.slice(0,2)}
      </span>
    </div>);
  }
 
