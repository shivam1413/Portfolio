import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ReactTyped } from 'react-typed';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Home({ homeRef }) {
  let text1 = useRef([]);
  let text2 = useRef([]);
  let text3 = useRef([]);
  let text4 = useRef([]);
  let imageRef = useRef([]);
  let SocialRef = useRef([]);
  let circle = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(text1.current, { y: 50, opacity: 0, duration: 1 })
      .from(text2.current, { y: 50, opacity: 0, duration: 1 })
      .from(text3.current, { y: 50, opacity: 0, duration: 1 })
      .from(imageRef.current, { x: 50, opacity: 0, duration: 1 })
      .from(text4.current, { y: 50, opacity: 0, duration: 1 });

    const socialIcon = SocialRef.current.children;

    tl.fromTo(
      socialIcon,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.5,
      }
    );
  }, []);

  useEffect(() => {
    gsap.to(circle.current, {
      x: 0,
      y: 0,
      rotate: 360,
      repeat: -1,
      duration: 7,
      ease: 'linear',
      transformOrigin: 'center center',
    });
  }, []);

  return (
    <>
      <div
        ref={homeRef}
        style={{ paddingTop: '50px', position: 'relative' }}
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 flex flex-row-reverse"
      >
        <div className="z-13">
          <img
            ref={circle}
            src="./reactLogo.svg"
            alt="Logo react"
            style={{ opacity: 0.2 }}
            className="absolute top-[5%] left-[-14%] md:w-[370px] md:h-[auto] mt:25 w-[250px] h-[auto]"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 mt-10 md:mt-0 space-y-2">
            <div ref={text1} className="text-xl font-medium">
              Welcome In My Feed
            </div>
            <div ref={text2} className="flex space-x-1 text-2xl md:text-4xl flex-wrap">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-pink-500 font-semibold bg-transparent"
                strings={[
                  'Web Developer',
                  'Front-End Developer',
                  'Full Stack Developer',
                ]}
                typeSpeed={50}
                backSpeed={50}
                loop={true}
              >
                <input type="text" className="bg-transparent" />
              </ReactTyped>
            </div>
            <br />
            <p ref={text3} className="text-1xl md:text-md text-justify">
             Hello, I'm Shivam Kumar, a Full Stack Developer. I have completed my Bachelor's in Computer Applications (BCA) from Delhi Skill and Entrepreneurship University and I am currently pursuing my Master's in Computer Applications (MCA) at IGNOU. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and focus on building high-quality, visually compelling, and user-friendly web applications. I'm passionate about using technology to create impactful solutions and continuously seek opportunities to learn and grow.
            </p>
            <br />
            {/* Social media icons */}
            <div className="space-y-2">
              <h1 ref={text4} className="text-1xl font-medium">
                Available on
              </h1>
              <div className="flex space-x-3 text-2xl">
                <ul ref={SocialRef} className="flex space-x-3 text-2xl">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/shivam-kumar-6a7123286/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/shivam1413"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/shivam_choudhary__14/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Shivam1429"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaXTwitter className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div ref={imageRef} className="md:w-1/2 md:pl-48 mt-12 md:mt-8">
            <img
              src="./shivam.png"
              alt="Shivam Kumar"
              className="rounded-full md:w-[370px] md:h-[auto] mt:25 w-[250px] h-[auto]"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
