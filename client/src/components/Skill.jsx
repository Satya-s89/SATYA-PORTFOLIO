import React from 'react'
import {Sparkle} from 'lucide-react'
import './Skill.css'
import {motion} from 'framer-motion'
const Skill = ({isDark}) => {
  const skills = [
    {
      name:'React',
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      level: 'intermediate',
      persentage: 80,
      color: '#30AF5B'
    },
    {
      name:'NodeJS',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      level: 'intermediate',
      persentage: 80,
      color: '#30AF5B',
      type: 'frontend'
    },
    {
      name:'MongoDB',
      icon: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
      level: 'intermediate',
      persentage: 90,
      color: '#30AF5B',
    },
    {
      name:'ExpressJS',
      icon: 'https://icon.icepanel.io/Technology/png-shadow-512/Express.png',
      level: 'intermediate',
      persentage: 75,
      color: '#30AF5B',
    },
    {
      name:'JavaScript',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      level: 'intermediate',
      persentage: 80,
      color: '#30AF5B',
    },
    {
      name:'CSS3',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
      level: 'intermediate',
      persentage: 75,
      color: '#30AF5B',
    },
    {
      name:'HTML5',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      level: 'intermediate',
      persentage: 75,
      color: '#30AF5B',
    },
    {
      name:'GitHub',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      level: 'intermediate',
      persentage: 85,
      color: '#30AF5B'
    },
    {
      name:'Vercel',
      icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
      level: 'intermediate',
      persentage: 80,
      color: '#30AF5B'
    },
    {
        name:'Next.js',
        icon:'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
        level:'intermediate',
        persentage: 80,
        color:'#30AF5B'
    },
    {
      name: 'Unity Developer',
      icon: 'data:image/jpeg;base64,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',
      level: 'intermediate',
      percentage: 50,
      color: '#30AF5B',
    }

    
  ]
  return (
    <div className='lg:w-[90vw] w-[100vw]'>
      <div className="flex flex-col lg:flex-row border-b-2 border-[#e2e8f0]">
        <motion.div className="flex flex-col justify-center px-6 md:px-20 py-10 md:py-20 lg:m-auto lg:px-0 lg:py-0"
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,ease:'easeOut'}}
       
        >
          <h1 className="flex text-[#30AF5B] ">
            <Sparkle color="#30AF5B" /> My Skills
          </h1>
          <br />
          <span className="text-4xl font-bold">SKILLS</span>
          <p>
            I’ve honed a diverse set of design and development skills
            <br /> to craft functional, visually appealing, and user-first
            digital products.
          </p>
        </motion.div>
        <div className='lg:m-auto'>
          <motion.div className="flex flex-col h-[200px] md:h-[250px] w-[300px] md:w-[350px] overflow-y-auto scrollbar-hide mt-[30px] md:mt-[60px] mb-[30px] md:mb-[60px] m-auto gap-4 "
          initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,ease:'easeOut'}}
        

          >
            {" "}
            <p className="text-center">👇scroll👇</p>
            {skills.map((skill) => (
              <div className="flex flex-row ">
                <div className="flex flex-col m-[auto] w-[130px]">
                  <img
                    className="inline-flex h-[60px] w-fit m-[auto]"
                    src={skill.icon}
                    alt=""
                  />
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={75}
                  readOnly
                  className={`fixed-range w-full max-w-[250px] h-2 bg-gray-300 rounded-full cursor-default m-[auto] appearance-none ${
                    isDark ? "dark-page " : ""
                  }`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skill