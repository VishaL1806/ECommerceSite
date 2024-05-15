
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { HeartIcon, PersonIcon } from "@radix-ui/react-icons";
import cart from '../assets/cart.svg'
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const {user}  = useSelector((state : {auth : {user : {wishlist:number,cart:number,_id:string}}} )=>state?.auth)
  console.log(user);
  
  return (
    <section className="main-header px-32 py-3 flex justify-between">
      <div className="font-extrabold text-2xl"><Link to="/">ECommerce</Link></div>
      <div className="text-lg gap-10 flex justify-between">
        <Link to="/contact-us">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/Gaming/Havic HV G-92 Gamepad">Product Detail</Link>
      </div>
      <div className="flex gap-4 justify-between items-center">
        <Input
          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-gray-200 text-white"
          
          type="text"
          placeholder="What are you looking for ??"
          size={30}
        />
        {user._id!=="" &&
        <div className="flex gap-4 justify-between items-center">
        <HeartIcon className="cursor-pointer" width={35} height={30} onClick={()=>navigate("/wishlist")} />{user.wishlist??""}
        <img src={cart} alt="" width={30} height={30} className="font-semibold cursor-pointer" onClick={()=>navigate("/my-account/cart")} />{user.cart??""}
        <PersonIcon className="cursor-pointer" width={30} height={30} onClick={()=>navigate("/my-account")} />
        </div>}
      </div>
    </section>
  );
};

export default Header;
