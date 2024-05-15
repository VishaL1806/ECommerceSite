import { BreadCrumb } from "@/components";
import Rating from "@/components/Rating";
import { CircleIcon, MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import fastDelivery from "../assets/fast-delivery.svg";
import { Input } from "@/components/ui/input";
import CarouselSlides from "@/components/CarouselSlides";
import { SwiperSlide } from "swiper/react";
import ProductCard from "@/components/ProductCard";
import { useGetProductDetailsQuery } from "@/redux/slices/api/productApiSlice";
import { useParams } from "react-router-dom";
import HeartLikeIcon from "@/components/HeartLikeIcon";
import { useToogleCartMutation } from "@/redux/slices/api/userApiSlice";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const param = useParams()
  console.log(param.productname);
  
  const {data : product,isLoading}= useGetProductDetailsQuery('661e0e2ba6748d91171e3534')

  const [toogleCart]  = useToogleCartMutation()
  const [currentQuantity, setCurrentQuantity] = useState(0)
  useEffect(() => {
    if(typeof product?.data[0]?.quantity=='number'){
      setCurrentQuantity(product?.data[0]?.quantity)
    }
  }, [product])
  
  if(isLoading){
    return <>L0ading</>
  }
  return (
    <section className="product-detail">
      <div className="flex flex-col gap-10">
        <span className="mx-32"><BreadCrumb /></span>
        <div className="flex justify-between gap-10 h-[600px] mx-32">
          <div className="flex-[1] flex flex-col justify-between items-center gap-3">
            {product.data[0].images.map((x : string,index: number)=>(
              <img
              src={x}
              alt=""
              key={index}
              className="rounded-sm border h-[140px] min-w-[200px] object-cover"
            />
            ))}
            
          </div>
          <div className="flex-[5] max-h-[600px]">
            <img
              src={product.data[0].thumbnail}
              alt=""
              className="border rounded-sm h-[600px] w-full object-cover"
            />
          </div>
          <div className="flex-[3.5] flex flex-col justify-between px-10">
            <span className="font-semibold text-3xl">
              {product.data[0].title}
            </span>
            <Rating rating={product.data[0].rating}/>
            <span className="font-normal text-3xl">${product.data[0].price}</span>
            {/* description */}
            <span className="text-wrap break-words">
             {product.data[0].description}
            </span>
            <hr />
            {/* Color Section */}
            <div className="flex justify-start items-center gap-14">
              <span className="font-normal text-2xl">Colors : </span>
              <span className="flex gap-3">
                <CircleIcon color="blue" className="bg-blue-950 rounded-full" />
                <CircleIcon
                  color="green"
                  className="bg-green-950 rounded-full"
                />
              </span>
            </div>
            {/* Sizes section */}
            {/* <div className="flex justify-start items-center gap-14">
              <span className="font-normal text-2xl">Sizes : </span>
              <span className="flex gap-3">
               <Input type="radio"/>
              </span>
            </div> */}
            {/* Buy now section */}
            <div className="flex justify-between items-center gap-10">
              <div className="flex h-full items-center input-quantity">
                <Button variant={"outline"} className="h-full w-12 rounded-r-none rounded-l-sm"
                onClick={()=> setCurrentQuantity(currentQuantity -1)}><MinusIcon className="h-full w-full" /></Button>
                <Input className="w-1/3 h-full rounded-none" type="number" value={currentQuantity} onChange={(e)=>{
                  if(e.target.value.length<=1){
                    setCurrentQuantity(Number(e.target.value))
                  }
                  }}/>
                  
                <Button variant={"outline"} className="h-full w-12 rounded-l-none hover:bg-red-500 rounded-r-sm bg-red-600 text-white"
                onClick={()=> setCurrentQuantity(currentQuantity +1)}><PlusIcon className="h-full w-full" /></Button>
              </div>
              <Button variant={"destructive"} className="h-12 w-full text-md" onClick={async ()=>{
                await toogleCart({productId : product.data[0]._id, quantity : currentQuantity })
              }}
              disabled={currentQuantity<1}
              >
                {product.data[0].isCart?"Update Cart":"Add to Cart"}
              </Button>
          
                <HeartLikeIcon isProductLiked={product.data[0].isWishlisted} productId={product.data[0]._id} clasName=" h-full rounded-sm border px-2 py-1" />
              
            </div>
            <div className="flex flex-col border rounded-sm">
              <div className="flex-1 flex px-4 pt-4 pb-2 gap-5">
                <img src={fastDelivery} alt="" className="w-16" />
                <div className="flex flex-col justify-center items-start">
                  <span>Free Delivery</span>
                  <span>Enter your postal code for Delivery Availability</span>
                </div>
              </div>
              <hr />
              <div className="flex-1 flex px-4 pt-4 pb-2 gap-5">
                <img src={fastDelivery} alt="" className="w-16" />
                <div className="flex flex-col justify-center items-start">
                  <span>Return Delivery</span>
                  <span>Free 30 Days Delivery Returns. Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <CarouselSlides heading="Related Item" title=""  >
        {product.similar.map((x : never, index: number) => (
          <SwiperSlide key={index}>
            <ProductCard product={x} />
          </SwiperSlide>
        ))}
        </CarouselSlides> */}
      </div>
    </section>
  );
};

export default ProductDetail;
