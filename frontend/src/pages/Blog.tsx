import { FullBlog } from '../components/FullBlog';
import {useBlog} from '../hooks/index'
import { useParams  } from 'react-router-dom';

const Blog = () => {
  const {id} = useParams();
  const {loading,blog} = useBlog({
    id: id || ""
  });
  if(loading){
    return <div>
      loaing...
    </div>
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  )
}

export default Blog