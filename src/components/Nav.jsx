import React from "react";
import logo from "./logo.png";
import { FaCaretDown } from "react-icons/fa";
import After from "./After.jsx";

const Nav = () => {
  return (

    <div className=" font-Roboto,sans-serif pl-[10vw] flex justify-between items-top bg-transparent ">
      
      <div>
        <img className="h[3vh] w-[7vw] bg-contain" src={logo} />
      </div>

      <div className=" w-[70%] flex items-center justify-end text-white ml-[3.9vw] gap-1 pb-[4.5vh] text-[.85vw] font-semibold">
        
        <a className=" p-3 cursor-pointer">GET KALI</a>
        
        <a className=" p-3 cursor-pointer">BLOG</a>
        
        <a id="doc"  className="flex p-3 items-center cursor-pointer hover:bg-black hover:rounded-t-md" >
          DOCUMENTATION <FaCaretDown /> 
        </a>
        
        <a id="com"  className="flex  p-3 items-center cursor-pointer">
          COMMUNITY <FaCaretDown />
        </a>
        
        <a id="cou"  className="flex  p-3 items-center cursor-pointer">
          COURSES <FaCaretDown />
        </a>
        
        <a id="dev"  className="flex  p-3 items-center cursor-pointer">
          DEVELOPERS <FaCaretDown />
        </a>
        
        <a id="abo"  className="flex p-3  items-center cursor-pointer">
          ABOUT <FaCaretDown />
        </a>
        
      </div>
      <a href="http://"></a>
      
    </div>
  );
};

export default Nav;
