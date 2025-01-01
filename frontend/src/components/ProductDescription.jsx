import React from 'react'

const ProductDescription = () => {
  return (
   <div className='mt-20'>
    <div className='flex gap-3 mb-4'>
        <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
    </div>
    <div className='flex flex-col pb-16'>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum enim est repudiandae eaque ad nemo neque, laboriosam exercitationem maiores expedita ullam porro nobis maxime. A, deleniti animi odio fugiat, perferendis provident vel eius possimus officia vitae odit itaque ipsa. Illo quas, dolore unde a impedit deserunt rerum mollitia vero.</p>
        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi iure, harum rerum aspernatur dignissimos ipsa ipsam ab architecto sequi nobis expedita nihil, modi nesciunt voluptas veritatis facilis sit quas porro eos hic facere. Voluptatibus quam dolor culpa illum harum?</p>
    </div>
   </div>
  )
}

export default ProductDescription