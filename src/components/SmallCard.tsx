interface SmallProps{
    text:string;
}

function SmallCard({text}:SmallProps) {
  return (
    <div className="p-8 py-10 card-shadow rounded-[10px] text-start flex justify-center items-center relative">
    <p className="text-start">{text}</p>
    <img src="/icons/insert.svg" alt="" className="absolute bottom-0 right-0" />
</div>
  )
}

export default SmallCard