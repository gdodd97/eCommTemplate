import CarouselTemplate from "../CarouselTemplate"
import { SmallCard } from "../shopping/"
import { yeti45 } from "../../assets/images/products"

const data = [
  {text: 'Test1', img: yeti45, price:'$33.33'},
  {text: 'Test2', img: yeti45, price:'$33.33'},
  {text: 'Test3', img: yeti45, price:'$33.33'},
  {text: 'Test4', img: yeti45, price:'$33.33'},
  {text: 'Test5', img: yeti45, price:'$33.33'},
  {text: 'Test6', img: yeti45, price:'$33.33'},
]

const header = (
  <div className='flex justify-center sm:justify-start items-center relative text-[24px] text-center font-bold text-tertiary p-2'>
  Your Browsing History
</div>
)

const BrowsingHistory = () => {
  return (
    <CarouselTemplate
      Card={SmallCard}
      cardData={data}
      header={header}
    />
  )
}

export default BrowsingHistory