import React from 'react'
import './LogoBanner.css'
const LogoBanner = ({isDark}) => {
    const logos = [
  {
    id: 1,
    link: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
    name: 'MongoDB',
  },
  {
    id: 2,
    link: 'https://icon.icepanel.io/Technology/png-shadow-512/Express.png',
    name: 'ExpressJS',
  },
  {
    id: 3,
    link: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    name: 'ReactJS',
  },
  {
    id: 4,
    link: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    name: 'NodeJS',
  },
  {
    id: 5,
    link: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    name: 'JavaScript',
  },
  {
    id: 6,
    link: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    name: 'TypeScript',
  },
  {
    id: 7,
    link: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
    name: 'CSS3',
  },
  {
    id: 8,
    link: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    name: 'HTML5',
  },
  {
    id: 9,
    link: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    name: 'GitHub',
  },
  {
    id: 10,
    link: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
    name: 'Vercel',
  },
  {
    id: 11,
    link: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
    name: 'Next.js',
  },
  {
    id: 12,
    link: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    name: 'TailwindCSS',
  },
];

const duplicatedLogo = [...logos,...logos];
  return (
    <div className="overflow-hidden border-[#e2e8f0] border-y border-bg-700 py-sm w-[100vw] ">
      <div className="flex flex-row gap-6 animate-scroll mt-5 mb-5 left-[]">
        {duplicatedLogo.map((logo, idx) => (
          <div
            key={idx}
            className={`inline-flex items-center  rounded-full px-4 py-2 w-fit min-w-fit ${isDark ? 'bg-[#242424]':'bg-white'}`}
          >
            <img className="w-[18px] h-auto mr-2" src={logo.link} alt={logo.name} />
            <p>{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

}

export default LogoBanner
