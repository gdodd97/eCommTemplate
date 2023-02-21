import React from 'react'
import yeti45 from '../assets/images/products'

const ProductCard = (props) => {
  return (
    <div className='flex justify-center'>
        <div className='flex flex-1 rounded-md justify-center'>
            <div className='w-[150px] h-[150px] bg-white justify-center items-center flex'>
                <img className='object-contain' src={yeti45}/>
            </div>
        </div>
    </div>
    
  )
}

export default ProductCard