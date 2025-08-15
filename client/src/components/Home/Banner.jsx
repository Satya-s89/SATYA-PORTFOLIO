import React from 'react'

const Banner = ({ isDark }) => {
  const logos = [
    {
      id: 1,
      name: 'UI/UX Designer',
    },
    {
      id: 2,
      name: 'Frontend Developer',
    },
    {
      id: 3,
      name: 'Full Stack Developer',
    },
    {
      id: 4,
      name: 'Unity Developer', // Added Unity skill here
    },
    {
      id: 5,
      name: 'Backend Developer',
    },
    {
      id: 6,
      name: 'Tech Enthusiast',
    },
    {
      id: 9,
      name: 'Web Developer',
    },
    {
      id: 12,
      name: 'UI/UX Designer',
    },
  ];

  const duplicatedLogo = [...logos, ...logos];

  return (
    <div className="overflow-hidden border-[#e2e8f0] border-y border-bg-700 py-sm w-[100vw]">
      <div className="flex flex-row gap-6 animate-scroll mt-5 mb-5">
        {duplicatedLogo.map((logo, idx) => (
          <div
            key={idx}
            className="inline-flex items-center rounded-full px-4 py-2 w-fit min-w-fit"
          >
            <span className="text-2xl font-bold text-[#b7bfca] box-shadow-[0_0_10px_#30AF5B]">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
