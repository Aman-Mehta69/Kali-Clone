import React from "react";
import logo from "./logo.png";
import { FaCaretDown } from "react-icons/fa";

const Nav = () => {
  return (

    <div className=" font-Roboto,sans-serif pl-[8vw] pr-[4vw] flex justify-between items-top bg-transparent ">
      
      <div>
        <img className="h[3vh] w-[7vw] bg-contain" src={logo} />
      </div>

      <div className="flex items-center justify-evenly text-white pl-[33vw] gap-8 pb-[5vh] text-[.85vw] font-semibold">
        
        <a className="cursor-pointer">GET KALI</a>
        
        <a className="cursor-pointer">BLOG</a>
        
        <a className="flex items-center cursor-pointer hover:after:contant-[text-rose]" >
          DOCUMENTATION <FaCaretDown />
        </a>
        
        <a className="flex items-center cursor-pointer">
          COMMUNITY <FaCaretDown />
        </a>
        
        <a className="flex items-center cursor-pointer">
          COURSES <FaCaretDown />
        </a>
        
        <a className="flex items-center cursor-pointer">
          DEVELOPERS <FaCaretDown />
        </a>
        
        <a className="flex items-center cursor-pointer">
          ABOUT <FaCaretDown />
        </a>
        
      </div>
      <a href="http://"></a>
      
    </div>
  );
};

export default Nav;
