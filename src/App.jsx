import React, {useState} from "react";
import Nav from "./components/Nav";
import Btn from "./components/Button"
import bg from "./components/bg.jpg";
import icon from "./components/dg.svg";

const App = () => {

    const data = [
      {
        content : "DOWNLOAD",
        icon : true,

      },

      {
        content : "DOCUMENTS",
        icon : false,

      },

    ];

  return (

    <div className=" overlay m-0 p-0 h-screen w-full bg-contain bg-blue-950/80">

      <img
        className=" absolute -z-10 h-screen w-full bg-contain"
        src={bg}
        alt=""
      />

      <Nav />

      <div className=" flex items-center justify-end pg-1-contant-div h-[80vh] w-[78vw] ">

        <div className=" absolute left-[17%] top-[23%] h-[50vh] w-[29vw] ">

          <img className="" src={icon} alt="" />

        </div>

        <div className="text-white w-[29.5vw] h-[50vh]" >

          <h1 className="pt-[0.6vw] font-serifbold text-[2.12vw] leading-[2.5vw]">The most advanced Penetration Testing Distribution</h1>
          <p className="pt-[1.5vw] text-xl font-sans leading-[1.8vw]">
            Kali Linux is an open-source, Debian-based Linux distribution geared
            towards various information security tasks, such as Penetration
            Testing, Security Research, Computer Forensics and Reverse
            Engineering.
          </p>
          
          <div className=" pt-[2.5vw] flex gap-6">

           {data.map((item, index)=>(
            <Btn data={item} />
           ))}

          </div>

        </div>

      </div>

    </div>
    
  );
};

export default App;
