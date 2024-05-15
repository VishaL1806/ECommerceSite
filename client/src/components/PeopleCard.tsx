
type PeopleCardProps= {
    imgPath : string;
    name:string;
    position:string;
     
}
const PeopleCard = ({person} :{person: PeopleCardProps}) => {
  return (
    <section className="people-card w-[400px]">
      <div className="flex flex-col gap-4">
        <div className="flex-[3] flex justify-center pt-10 items-end bg-gray-300">
          <img src={person.imgPath} alt="" className="h-[400px]" />
        </div>
        <span className="flex-1 flex flex-col justify-center items-start gap-1 m-0 p-0 pt-3 ">
        <p className="font-semibold text-[30px]">{person.name}</p>
          <p className="font-normal">{person.position}</p>
        </span>
        <span className="flex-1 flex justify-start items-center m-0 p-0">
        </span>
        <span className="flex-1 flex justify-start items-center m-0 p-0">
        </span>
      </div>
    </section>
  )
}

export default PeopleCard