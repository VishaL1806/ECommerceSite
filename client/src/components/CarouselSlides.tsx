import Carousel from "./Carousel";
import HeaderTitle from "./HeaderTitle";


type CarouselSlidesProps = {
  heading: string;
  title: string;
  displayTime?: boolean;
  children: React.ReactNode;
};
const CarouselSlides = ({ heading,title,displayTime=false,children}: CarouselSlidesProps) => {
  return (
    <div className="px-32 mt-16 flex flex-col relative">
        {/* Header Line */}
     <HeaderTitle heading={heading} title={title} displayTime={displayTime} />

      <div className="flex justify-start">
        <Carousel className="w" slidesPerView={5} navigation={true}>
          {children}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSlides;
