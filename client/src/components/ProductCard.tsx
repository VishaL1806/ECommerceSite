import { EyeOpenIcon, TrashIcon } from "@radix-ui/react-icons";
import Rating from "./Rating";
import { Badge } from "./ui/badge";
import HeartLikeIcon from "./HeartLikeIcon";
import { Product } from "@/types";
import { useToogleCartMutation } from "@/redux/slices/api/userApiSlice";

type ProductCardProps ={
  product:Product,
  showLikeIcon?: boolean,
  showEyeIcon?: boolean
}
const ProductCard = ({product,showLikeIcon= true, showEyeIcon = true} : ProductCardProps) => {
  const [toogleCart]  = useToogleCartMutation()

  return (
    <section className="product-card w-[280px] min-w-[280px] h-[400px] min-h-[400px]">
      <div className="w-[280px] min-w-[280px] h-[400px] min-h-[400px] flex flex-col">
        <div className="flex-[5] group relative h-[250px] max-w-[280px] object-fill">
          <img src={product?.thumbnail} alt="" className="z-0 h-full object-cover" />
          {!product.isCart && <span className="absolute bottom-0 text-center w-full h-8 text-white bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in text-lg hover:cursor-pointer"
          onClick={async()=>{
            await toogleCart({productId :product._id,quantity :1})
          }}>
            Add to Cart
          </span>}
         { showLikeIcon && 
         <HeartLikeIcon isProductLiked={product.isWishlisted??false} productId={product._id} clasName=" absolute top-3 right-3 px-2 py-3 rounded-full w-9 h-9" />}
          <Badge
            className="absolute top-3 left-3 h-6 rounded-sm hover:cursor-default"
            variant="discount"
          >
            -{product.discountPercentage?.toFixed(0)}%
          </Badge>
        {showEyeIcon && (<span className="bg-white absolute top-14 right-3 rounded-full w-9 h-9 flex justify-center items-center z-10 hover:cursor-pointer">
          <EyeOpenIcon width={27} height={23} />
        </span>)}
        { !showLikeIcon && !showEyeIcon && (<span className="bg-white absolute top-3 right-3 rounded-full w-9 h-9 flex justify-center items-center z-10 hover:cursor-pointer">
          <TrashIcon width={27} height={23} />
        </span>)}
        </div>
        <span className="flex-1 flex justify-start items-center m-0 p-0 pt-3 font-bold text-[15px]">
          {product?.title}
        </span>
        <span className="flex-1 flex justify-start items-center m-0 p-0">
          <p className="text-red-500 font-semibold">${product?.price}</p> <p></p>
        </span>
        <span className="flex-1 flex justify-start items-center m-0 p-0">
          <Rating rating={product?.rating??0} />
        </span>
      </div>
    </section>
  );
};

export default ProductCard;
