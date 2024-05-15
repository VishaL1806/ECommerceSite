import React from "react";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer mt-24 bg-black text-white ">
      <div className="flex justify-evenly py-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold">My Site</h1>
          <span>Subscribe</span>
          <span>Get 10% off on your first order</span>
          <Input
            type="email"
            placeholder="Enter your email"
            className="text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-3 max-w-24 ">
          <h1 className="text-lg font-bold">Support</h1>
          <span>
            Addres line1 <br />
            Address line2
          </span>
          <span>mysite@gmail.com</span>
          <span>+919999999999</span>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold">Account</h1>
          <Link to="">My Account</Link>
          <Link to="">Login/Register</Link>
          <Link to="">Cart</Link>
          <Link to="">Wishlist</Link>
          <Link to="">Shop</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold">Quick Links</h1>
          <Link to="">Privacy Policy</Link>
          <Link to="">Terms Of Use</Link>
          <Link to="">FAQ</Link>
          <Link to="">Contact</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold">Download App</h1>
          <span className="text-gray-400">Save $3 with App New Users Only</span>
          <Link to="">Terms Of Use</Link>
          <Link to="">FAQ</Link>
          <Link to="">Contact</Link>
        </div>
      </div>
      <hr className="border-gray-700" />
      <div className="bg-black h-10 text-center text-gray-600">
        <p className="my-3">Copyright. All Rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
