import Carousel from "@/components/Carousel";
import carousel from "../assets/carousel.png";
import advertise from "../assets/advertise.png";
import { SwiperSlide } from "swiper/react";
import CarouselSlides from "@/components/CarouselSlides";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import NewArrival from "@/components/NewArrival";
import Services from "@/components/Services";
import { useGetAllProductsQuery } from "@/redux/slices/api/productApiSlice";




const Home = () => {

  const{data :products ,isLoading} =useGetAllProductsQuery("")


  if(isLoading){
    return (<div>Loading</div>)
  }
  
  return (
    <section className="">
      <div className="top-section-home px-32 flex justify-between">
        <div className="flex-1 border-r-[1px] border-gray-300 pt-7 pr-10 flex flex-col justify-between">
          <span className="text-xl flex justify-between">
            <p>Woman's Fashion</p>
            <p className="font-bold"> &gt;</p>
          </span>
          <span className="text-xl flex justify-between">
            <p>Men's Fashion</p>
            <p className="font-bold"> &gt;</p>
          </span>
          <span className="text-xl">Eletronics</span>
          <span className="text-xl">Home & Lifestyle</span>
          <span className="text-xl">Medicine</span>
          <span className="text-xl">Sports & Outdoor</span>
          <span className="text-xl">Baby's & Toys</span>
          <span className="text-xl">Groceries & Pets</span>
          <span className="text-xl">Health & Beauty</span>
        </div>
        <div className="ob ml-7 pt-7">
          <Carousel
            className="w-[1300px] h-[500px]"
            slidesPerView={1}
            pagination={true}
          >
            {[...Array(20)].map((x, index) => (
              <SwiperSlide key={index}>
                <img src={carousel} alt="" />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </div>
      {/* Today's section */}
      <CarouselSlides heading="Today's" title="Flash Sale" displayTime={true}>
        {products.data.slice(60,75).map((x, index:number) => (
          <SwiperSlide key={index}>
            <ProductCard product={x} />
          </SwiperSlide>
        ))}
      </CarouselSlides>
      <div className="w-full flex justify-center py-10">
        <Button className="h-10 rounded-sm py-7 px-10" variant={"destructive"}>
          View All Products
        </Button>
      </div>
      <hr className="mx-32" />
      {/* Category's section */}
      <div className="mb-20">
        <CarouselSlides
          heading="Categories"
          title="Browse By Category"
          displayTime={false}
        >
          {products.data.slice(0,15).map((x, index:number) => (
          <SwiperSlide key={index}>
            <ProductCard product={x} />
          </SwiperSlide>
        ))}
        </CarouselSlides>
      </div>
      <hr className="mx-32" />
      {/* This Month section */}
      <div className="relative pb-20">
        <CarouselSlides
          heading="This Month"
          title="Best Selling Products"
          displayTime={false}
        >
          {products.data.slice(15,30).map((x, index:number) => (
          <SwiperSlide key={index}>
            <ProductCard product={x} />
          </SwiperSlide>
        ))}
        </CarouselSlides>
        <Button
          className="absolute top-10 right-10 mx-32 h-10 rounded-sm py-7 px-10"
          variant={"destructive"}
        >
          View All
        </Button>
      </div>
      <hr className="mx-32" />
      {/* Headphone Advertise */}
      <div className="mx-32 py-20">
        <img src={advertise} alt="advertise-headphone" />
      </div>
      <hr className="mx-32" />
      {/* This Month section */}
      <CarouselSlides
        heading="Our Products"
        title="Explore Our Products"
        displayTime={false}
      >
        {products.data.slice(30,45).map((x, index:number) => (
          <SwiperSlide key={index}>
            <ProductCard product={x} />
          </SwiperSlide>
        ))}
      </CarouselSlides>
      <div className="w-full flex justify-center flex-col py-10">
        <Carousel className="mx-32" slidesPerView={5} pagination={false}>
        {products.data.slice(45,60).map((x, index:number) => (
          <SwiperSlide key={index}>
            <ProductCard product={x} />
          </SwiperSlide>
        ))}
        </Carousel>
        <div className="w-full flex justify-center py-7 px-10">
          <Button
            className="h-10 rounded-sm py-7 px-10"
            variant={"destructive"}
          >
            View All Products
          </Button>
        </div>
      </div>
      <hr className="mx-32" />
      {/* New Arrrival section */}
      <NewArrival />
      <div className="mx-32 my-32">
        <Services />
      </div>
    </section>
  );
};

export default Home;
