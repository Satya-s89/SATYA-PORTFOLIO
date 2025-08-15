import NavBar from './components/NavBar';
import Hero1 from './components/Home/Hero1';
import Banner from './components/Home/Banner';
import AboutMe from './components/Home/AboutMe';
import Footer from './components/Footer';
import Speciality from './components/Home/Speciality';
import LogoBanner from './components/LogoBanner.jsx'
import Box from './components/Box.jsx'

const Home = ({ isDark, setIsDark }) => {
 
  return (
    <div>
      <NavBar isDark={isDark} setIsDark={setIsDark} /> 
      <Hero1 isDark={isDark}/>
      <div className='lg:mt-[60px]'>
      <Banner isDark={isDark}/>
       </div>
       <AboutMe></AboutMe>
      <div>
        <Speciality  isDark={isDark}/>
        
      </div>
      <LogoBanner isDark={isDark}></LogoBanner>
      <Box isDark={isDark}></Box>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
