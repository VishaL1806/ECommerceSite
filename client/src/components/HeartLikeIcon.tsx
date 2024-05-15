import { cn } from "@/lib/utils";
import { useToogleWishlistMutation } from "@/redux/slices/api/userApiSlice";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { useState } from "react";

type HeartLikeIconProps = {
  isProductLiked: boolean;
  productId: string;
  clasName:string;
};
const HeartLikeIcon = ({
  isProductLiked = true,
  productId,
  clasName
}: HeartLikeIconProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(isProductLiked);

  const [toogleWishlist] = useToogleWishlistMutation();
  console.log(isProductLiked);
  console.log(productId)
  
  return (
    <span
      className={cn("bg-white flex justify-center items-center hover:cursor-pointer",clasName)} 
      onClick={async () => {
        await toogleWishlist(productId)
        setIsLiked((prev) => !prev);
      }}
    >
      {!isLiked ? (
        <HeartIcon width={30} height={30} />
      ) : (
        <HeartFilledIcon width={30} height={30} color="#e8026e" />
      )}
    </span>
  );
};

export default HeartLikeIcon;
