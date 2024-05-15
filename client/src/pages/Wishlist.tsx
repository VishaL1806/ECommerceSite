import Carousel from '@/components/Carousel'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { useGetWishlistQuery } from '@/redux/slices/api/productApiSlice'
import { SwiperSlide } from 'swiper/react'

const Wishlist = () => {

  const {data : wishlist , isLoading} = useGetWishlistQuery("")

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <section className='mx-32 my-10'>
    <div className="w-full flex justify-center flex-col py-10">
        <div className="flex justify-between pb-16">
            <span className="text-xl">Wishlist (4)</span>
            <Button className='mr-10 rounded-sm w-48 h-10 py-3 px-10 border-black' variant={'outline'}>Move All To Bag</Button>
        </div>
        <Carousel className="w-full" slidesPerView={5} pagination={false}>
          {wishlist.data.map((product :never, index : number) => (
            <SwiperSlide key={index}>
              <ProductCard product={product} showLikeIcon={false} showEyeIcon={false} />
            </SwiperSlide>
          ))}
        </Carousel>
        </div>
        <hr className='my-5'/>
        <div className="w-full flex justify-center flex-col py-10">
        <div className="flex justify-between pb-16">
           <div className='flex items-center gap-4'><p className="bg-red-600 w-5 h-10 rounded"></p> <span className="text-xl">Just For You</span></div>
            <Button className='mr-10 rounded-sm w-48 h-10 py-3 px-10 border-black' variant={'outline'}>See All</Button>
        </div>
        {/* <Carousel className="w-full" slidesPerView={5} pagination={false}>
          {[...Array(5)].map((x, index) => (
            <SwiperSlide key={index}>
              <ProductCard />
            </SwiperSlide>
          ))}
        </Carousel> */}
        </div>
        </section>
  )
}

export default Wishlist