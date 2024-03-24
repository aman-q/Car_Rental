
import React from 'react'
import Image from 'next/image';
import { CustomButtonProps } from '@/types/index';

export const CustomButton = ({title , constainersStyles, handleClick,btnType ,textStyles,isDisabled,rightIcon}:CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType||"button"}
      className={`custom-btn ${constainersStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
        </span>
        {rightIcon &&(
          <div className="relative w-6 h-6">
           <Image 
             src={rightIcon}
             alt="right icon"
             fill 
             className="object-contain"
           />
          </div>
        )}



    </button>
  )
}
