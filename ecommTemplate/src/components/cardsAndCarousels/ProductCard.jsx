import AddIcon from '@mui/icons-material/Add';
import navigateProduct from '../../hooks/navigateProduct';
import { BlueButton, Stars } from '../utils';
import {create_full_image_path } from '../../assets/util';
import { fetchItemsToCart } from '../../api/fetchCart';


const ProductCard = ({name, brand, slug, average_rating, n_ratings,  main_image, total_cost, days}) => {

  let navigate = navigateProduct({slug});

  return (
    <div className='w-[150px] h-[260px] sm:h-[486px] sm:w-[300px] rounded-md bg-tertiaryTone-100 p-2 sm:pt-2 sm:px-2 flex flex-col m-2'>
      {main_image && (
        <img 
          src={create_full_image_path(main_image.image)} 
          className='bg-white object-scale-down rounded-md hover:cursor-pointer'
          onClick={navigate}
        />
      )}
      <div className='mt-2 p-2 text-tertiary flex flex-col grow'>
        <div className='flex flex-col min-h-[60px]'>
          <h3 
            className='font-bold text-[16px] sm:text-[20px] sm:truncate hover:cursor-pointer hover:underline'
            onClick={navigate}
          >
           {name}
          </h3>
          <h4 className='text-[12px] sm:text-[18px] tracking-wide'>
            {brand.name}
          </h4>
        </div>
        <div className='hidden sm:block'>
          <div className='flex flex-row mt-2 hover:cursor-pointer'>
            <Stars rating={average_rating}/>
            <div className='ml-1 sm:text-[16px]'>
             ({n_ratings})
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 w-full justify-between items-start sm:my-4'>
          <div className='flex justify-between w-full items-center h-[50px]'>
            <div className='flex flex-col h-full justify-center'>
              <div className='font-semibold sm:text-[26px] leading-none'>
                ${total_cost.toFixed(2)}
              </div>
              <p className='leading-none text-[12px] text-center'>
                For {days} Days
              </p>
            </div>
            <div className='h-full border hidden sm:block'>
              <BlueButton
                content='Add to Cart'
                onClick={()=>fetchItemsToCart([slug])}
              />
            </div>
            <div className='sm:hidden'>
              <BlueButton
                className='!p-1'
                content={<AddIcon/>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard