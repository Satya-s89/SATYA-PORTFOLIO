import React from 'react';
import { Dot } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const Box = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col lg:px-20 lg:py-20 justify-center items-center">
        <motion.div
          className={`flex flex-col justify-center items-center ${
            isDark ? "bg-[#111116]" : "bg-[#FFFFFF]"
          } w-[80vw] min-h-[300px] lg:h-[50vh] rounded-4xl`}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span
            className={`${
              isDark ? "bg-[#21291F]/60" : "bg-[#F7FFF0]"
            } px-2 py-2 rounded-full text-xs flex items-center`}
          >
            <Dot color="#30AF5B" className="animate-ping" />
            Available for work
            <Dot color="#30AF5B" />
          </span>
          <span
            className={`text-3xl lg:text-5xl ${
              isDark ? "text-white " : "text-black"
            }`}
          >
            Let's create your
          </span>
          <span className="text-3xl lg:text-5xl">next big idea.</span>
          <button
          onClick={()=>navigate('/contact')}
            className={`relative group overflow-hidden border px-6 py-3 max-w-fit rounded-3xl mt-4 cursor-pointer transition duration-500
    ${isDark ? "text-white border-white" : "text-black border-black"}
  `}
          >
            <span
              className={`absolute inset-0 w-full h-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left
      ${isDark ? "bg-white" : "bg-black"}
    `}
            ></span>

            <span
              className={`relative z-10 transition-all duration-500 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-105
      ${
        isDark
          ? "text-white group-hover:text-black"
          : "text-black group-hover:text-white"
      }
    `}
            >
              Contact Me
            </span>

            <span className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:ring-4 group-hover:ring-[#30AF5B]/40"></span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Box;