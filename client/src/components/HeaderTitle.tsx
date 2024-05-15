import React from "react";


type HeaderTitleProps={
    heading:string;
    title:string;
    displayTime? : boolean
}

const HeaderTitle = ({ heading,title,displayTime=false}: HeaderTitleProps) => {
  return (
    <div>
      <div className="flex gap-5 items-center pb-10 title">
        <p className="bg-red-600 w-5 h-10 rounded"></p>
        <p className="text-red-600 font-bold text-xl">{heading}</p>
      </div>
      {/* Title line */}
      <div className="flex w-full h-5 items-center pb-10 gap-44">
        <p className="text-3xl font-semibold">{title}</p>
        {displayTime && (
          <div className="time-container flex h-5 items-center gap-3">
            <div className="flex flex-col">
              <span className="text-[13px]">Days</span>
              <span className="text-2xl font-bold">21</span>
            </div>
            <span className="text-red-600 font-extrabold">:</span>
            <div className="flex flex-col">
              <span className="text-[13px]">Hours</span>
              <span className="text-2xl font-bold">21</span>
            </div>
            <span className="text-red-600 font-extrabold">:</span>
            <div className="flex flex-col">
              <span className="text-[13px]">Minutes</span>
              <span className="text-2xl font-bold">21</span>
            </div>
            <span className="text-red-600 font-extrabold">:</span>
            <div className="flex flex-col">
              <span className="text-[13px]">Seconds</span>
              <span className="text-2xl font-bold">21</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderTitle;
