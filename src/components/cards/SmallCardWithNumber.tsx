interface SmallProps{
    text:string;
    num: string;
}

function SmallCardWithNumber({text, num}:SmallProps) {
  return (
    <div className="p-8 py-10 card-shadow rounded-[10px] rounded-tl-none text-center flex justify-center items-center relative bg-white overflow-hidden min-h-44">
      <p className="bg-bluePrimary text-white font-kaushan text-4xl absolute -top-3 -left-4 w-[4.5rem] h-[4.5rem] rounded-full flex justify-center items-center">{num}</p>
    <p className="mt-3 text-center">{text}</p>
    {/* <img src="/icons/insert.svg" alt="" className="absolute bottom-0 right-0" /> */}
</div>
  )
}

export default SmallCardWithNumber