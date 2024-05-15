import { BreadCrumb } from "@/components";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useGetCartItemsQuery } from "@/redux/slices/api/productApiSlice";
import { CartItem } from "@/types";

const Cart = () => {
  const { data: cartItems, isLoading } = useGetCartItemsQuery("");
  

    if(isLoading){
      return <div>Loading</div>
    }
  return (
    <section className="cart mx-32">
      <div className="flex flex-col gap-9">
        <div className="mb-10">
          <BreadCrumb />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col flex-[4]">
            <div className="flex shadow-md px-9 py-5 justify-between items-start gap-5">
              <span className="w-2/6 max-w-2/6">Product</span>
              <span className="w-1/6 max-w-1/6">Price</span>
              <span className="w-1/6 max-w-1/6">Quantity</span>
              <span className="w-1/6 max-w-1/6">Subtotal</span>
            </div>
            <ScrollArea className="max-h-[360px] flex flex-col gap-9">
              {cartItems.data.map((item :{ product :CartItem,quantity:number,total:number}, index : number) => (
                <div className="flex shadow-md p-10 justify-between items-center h-12 gap-5 my-2" key={index}>
                  <span className="w-2/6 max-w-2/6 flex gap-5">
                    <img src={item.product.thumbnail} alt="" width={30} height={30} />
                    <p className="text-wrap break-words">{item.product.title}</p>
                  </span>
                  <span className="w-1/6 max-w-1/6">${item.product.price}</span>
                  <span className="w-1/6 max-w-1/6">
                    <Input
                      type="number"
                      className="w-16 border focus-visible:ring-0 rounded-sm focus-visible:ring-offset-0"
                      defaultValue={item.quantity}
                    />
                  </span>
                  <span className="w-1/6 max-w-1/6">${item.total}</span>
                </div>
              ))}
            </ScrollArea>
          </div>
          <div className="flex-1 border flex flex-col py-7 px-4 gap-5 justify-between max-h-[425px] min-h-[425px]">
            <span className="text-xl font-semibold">Cart Total</span>
            <div className="flex flex-col gap-7">
              <span className="flex justify-between border-b-2 pb-2">
                <p>Subtotal:</p> <p>${}</p>
              </span>
              <span className="flex justify-between border-b-2 border-black pb-2">
                <p>Shipping:</p> <p>Free</p>
              </span>
              <span className="flex justify-between border-b-2 pb-2">
                <p>Total:</p> <p>${cartItems.data.reduce((x,{total}) =>x+total,0)}</p>
              </span>
            </div>
            <div className="w-full flex justify-center items-center">
              <Button
                variant={"destructive"}
                className="px-10 py-6 rounded-sm text-md"
              >
                Proceed to checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
