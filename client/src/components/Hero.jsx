import React from 'react'
import './Hero.css'
import { ArrowRightIcon } from 'lucide-react';
import image from './image1.jpg'
const Hero = ({isDark}) => {
  return (
    <div className="w-full pt-[20vh] lg:w- flex flex-col  lg:flex-row  items-center px-6 gap-6">
      <div className="relative w-full lg:w-[40%] flex justify-center">
        <div className='relative w-fit'>
        <img
          src={image}
          className=" relative w-[250px] md:w-[350px] h-[300px] lg:h-[450px] lg:w-[400px] rounded-b-[46%]"
          alt="pic"
        />

      <div
      className={`absolute bottom-4 right-4 h-[120px] w-[120px]  rounded-full shadow-2xl flex items-center justify-center ${

        isDark ? 'bg-[#111116] ' :'bg-[#FFFFFF]' 
      }`}
    >
      <div className="absolute w-full h-full flex items-center justify-center"
      style={{
        animation: 'spinInfinite 15s linear infinite',
      }}
      >
            {Array.from('LETS TALK ✦ Lets Talk ✦ LETS TALK ✦ LETS TALK ✦').map((char, index) => (
              <span
                key={index}
                className="absolute text-[10px] uppercase  "
                style={{
                  transform: `rotate(${index * 7.5}deg) translateY(-45px)`,
                  transformOrigin: 'center',
                }}
              >
                {char}
              </span>
            ))}
          </div>
      <span className={`h-[60px] w-[60px] rounded-full flex items-center justify-center
        ${isDark ? 'border border-[#F7F8FC]' : 'border border-[#000000]'}
        rotate-[-45deg] hover:rotate-[0deg] transition-transform duration-300 ease-in-out
        `}
        onClick={() => {
    window.location.href = "mailto:kakihari03@gmail.com";
  }}
        ><ArrowRightIcon/></span>
      </div> 

</div>  
        
      </div>
      <div className="text-center lg:text-left flex flex-col w-full lg:w-[50%] mt-10 lg:mt-[-50px] ">
        <span className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight ">
          A <span className="text-[#30AF5B]">creative developer</span>
          <br className='hidden md:block' /> & digital designer
        </span>
        <p className="tracking-wide ext-sm md:text-base mt-4 leading-relaxed">
          I collaborate with brands globally to design impactful, mission-
          <br />
          focused websites that drive results and achieve business goals.
        </p>
        <a href="https://drive.google.com/uc?export=download&id=1OgufFKhHSwY3kvCasY4cNQ1MlxfMWl4O">
        <button
          className={`
          resume-button 
          border border-black 
          px-4 py-2 
          max-w-fit 
          rounded-4xl 
          mt-[10px] 
          cursor-pointer 
          relative
          ${isDark ? 'text-white border-white ' : 'text-black border-black '}
          `} data-dark={isDark}>
          My Resume
        </button>
        </a>
      </div>
    </div>
  );
}

export default Hero
 