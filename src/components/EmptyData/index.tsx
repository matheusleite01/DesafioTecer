import Image from "next/image";
import imgIcon from "@/assets/icons/emptyDataIcon.svg";
import { toast } from "sonner";

const EmptyData = ({error}: {error: string}) => {
  if (error) toast.error(error);
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <Image src={imgIcon} width={300} height={300} alt="Empty Data" />
      <p className="text-xl text-center text-borderGray">No Data Found !</p>
    </div>
  );
};

export default EmptyData;
