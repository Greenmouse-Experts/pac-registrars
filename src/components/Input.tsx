import React, { forwardRef } from "react";

interface InputProps {
  label?: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, type, label, errors, ...rest }, ref) => {
  return (
    <div className="font-monstrat flex flex-col gap-2 w-full ">
      {/* <label className="text-lg font-montserrat font-semibold">{label}</label> */}
      <div className="w-full">
        <input
          type={type ? type : "text"}
          placeholder={placeholder}
          ref={ref}
          {...rest}
          className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] 2xl:placeholder:text-base placeholder:text-sm h-[50px] pl-5 w-full"
        />
        {errors && <p className="text-red-600 text-base">{errors}</p>}
      </div>
    </div>
  );
});

export default Input;
