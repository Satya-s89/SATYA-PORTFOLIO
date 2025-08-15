import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null); 

  const iconStyle = (iconName) => {
    return `transition-transform duration-200 cursor-pointer ${
      hoveredIcon && hoveredIcon !== iconName ? 'text-gray-400' : 'text-black'
    } ${hoveredIcon === iconName ? 'scale-125' : ''}`;
  };

  return (
    <footer className="flex justify-between items-center px-6 py-4 border-t border-gray-300 mt-16">
      <div>
        <span>© 2025 Hari. All rights reserved.</span>
      </div>
      <div className="flex flex-row gap-4">
        <div
          onMouseEnter={() => setHoveredIcon('linkedin')}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => window.open('https://www.linkedin.com/in/hari-kaki-aa2a1a328/', '_blank')}
          className={iconStyle('linkedin')}

        >
          <FaLinkedin size={24} />
        </div>
        <div
          onMouseEnter={() => setHoveredIcon('github')}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => window.open('https://github.com/Satya-s89/', '_blank')}
          className={iconStyle('github')}
        >
          <FaGithub size={24} />
        </div>
        <div
          onMouseEnter={() => setHoveredIcon('mail')}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=kakihari03@gmail.com/', '_blank')}

          className={iconStyle('mail')}
        >
          <Mail size={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
