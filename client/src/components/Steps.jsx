import React from 'react';
import { Sparkle, Brain, Pen, PenBox, Code, ShieldCheck, Rocket, Puzzle, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Steps = ({ isDark }) => {
  const step = [
    {
      id: 1,
      icon: <Brain />,
      heading: 'Research & Planning',
      main: 'Understand project goals, target audience, and technical requirements before touching a single line of code.',
    },
    {
      id: 2,
      icon: <Layers />,
      heading: 'Prototyping',
      main: 'Create wireframes or low-fidelity mockups to map out features, game mechanics (for Unity), and user flow.',
    },
    {
      id: 3,
      icon: <PenBox />,
      heading: 'UI/UX & Branding',
      main: 'Design interfaces, color palettes, typography, and branding elements for a visually consistent experience.',
    },
    {
      id: 4,
      icon: <Code />,
      heading: 'Development',
      main: 'Build interactive applications using React, Node.js, and Unity while ensuring clean, scalable code.',
    },
    {
      id: 5,
      icon: <Puzzle />,
      heading: 'Integration',
      main: 'Connect APIs, set up backend services, and integrate with Unity assets or third-party tools.',
    },
    {
      id: 6,
      icon: <ShieldCheck />,
      heading: 'Testing & Optimization',
      main: 'Run QA checks for performance, SEO, and bug fixes to ensure everything runs smoothly.',
    },
    {
      id: 7,
      icon: <Rocket />,
      heading: 'Deployment',
      main: 'Deploy to the web, app stores, or cloud servers, making sure everything is production-ready.',
    },
  ];

  return (
    <div className='mb-[110px]'>
      <div className="mt-16 lg:mt-[110px] lg:mr-[167px]">
        <motion.div
          className="flex flex-col justify-center items-start px-6 lg:px-0 lg:ml-[160px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="text-[#30AF5B] flex items-center gap-2 font-[ClashDisplay] text-sm font-bold uppercase">
            <Sparkle /> Steps I Follow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[ClashDisplay] mt-2">
            My Development Process
          </h2>
          <p className="text-gray-700 mt-4 text-base max-w-xl">
            From idea to launch, here’s how I take projects from concept to reality using my tech stack.
          </p>
        </motion.div>
        <span className='ml-6 lg:ml-40'>Scroll👉</span>
        <motion.div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide mt-10 px-6 lg:px-0 lg:ml-[160px]">
          {step.map((item) => (
            <div
              key={item.id}
              className={`flex-shrink-1 lg:flex-shrink-0 min-w-[280px] sm:min-w-[140px] lg:w-[300px] flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm backdrop-blur-md transition-all hover:shadow-md ${isDark ? 'bg-black/80' : 'bg-white/80'}`}
            >
              <div className={`h-[60px] w-[60px] rounded-full flex items-center justify-center text-[#30AF5B] mb-4 ${isDark ? 'bg-black/80 border border-white' : 'bg-[#e2e8f0]'}`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">0{item.id + ". " + item.heading}</h3>
              <p className="text-gray-600 text-sm">{item.main}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Steps;
