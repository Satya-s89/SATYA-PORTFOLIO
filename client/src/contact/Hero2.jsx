import React, { useState, useEffect } from 'react';
import { Sparkle, Dot } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import Footer from '../components/Footer';
import image from '../components/image.jpg';

const faqData = [
  {
    question: 'What role are you currently seeking?',
    answer: 'I am actively seeking a full-time internship or entry-level opportunity in full-stack web development.',
  },
  {
    question: 'Are you open to remote internships?',
    answer: 'Yes! I am open to both remote and on-site internships depending on the opportunity.',
  },
  {
    question: 'How long are you available for an internship?',
    answer: 'I’m available for a minimum of 2–6 months, but I’m flexible based on the project needs and learning opportunity.',
  },
  {
    question: 'What tech stack are you comfortable working with?',
    answer: 'I primarily work with the MERN stack (MongoDB, Express.js, React.js, Node.js), along with tools like Git, Figma, TailwindCSS, and cloud services like Cloudinary.',
  },
];

const Hero2 = ({ isDark }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const iconStyle = (iconName) => {
    return `transition-transform duration-200 ${
      hoveredIcon && hoveredIcon !== iconName ? 'text-gray-400' : 'text-black'
    } ${hoveredIcon === iconName ? 'scale-125' : ''}`;
  };

  const inputClasses = `lg:w-full w-[75vw] p-3 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#30AF5B] ${
    isDark
      ? 'bg-[#1e1e1e] text-white border-gray-700 placeholder-gray-400'
      : 'bg-white text-black border-gray-300'
  }`;

  return (
    <div className="px-4 lg:px-6 mt-[130px] lg:mt-[210px] w-full relative">
      <div className="mx-[9%]">
        {/* Header */}
        <p className="flex gap-3 mb-[10px] text-[#30AF5B]">
          <span className="text-xl">
            <Sparkle />
          </span>
          CONNECT WITH ME
        </p>
        <span className="text-5xl font-bold">
          Let's start a project <br /> together
        </span>

        {/* Success Alert */}
        <div className="relative">
          <div
            className={`fixed top-8 right-4 z-50 transform transition-all duration-500 ease-in-out ${
              isSubmitted ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <div className="lg:mt-[40px] bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg shadow-lg">
              ✅ Message sent successfully!
            </div>
          </div>
        </div>

        {/* Form and right box wrapper */}
        <div className="mt-6 lg:flex lg:flex-row flex flex-col  gap-8 items-start max-w-full">
          {/* Form */}
          <form
            action="https://formsubmit.co/kakihari03@gmail.com"
            method="POST"
            target="dummyframe"
            onSubmit={handleSubmit}
            className="lg:w-1/2 space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div>
              <label className="block mb-1 text-lg font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className={inputClasses}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block mb-1 text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className={inputClasses}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 text-lg font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                required
                className={`${inputClasses} h-[15vh] resize-none`}
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="mt-2 bg-[#30AF5B] text-white font-semibold px-6 py-3 rounded-[15px] hover:bg-[#26914A] transition-all"
            >
              Submit
            </button>

            <iframe name="dummyframe" style={{ display: 'none' }} />
          </form>

          {/* Right white box */}
          <div
            className={`lg:w-1/2 flex flex-col justify-center p-6 space-y-4 rounded-lg shadow-md ${
              isDark ? 'bg-[#1e1e1e]' : 'bg-white'
            }`}
          >
            <span
              className={`${
                isDark ? 'bg-[#21291F]/60' : 'bg-[#F7FFF0]'
              } px-2 py-2 w-[150px] rounded-full text-xs flex items-center`}
            >
              <Dot color="#30AF5B" className="animate-ping" />
              Available for work
            </span>
            <img
              src={image}
              alt="Round profile"
              className="w-28 h-28 rounded-full object-cover"
            />
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Got an idea, feedback, or just want to chat about something? I’m all ears. Drop me a message and I’ll get back to you soon.
            </p>
            <div className="flex flex-row gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/hari-kaki-aa2a1a328/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIcon('linkedin')}
                onMouseLeave={() => setHoveredIcon(null)}
                className={iconStyle('linkedin')}
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Satya-s89"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIcon('github')}
                onMouseLeave={() => setHoveredIcon(null)}
                className={iconStyle('github')}
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:kakihari03@gmail.com"
                onMouseEnter={() => setHoveredIcon('mail')}
                onMouseLeave={() => setHoveredIcon(null)}
                className={iconStyle('mail')}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20 max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">Got Questions?</h2>
          <div className="divide-y divide-gray-300 dark:divide-gray-600">
            {faqData.map((item, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between w-full text-left font-semibold text-lg text-[#30AF5B] focus:outline-none"
                >
                  <span>
                    {String(index + 1).padStart(2, '0')}. {item.question}
                  </span>
                  <span className="text-xl">{openFaqIndex === index ? '−' : '+'}</span>
                </button>
                <div
                  className={`mt-2 text-black-700 dark:text-white-300 overflow-hidden transition-max-height duration-300 ease-in-out ${
                    openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="pt-2">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Hero2;
