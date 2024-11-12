import {useBlog} from '../hooks/index'

const Blog = () => {
  const {loading,blog} = useBlog();
  if(loading){
    return <div>
      loaing...
    </div>
  }
  return (
    <div>

    </div>
  )
}

export default Blog