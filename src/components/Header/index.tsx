import Link from "next/link";
import { PiShoppingCartLight } from "react-icons/pi";

const Header = () => {
  return (
    <header className="bg-gray border-b border-b-borderGray">
      <div className="container mx-auto flex justify-between items-center p-2.5">
        <Link
          href={"/"}
          className="flex items-center gap-2 text-purple text-xl"
        >
          <span className="relative text-xs border border-purple rounded-full p-3 text-dsLogo before:absolute before:block before:w-[42.28px] before:h-11 before:rounded-full before:border before:border-black before:-top-[4px] before:-left-[2px]">
            DS
          </span>
          Dev Store
        </Link>
        <PiShoppingCartLight size={33} className="cursor-pointer"/>
      </div>
    </header>
  );
};

export default Header;
