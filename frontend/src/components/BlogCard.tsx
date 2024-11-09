

interface BlogCardProps {
    authName : string;
    title : string;
    content : string;
    publishedDate : string;
}


const BlogCard = ({
    authName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <div>
            <div>
                {authName} . {publishedDate}
            </div>
            <div>
                {title}
            </div>
            <div>
                {content.slice(0,150) + " ..."}
            </div>
            <div>
                {`${Math.ceil(content.length / 100)} minutes`}
            </div>
            <div className="bg-slate-200 h-0.5 w-full">

            </div>
        </div>
    )
}




export default BlogCard;