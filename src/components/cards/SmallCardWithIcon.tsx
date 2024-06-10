interface SmallProps {
  text: string;
  img: string;
}

function SmallCardWithIcon({ text, img }: SmallProps) {
  return (
    <div className="p-8 py-3 xl:h-[12.5rem] card-shadow rounded-[10px] text-center flex flex-col gap-3 justify-center items-center relative bg-white">
      <img src={img} alt={img} className=" scale-90"/>
      <p>{text}</p>
      <img
        src="/icons/insert.svg"
        alt=""
        className="absolute bottom-0 right-0"
      />
    </div>
  );
}

export default SmallCardWithIcon;
