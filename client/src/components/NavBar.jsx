import { useEffect, useState } from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import './NavBar.css'
import  {Sun,Moon} from 'lucide-react'
const NavBar = ({isDark,setIsDark}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [scrolled ,setScrolled] = useState(false);
  const [scroll, setScroll] = useState(0);
  const handleClick = ( )=>{
    setIsDark(!isDark)
  }
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  const getNavBarWidth = () => {
    const minWidth = 40; 
    const maxWidth = 80; 
    const scrollLimit = 600;

    const scrolled = Math.min(scroll, scrollLimit);
    const shrinkFactor = (scrolled / scrollLimit) * (maxWidth - minWidth);
    const width = maxWidth - shrinkFactor;

    return `${width}%`;
  };
  
  return (
    <div className='fixed top-0 right-0 left-0 m-auto z-[9999] mt-[10px] items-center rounded-full shadow-gray-50 backdrop-blur-md border border-white/20'
    style={{ width: getNavBarWidth() }}
    >
    <div className=' m-[5px]  max-w-[100vw]' >
          <ul className=' max-w-[80vw] flex items-center justify-between  rounded-full m-[auto] px-4 py-2 #F7F8FC'> 
            
            <span className='font-ClashDisplay'>KH</span>
            <div className='flex flex-row justify-center align-center space-x-6'>
            <li className={currentPath=='/' ? 'active' :''} onClick={()=>navigate('/')}>Home</li>
            <li className={currentPath=='/about' ? 'active' :''} onClick={()=>navigate('/about')}>About</li>
            <li className={currentPath=='/projects' ? 'active' : ''} onClick={()=>navigate('/projects')}>Projects</li>
            <li className={currentPath=='/contact' ? 'active' :''} onClick={()=>navigate('/contact')}>Contact</li>

            </div>
            <span className='toogle' data-dark={isDark}  onClick={handleClick}>{isDark ? <Moon/>:<Sun/>}</span>
          </ul>
        </div>
      </div>
    )
}

export default NavBar