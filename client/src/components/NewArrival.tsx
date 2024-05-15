import React from 'react'
import { Link } from 'react-router-dom'
import HeaderTitle from './HeaderTitle'
import ps5 from "../assets/ps5.svg";
import woman from "../assets/woman-collection.svg";
import perfume from "../assets/perfume.svg";
import speakers from "../assets/speakers.svg";

const NewArrival = () => {
  return (
    <div className="mx-32 mt-16">
        <HeaderTitle heading="Featured" title="New Arrival" />
        <div className="flex gap-10 h-[700px] text-white">
          <div className="flex-1 flex bg-black justify-center items-end rounded-md relative">
            <img src={ps5} alt="" />
            <div className="absolute bottom-5 left-5 pb-10 pl-10 flex flex-col gap-6">
              <p className="text-3xl">PlayStation 5</p>
              <span className="flex flex-col">
              <p className="text-sm font-light">Black and White version of PS5</p>
              <p className="text-sm font-light">coming out on sale.</p>
              </span>
              <Link className="underline" to={"/"}>Shop Now</Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex-1 flex bg-black justify-end items-center rounded-md relative">
             <img src={woman} alt="" className="h-full rounded-md" />
             <div className="absolute bottom-0 left-5 pb-10 pl-10 flex flex-col gap-6">
              <p className="text-3xl">Women's Collections</p>
              <span className="flex flex-col">
              <p className="text-sm font-light">Featured woman collections that</p>
              <p className="text-sm font-light">give you another vibe.</p>
              </span>
              <Link className="underline" to={"/"}>Shop Now</Link>
            </div>
            </div>
            <div className="flex-1 flex gap-10">
              
                <div className="flex-1 flex bg-black justify-center items-center rounded-md relative">
                 <img src={speakers} alt="" />
                 <div className="absolute bottom-5 left-10 flex flex-col gap-4">
              <p className="text-3xl">Speakers</p>
              <span className="flex flex-col">
              <p className="text-sm font-normal">Amazon wireless speakers</p>
              </span>
              <Link className="underline" to={"/"}>Shop Now</Link>
            </div>
                </div>
                <div className="flex-1 flex bg-black justify-center items-center rounded-md relative">
                  <img src={perfume} alt="" />
                  <div className="absolute bottom-5 left-10 flex flex-col gap-4">
              <p className="text-3xl">Perfume</p>
              <span className="flex flex-col">
              <p className="text-sm font-light">GUCCI INTENSE OUD EDP</p>
            
              </span>
              <Link className="underline" to={"/"}>Shop Now</Link>
            </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default NewArrival