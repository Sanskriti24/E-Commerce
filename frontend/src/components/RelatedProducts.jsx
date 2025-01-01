import React from 'react'
import { POPULAR } from '../assets/data'
import Item from './Item'

const RelatedProducts = () => {
  return (
    <section className='bg-primary'>
        <div className='max_padd_container py-12 xl:w-[92%]'>
            <h3 className='text-3xl font-bold text-center'>Related Products</h3>
            <div className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-r from-transparent via-black to-transparent mb-16"></div>
            {/*container*/}
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                {POPULAR.map((item) => (
                    <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default RelatedProducts