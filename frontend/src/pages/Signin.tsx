import { Quote } from '../components/Quote'
import { Auth } from '../components/Auth'

const Signin = () => {
  return (
    <div className='grid grid-cols-2 '>
    <Auth type="signin"/>
    
<div className='invisible lg:visible '>
    <Quote/>
    </div>
</div>
  )
}

export default Signin