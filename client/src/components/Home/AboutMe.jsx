import React from 'react'
import { Sparkle } from 'lucide-react'
const AboutMe = () => {
  return (
      <div className='flex justify-center items-center' >
        
        <div className='text-center p-[100px]'>
            <div className=' flex justify-center items-center gap-3 text-[#30AF5B]'>
                <Sparkle/>
                <p className='font-bold' > ABOUT ME</p>
            </div>
            
            <h1 className='text-3xl font-bold font-[ClashDisplay] leading-relaxed tracking-wide items-center m-[20px]'>
            I'm Hari — a full-stack problem-solver behind BookAura, Tradebro, and Voice2Note. With hands-on mastery in React, Node.js, Unity, and AI integration, I turn abstract concepts into intuitive, user-focused platforms. Whether it's AI-powered study tools, trading simulations, or voice-to-text apps, I build systems that learn, adapt, and deliver real-world value. From camera logic in Unity to cosine similarity in RAG pipelines, I don’t just code — I architect experiences that think, speak, and evolve.
        </h1>
        </div>
      </div>
  )
}

export default AboutMe
