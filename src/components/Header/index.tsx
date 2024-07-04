import useGlobalContext from "@/hooks/useGlobalContext";
import Link from "next/link";
import { PiShoppingCartLight } from "react-icons/pi";

const Header = () => {
  const {cartDataProducts} = useGlobalContext();
  return (
    <header className="bg-gray border-b border-b-borderGray">
      <div className="container mx-auto flex justify-between items-center p-2.5">
        <Link
          href={"/"}
          className="flex items-center gap-2 text-purple text-xl"
        >
          <span className="relative text-xs border border-purple rounded-full p-3 text-dsLogo before:absolute before:block before:w-[42.28px] before:h-[44px] before:rounded-full before:border before:border-black before:-top-[4px] before:-left-[2px]">
            DS
          </span>
          Dev Store
        </Link>
        <Link href={"/cart"} className="relative">
          <PiShoppingCartLight size={33} className="cursor-pointer" />
          <div className="absolute -top-2 -right-2 bg-black text-white w-5 h-[20px] text-center text-xs rounded-full">{cartDataProducts.length}</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
