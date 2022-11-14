import React from 'react'
import about1 from './about1.json'
import about2 from './about2.json'
import Lottie from 'lottie-react'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-6 '>
     <div className='flex gap-4'>
      <div><h1 className='font-mono text-5xl font-bold mt-8 '>About US</h1>
       <p className='text-lg break-words w-[56rem] mt-12'> Event management is a vast category and used worldwide for managing your special events in your life. event refers to the important, unique or lifetime movements which you want to enjoy without worrying about any work related to it.
Event management has burst on the academic and applied fields in the last 30 years as an independent entity, although the event product has existed for 
approximately as long as mankind has existed. Certainly, from recorded time, events have taken a major role in history as part of celebration, religion, community, and even revolution events that have been focal points of importance to residents, regions, and nations. Therefore, the direction of the present paper is to review what is happening in event management today and suggest the future direction that event management will likely take over the next 30 years.
</p>
      </div>
      <div className=''><Lottie animationData={about1}></Lottie></div>
    </div>
    <div className='flex gap-4 '>
      <div className='w-[32em]'><Lottie animationData={about2}> </Lottie></div>
      <div className='text-lg break-words w-[57rem] mt-24'>Our preliminary investigation started with googling total event management 
companies and what software structure they use to manage their work. 
we found that in total 17 % companies using Software management techniques.
In this searching we also found that 87% of the total companies using hard 
paper work for managing their customer’s. 
Our preliminary investigation started with googling total event management 
companies and what software structure they use to manage their work. 
we found that in total 17 % companies using Software management techniques.
In this searching we also found that 87% of the total companies using hard 
paper work for managing their customer’s. 

</div>
      </div>
    </div>
  )
}

export default About
