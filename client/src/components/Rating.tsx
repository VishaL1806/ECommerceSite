import { StarFilledIcon } from "@radix-ui/react-icons";

const Rating = ({rating}:{rating:number}) => {
  return (
    <section className="rating flex gap-4 w-full">
        <div className="flex justify-between items-center w-32">
        {[...Array(5)].map((star, index) => (
        <StarFilledIcon
          key={index}
          width={20}
          height={20}
          edgeMode="smooth"
          elevation={1}
          color={index + 1 <= rating ? "#FFAD33" : "gray"}
        />
      ))}
        </div>
      <span className="flex justify-between items-center ">{Math.floor(Math.random()*30)}</span>
    </section>
  );
};

export default Rating;
