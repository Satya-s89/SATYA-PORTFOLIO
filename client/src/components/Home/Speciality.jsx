import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Code,
  LayoutDashboard,
  Palette,
  Info,
  Sparkle,
  Gamepad2
} from "lucide-react";

const specialityData = [
  {
    title: "Full Stack Development",
    text: "Creating scalable web solutions using React, Node.js, Express, and databases like MongoDB.",
    imgSrc: "data:image/png;base64,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", // replace with selected image
    alt: "Full Stack Development",
    icon: <Code size={20} className="text-[#30AF5B]" />,
  },
  {
    title: "UI/UX Design",
    text: "Designing intuitive interfaces with accessibility and visual appeal.",
    imgSrc: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
    alt: "UI UX Design",
    icon: <LayoutDashboard size={20} className="text-[#30AF5B]" />,
  },
  {
    title: "Unity Game Development",
    text: "Creating immersive 2D/3D games using Unity and C# with performance optimization.",
    imgSrc: "data:image/jpeg;base64,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", // placeholder
    alt: "Unity Game Development",
    icon: <Gamepad2 size={20} className="text-[#30AF5B]" />,
  },
  {
    title: "Backend Development",
    text: "Building robust APIs and server-side logic using Node.js and modern REST architecture.",
    imgSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    alt: "Backend Development",
    icon: <Code size={20} className="text-[#30AF5B]" />,
  },
  {
    title: "Branding",
    text: "Developing identities that resonate with audiences through visuals and messaging.",
    imgSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    alt: "Branding",
    icon: <Palette size={20} className="text-[#30AF5B]" />,
  },
];

const defaultImage =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80";

const Speciality = ({ isDark }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleIndex = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="flex text-[#30AF5B] font-bold mb-[10px] items-center gap-2">
        <Sparkle />
        Speciality
      </h2>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <h3 className="text-5xl font-bold mb-6 text-[#30AF5B]">
            Areas of Expertise
          </h3>
          <div className="flex flex-col gap-4">
            {specialityData.map(({ title, text, imgSrc, alt, icon }, idx) => (
              <div
                key={title}
                className={`border rounded-lg overflow-hidden cursor-pointer ${
                  openIndex === idx
                    ? isDark
                      ? "bg-[#2f2f2f]"
                      : "bg-[#f0f0f0]"
                    : isDark
                    ? "bg-[#1c1c1c]"
                    : "bg-white"
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className={`w-full flex justify-between items-center px-6 py-4 text-lg font-semibold ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {icon}
                    <span>{title}</span>
                  </div>
                  {openIndex === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
                {openIndex === idx && (
                  <div className={`px-6 py-6 border-t flex items-start gap-2 ${
                    isDark ? "bg-[#2f2f2f] text-white" : "bg-white text-black"
                  }`}>
                    <Info size={20} className="text-[#30AF5B] mt-1" />
                    <p>{text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={openIndex !== null ? specialityData[openIndex].imgSrc : defaultImage}
            alt={openIndex !== null ? specialityData[openIndex].alt : "Default Speciality"}
            className="rounded-lg shadow-lg object-cover max-h-96 w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Speciality;
