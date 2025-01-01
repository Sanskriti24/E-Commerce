import {MdStar, MdOutlineLocalOffer} from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative bg-cover bg-hero bg-center bg-no-repeat h-screen w-full">
  <div className="max-padding-container relative top-32 xs:top-52">
    <h1 className="h1 capitalize max-w-[37rem]">
      Digital Shopping Hub Junction
    </h1>
    <p className="mt-8 text-base text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu velit elementum, ultricies lectus non, aliquet lacus. Fusce faucibus lacinia ex, quis scelerisque arcu pulvinar dapibus. Mauris vel dolor sapien. Proin porta venenatis orci et mollis. Cras eleifend aliquet felis, tincidunt congue massa tincidunt in. Aliquam neque diam, consequat ac ex in, fringilla maximus eros. Nam tempor ipsum id lorem blandit tempus. Donec at elit eu ante varius fringilla non tempor enim. Integer id ligula felis.
    </p>
            <div className='flex items-center gap-x-4 my-10'>
                <div className='!regular-24 flex items-center gap-x-3'>
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                </div>
                <div className='bold-16 sm:bold-20'>
                    <span className="font-bold">176k </span>  
                    <span className='regular-16 sm:regular-20'>Excellent Reviews</span></div>
            </div>
            <div className='max-xs:flex-col flex gap-2'>
                <NavLink to={' '} className={"btn bg-gray-600 rounded-full text-white flex items-center justify-center px-4"}>Shop Now</NavLink>
                <NavLink to={' '} className={"btn bg-gray-600 rounded-full text-white flex items-center justify-center px-4"}><MdOutlineLocalOffer className='text-xl' />Offers</NavLink>
            </div>
            </div>
            </section>
  )
}

export default Hero