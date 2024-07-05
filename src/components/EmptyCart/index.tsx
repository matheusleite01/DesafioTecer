import Image from "next/image";
import img from "@/assets/img/emptyCart.png";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-2">
      <Image src={img} width={300} height={300} alt="Empty Cart" />
      <div>
        <h3 className="text-xl text-black font-bold mb-1">Your Cart is empty</h3>
        <p className="text-borderGray font-semibold">Looks like you have not added anything to you cart. Go ahead & explore</p>  
      </div>
      <Link href={"/"} className="bg-purple p-3 w-52 text-white rounded-lg transition-all duration-200 font-bold mt-4 hover:bg-black">Shop our produts</Link>
    </div>
  );
};

export default EmptyCart;
