import React from 'react'
import user from '../assets/user.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <div id='home'>
            <section className="relative flex items-center justify-center flex-col h-screen">

                <div className="info absolute top-10 right-0">
                    <p className='text-xl  text-gray-500  font-thin tracking-wide leading-8'> I am <br />
                        <span className='text-gray-300 text-4xl font-bold'>Full-Stack Developer</span><br />
                        crafting scalable, high-performance web applications.
                    </p>
                </div>
                {/* Text (background) */}
                <h1 className='absolute text-9xl font-semibold text-zinc-300 mb-10 opacity-40 z-0 text-center'>
                    Vijaysingh Maurya
                </h1>

                {/* Image (foreground) */}
                <div className="absolute z-10 flex items-center justify-between flex-col">
                    <img
                        src={user}
                        alt="personal image here"
                        className='w-full h-full object-cover opacity-20'
                    />
                </div>

                <div className="contact-links absolute left-0 bottom-35 flex  items-center gap-10">
                    <button className='border text-gray-300 rounded-md  px-4 py-2 hover:bg-zinc-300 hover:text-zinc-800 cursor-pointer '>
                       <a href="/Vijaysingh_Maurya_Resume.pdf"> Download CV</a>
                    </button>
                    <a href="https://www.linkedin.com/in/iamvijay23/">
                        <FaLinkedin className='hover:text-gray-300 text-4xl' /></a>
                    <a href="https://github.com/lezyCoder"><FaGithub className='hover:text-gray-300 text-4xl' /></a>

                </div>

            </section>
        </div>
    )
}

export default Hero