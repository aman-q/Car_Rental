"use client";

import { useRouter } from "@/node_modules/next/navigation";
import { ShowMoreProps } from "@/types/index";
import { updateSearchParams } from "@/utils/index";
import { CustomButton } from "./CustomButton";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    
    const newLimit = (pageNumber + 1) * 10;
    
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname,{ scroll: false });    
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="Button"
          title="Show More"
          handleClick={handleNavigation}
          constainersStyles="bg-primary-blue rounded-full text-white"
        />
      )}
    </div>
  );
};

export default ShowMore;