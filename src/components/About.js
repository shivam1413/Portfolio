import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Tech icons
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { LiaIndustrySolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);




function About({ experienceRef , aboutRef}) {

  let text2 = useRef([]);
  let text3 = useRef([]);
  let TechRef = useRef([]);
  // let TechRefIcon = TechRef.current.children;
  
  useGSAP(() => {
    let tl = gsap.timeline({
      ScrollTrigger: {
        trigger: ".page2", // Add a trigger element
        start: "top 50%", // Start animation when the top of the trigger is 80% from the top of the viewport
        end: "bottom 50%", // End animation when the bottom of the trigger is 30% from the top of the viewport
        scrub: true, // Smoothly animate as you scroll
        markers: true,
      }
    });

    tl.from(text2.current, {
      y: -50,
      opacity: 0,
      duration: 1,
    })
    .from(text3.current, {
      y: -50,
      opacity: 0,
      duration: 1,
    })
    .fromTo(
      TechRef.current.children,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.5,
      }
    );
  
  }, []);


  return (
    <>
    <div className=' w-full'>
        <p  className=' text-2xl font-semibold mt-9 text-center mb-[-40px]' ref={aboutRef} style={{ paddingTop: '85px' }}>About Me...</p>
        <div className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 flex flex-row-reverse'>
        <div className='flex flex-col'>
         <div className=' page2 space-y-2'>
            <p ref={text2} className='text-1xl md:text-md text-justify '>
  I'm <b>Shivam Kumar,</b> a <b>Full Stack Developer</b>. I have completed my Bachelor's in Computer Applications (BCA) from Delhi Skill and Entrepreneurship University and I'm currently pursuing my Master's in Computer Applications (MCA) at IGNOU. I specialize in building sleek, high-performance web applications that emphasize user experience and technical precision.
</p>
<p>
  With expertise in the MERN stack (MongoDB, Express, React, Node.js), I'm passionate about creating sophisticated digital solutions that are visually engaging and function seamlessly. I enjoy tackling complex challenges, from crafting responsive front-end designs to developing robust back-end systems.
</p>
<p>
  Always eager to learn and innovate, I keep up with the latest trends in web development to ensure I'm delivering cutting-edge solutions. Let's collaborate and bring your next project to life!
</p>

            <br />
            {/* Social media icons */}
            <div className='space-y-2 flex flex-col items-center justify-center'>
                <h1 ref={text3} className='text-1xl font-medium '>Currently Working on...</h1>
                <div className='flex space-x-3 text-2xl'>
                  <ul ref={TechRef} className='flex space-x-3 text-2xl'>
                    <li>
                      {" "}
                      <FaReact className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                    <li>
                      {" "}
                      <IoLogoJavascript className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                    {/* <li>
                      {" "}
                      <BsFiletypeSql className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li> */}
                    <li>
                      {" "}
                      <FaHtml5 className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                    <li>
                      {" "}
                      <FaCss3Alt className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                    {/* <li>
                      {" "}
                      <RiTailwindCssFill className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li> */}
                    <li>
                      {" "}
                      <FaBootstrap className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                    <li>
                      {" "}
                      <FaGitAlt className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                  </ul>
                </div>
                </div>
                {/* <Static/> */}
                </div>
                <br></br>
                <br></br>
                <br></br>
            <hr className='w-full'/>
            <br/>
            <br/>
            <br/>
            <p className='text-2xl font-semibold mt-12 mb-4 text-center'>Education</p>
            <br/>
            <div className=' border-b-2 mt-9'>
                <div className='flex justify-between'>
                <h1 className='text-md md:text-xl text-[#666666]'>Indira Gandhi National Open University</h1>
                <span className='text-[0.7rem]  md:text-sm   rounded-full bg-[#D7FFE0] text-[#018C0F] text-center p-1'>Full Time</span>
                </div>
                <div className=' text-xs md:text-sm'>Master's in Computer Applications (MCA) </div>
                <div className='flex justify-between mt-5'>
                    <div className='flex  flex-wrap gap-2 md:gap-5 items-center'>
                    <p className=' text-xs md:text-sm flex justify-center items-center' ><LiaIndustrySolid />
                    Indira Gandhi National Open University</p>
                    <p className='text-xs md:text-sm flex justify-center items-center'><CiLocationOn /> Maidan Garhi, New Delhi</p>
                    </div>
                    <div>
                    <p className='text-xs md:text-sm flex justify-center items-center' ><MdDateRange />2025 - 2027</p>
                    </div>
                </div>
            </div>
            <div className=' border-b-2 mt-9'>
                <div className='flex justify-between'>
                <h1 className='text-md md:text-xl text-[#666666]'>Delhi Skill and Entrepreneurship University</h1>
                <span className='text-[0.7rem]  md:text-sm   rounded-full bg-[#D7FFE0] text-[#018C0F] text-center p-1'>Full Time</span>
                </div>
                <div className=' text-xs md:text-sm'>BCA (Bachelor of Computer Applications) </div>
                <div className='flex justify-between mt-5'>
                    <div className='flex  flex-wrap gap-2 md:gap-5 items-center'>
                    <p className=' text-xs md:text-sm flex justify-center items-center' ><LiaIndustrySolid />
                    Delhi Skill and Entrepreneurship University</p>
                    <p className='text-xs md:text-sm flex justify-center items-center'><CiLocationOn /> New Delhi, Dwarka</p>
                    </div>
                    <div>
                    <p className='text-xs md:text-sm flex justify-center items-center' ><MdDateRange />2022 - 2025</p>
                    </div>
                </div>
            </div>
         </div>
      </div>
      
    </div>
    <br/>
    <hr/>
    </>
      
    
  )
}

export default About