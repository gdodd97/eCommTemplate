import { Favorites, CartMain, OrderSummary } from "../cart"

const cartList = ['yeti45', 'yeti42']

const CartPage = () => {
  return (
    <div className='flex justify-center items-center text-tertiary'>
        <div className='max-w-[1280px] w-full'>
            <div className='flex flex-col w-full'>
                <div className="flex flex-row">
                    <div className='rounded-md w-3/5 mt-6'>
                        <h1 className="text-[40px] font-bold leading-none pt-1">
                            Cart
                        </h1>
                        <p className="leading-none pb-1">
                            {cartList.length} Items
                        </p>
                    </div>
                    <div className="flex justify-start items-end">
                        <div className="ml-3">
                            <h1 className="text-[30px] font-bold">
                                Order Summary
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-3">
                    <div className="w-3/5">
                        <div className='bg-white rounded-md grow-0'>
                            Items
                        </div>
                    </div>
                    <div className='bg-white rounded-md w-2/5 ml-3'>
                        <OrderSummary/>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default CartPage