import React from 'react'
import { Sparkle } from 'lucide-react'
const Awards = () => {
    const Awards = [
        {
            id:1,
            heading:"Finalist – Kalvium Hackathon By Promtrepo",
            main:"AI Tools for Education",
        },
        {
            id:2,
            heading:"Built & Deployed 6+ Full-stack Projects",
            main:"With real users, live demos, and automated CI/CD pipelines."
        },
        {
            id:3,
            heading:"Led Open-Source Contributions",
            main:"20+ pull requests, merged features, and CI improvements."
        },
        {
            id:4,
            heading:"Created AI-Powered Learning Tools",
            main:"Integrated OpenAI & Gemini APIs into educational platforms."
        }
    ]
  return (
    <div className='w-[90vw]'>
      <div className='mt-16 lg:mt-[110px] lg:mr-[167px] flex mb-16 flex-col lg:flex-row'>
        <div className='flex flex-col align justify-center items-start px-6 lg:px-0 lg:ml-[160px]'>
            <span className='flex items-center gap-2 text-[#30AF5B] font-[ClashDisplay] text-sm font-bold uppercase'>
            <Sparkle/>Awards
            </span>
            <span className='text-5xl font-bold px-3 py-3'>Achievements <br/>& Highlights</span>
        </div>
        <div className='mt-[20px]'>
            {
                Awards.map((item) => (
                    <div key={item.id} className='ml-[30px]  text-sm sm:text-base lg:text-m  lg:ml-[150px]  justify-between flex flex-row items-start mt-[20px] border-b border-[#e2e8f0] w-[400px] lg:w-[700px]'>
                        <span className='text-[satoshi] '>{item.heading}</span>
                        <span className='text-[#71717A]  flex justify-between'>2025</span>

                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Awards
