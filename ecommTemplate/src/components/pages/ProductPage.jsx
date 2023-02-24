import { useEffect } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { yeti45 }from '../../assets/images/products/'
import Information from '../product/Information';
import ProductMain from '../product/ProductMain';
import { BoughtTogether, KeepShopping } from '../product';


const imgList = [yeti45, yeti45, yeti45, yeti45, yeti45, yeti45]
const bullets = ['Very very tall', '86 Cans in total', 'Weighs 64oz', 'Contains actual magic']

const ProductPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1280px] w-full">
        <div className='my-4 text-[12px] text-tertiary'>
          <a className='hover:underline cursor-pointer'>Home</a>
          <ChevronRightIcon className='scale-75'/>
          <a className='hover:underline cursor-pointer'>All Categories</a>
          <ChevronRightIcon className='scale-75'/>
          <a className='hover:underline cursor-pointer'>On the Beach</a>
          <ChevronRightIcon className='scale-75'/>
          <a className='hover:underline cursor-pointer'>Coolers</a>
        </div>
        <div className='mt-20 mb-24'>
          <ProductMain
            imgList={imgList}
            bullets={bullets}
          />
        </div>
        <Information/>
        <BoughtTogether/>
        <KeepShopping/>
      </div>
    </div>
  )
}

export default ProductPage