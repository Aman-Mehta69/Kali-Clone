import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoDocumentsOutline } from "react-icons/io5";

const Button = ({data}) => {
  return (
    <div className="">

           {data.icon ?

      <button className="border-[#FEA44C] border-2 h-[3vw] w-[10vw] flex items-center justify-center text-[#FEA44C] rounded-md font-bold text-sm hover:bg-[#fea54c]
       hover:text-white transition-all ease-linear delay-150 hover:translate-y-1 hover:scale-[1.3, 0.4] duration-100 backdrop-contrast-150 drop-shadow-lg shadow-xl shadow-[#fea54c65] hover:shadow-[#fea54cca] ">
        {data.content}
        <span className="font-normal text-[1.31vw] pl-1 ">
          <MdOutlineFileDownload /> 
        </span>
      </button>

      :
      
      <button className="h-[3vw] w-[10vw] bg-[#3070dede] hover:bg-[#417ee7] flex items-center justify-center hover:text-[#FEA44C] rounded-md font-bold text-sm 
      transition-all hover:translate-y-1 ease-linear delay-150 hover:scale-[1.3, 0.4] duration-100 backdrop-contrast-150 drop-shadow-lg shadow-xl shadow-[#367af080] hover:shadow-[#367af0bf] ">
       {data.content}
       <span className="font-normal text-[1.31vw] pl-1">
         <IoDocumentsOutline />
       </span>
     </button>

      }
      
    </div>
  );
};

export default Button;
