import React from 'react'
import user from '../assets/user.png';

const Hero = () => {
    return (
        <div id='home'>
            <section className="relative flex items-center justify-center h-screen">

                {/* Text (background) */}
                <h1 className='absolute text-9xl font-semibold text-gray-300 z-0 text-center'>
                    Vijaysingh Maurya
                </h1>

                {/* Image (foreground) */}
                <div className="absolute z-10">
                    <img 
                        src={user} 
                        alt="personal image here"
                        className='w-full h-full object-cover opacity-20'
                    />
                </div>

            </section>
        </div>
    )
}

export default Hero