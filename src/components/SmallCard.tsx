interface SmallProps{
    text:string;
}

function SmallCard({text}:SmallProps) {
  return (
    <div className="p-8 py-10 shadow-lg rounded-[10px] text-center flex justify-center items-center relative">
    <p>{text}</p>
    <img src="/icons/insert.svg" alt="" className="absolute bottom-0 right-0" />
</div>
  )
}

export default SmallCard