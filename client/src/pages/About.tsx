import { BreadCrumb } from "@/components";
import aboutPageMainImage from "../assets/about-page-main.png";
import Carousel from "@/components/Carousel";
import { aboutPageNumbers, aboutPeople } from "@/constants";
import { SwiperSlide } from "swiper/react";
import PeopleCard from "@/components/PeopleCard";
import Services from "@/components/Services";
import BasicCard from "@/components/BasicCard";

const About = () => {
  return (
    <section className="about-page">
      <div className="flex flex-col">
        <div className="px-32 mb-14"><BreadCrumb /></div>
        <div className="flex gap-48">
          <div className="flex-1 flex flex-col justify-center items-start pl-32 gap-5">
            <span className="text-[70px] font-semibold">Our Story</span>
            <span>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </span>
            <span>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </span>
          </div>
          <div className="flex-1">
            <img src={aboutPageMainImage} alt="" />
          </div>
        </div>
        <div className="ml-32 my-24">
          <Carousel className="w-full" slidesPerView={4} pagination={true} >
            {aboutPageNumbers.map((service,index)=>{
              return (<SwiperSlide key={index}><BasicCard card={service} /></SwiperSlide>)
            })}
          </Carousel>
        </div>
        <div className="ml-32 my-24">
          <Carousel className="w-full" slidesPerView={3} pagination={true} >
            {aboutPeople.map((person,index)=>{
              return (<SwiperSlide key={index}><PeopleCard person={person} /></SwiperSlide>)
            })}
          </Carousel>
        </div>
        <div className="mx-32 my-20">
        <Services />
      </div>
      </div>
    </section>
  );
};

export default About;
