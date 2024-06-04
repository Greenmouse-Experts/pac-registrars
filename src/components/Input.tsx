import React from "react"

interface InputProps{
    label?: string;
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ placeholder, type, label}:InputProps) {
  return (
    <div className="font-monstrat flex flex-col gap-2 w-full ">
      <label className="text-lg font-montserrat font-semibold">{label}</label>
      <input
        type={type ? type : "text"}
        placeholder={placeholder}
        className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
        required
      />
    </div>
  );
}

export default Input;
