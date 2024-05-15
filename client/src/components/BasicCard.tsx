import { cn } from "@/lib/utils";



type BasicCardProps={
    imgPath:string;
    numbers:number;
    type:string
}

const BasicCard = ({card} : {card : BasicCardProps}) => {
  return (
    <section className="basic-card">
      <div className="flex flex-col justify-center items-center border rounded-sm p-5 max-w-[290px]">
        <div className={cn("flex-[2]",card.numbers===33000 && 'invert')}>
          <img src={card.imgPath} alt="" className="z-0" width={100} />
        </div>
        <span className="flex-1 flex flex-col justify-center items-center m-0 p-0 pt-3 gap-2">
          <p className="font-bold text-[35px]">{card.numbers}</p>
          <p className="font-normal">{card.type}</p> 
        </span>
       
      </div>
    </section>
  )
}

export default BasicCard