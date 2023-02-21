import { yeti45 } from "../../assets/images/products"
import { SmallCard} from "./"
import CarouselTemplate from "../CarouselTemplate"

const suggestions = [
  {text: 'Test1', img: yeti45, price:'$33.33'},
  {text: 'Test2', img: yeti45, price:'$33.33'},
  {text: 'Test3', img: yeti45, price:'$33.33'},
  {text: 'Test4', img: yeti45, price:'$33.33'},
  {text: 'Test5', img: yeti45, price:'$33.33'},
  {text: 'Test6', img: yeti45, price:'$33.33'},
]


const header = (
  <div className='flex justify-center sm:justify-start items-center relative text-[24px] text-center font-bold text-tertiary p-2'>
  You May be Interested In
</div>
)

const ItemSuggestion = () => {
  return (
    <CarouselTemplate
      Card={SmallCard}
      cardData={suggestions}
      header={header}
    />
  )
}

export default ItemSuggestion