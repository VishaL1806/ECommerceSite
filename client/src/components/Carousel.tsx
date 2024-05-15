import React from 'react'
import { A11y, Navigation, Pagination } from 'swiper/modules';

import { Swiper, useSwiper } from 'swiper/react';
import { cn } from '@/lib/utils';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css';

type CarouselProps ={
  className:string;
  slidesPerView:number;
  children? :React.ReactNode,
  pagination?:boolean,
  navigation?:boolean
}

const Carousel = ({className,slidesPerView,children,pagination} : CarouselProps) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={10}
    slidesPerView={slidesPerView}
    className={cn('object-cover',className)}
    pagination={pagination?{ clickable: true }:false}
    onClick={(swiper,event)=>console.log(swiper,event)}
    onSlideChange={() => console.log('slide change')}
    autoplay={true}
    >
     <SliderButtons></SliderButtons>
     {children}
    </Swiper>
  )
}

export default Carousel


export const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons">
      <button  onClick={()=>swiper.slidePrev()}>&lt;vvv</button>
      <button  onClick={()=>swiper.slideNext()}>&gt;vvv</button>
    </div>
  );
};