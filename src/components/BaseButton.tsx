import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface IBtn {
  color: string;
  link: string;
  icon?: boolean;
  text: string;
}

function BaseButton({ color, link, icon, text }:IBtn) {
  return (
    <NavLink
      to={link}
      className={`${
        color === "blue"
          ? "bg-bluePrimary btn-green text-white"
          : "btn-white bg-white"
      }  text-bluePrimary w-fit mt-10 px-8 py-3 font-medium btn transition-all text-lg flex items-center gap-3`}
    >
      {text}{" "}
      {icon && (
        <span>
          <MdArrowOutward size={20} />
        </span>
      )}
    </NavLink>
  );
}

export default BaseButton;
