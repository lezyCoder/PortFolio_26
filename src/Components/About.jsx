import React from 'react'

const About = () => {
    return (
        <section id='about' className='py-20 px-6 md:px-16'>

            <div className="text-center max-w-3xl mx-auto">
                <h2 className='text-4xl md:text-6xl font-bold text-gray-200'>
                    About Me
                </h2>

                <p className='pt-6 text-lg text-gray-400 tracking-wide leading-relaxed'>
                    I’m a Full Stack Developer passionate about building modern, responsive web applications 
                    with clean design and efficient performance.
                </p>

                <p className='pt-4 text-lg text-gray-400 tracking-wide leading-relaxed'>
                    As a fresher, I focus on strengthening my skills by working on real-world projects 
                    and continuously learning new technologies.
                </p>

                <p className='pt-4 text-lg text-gray-400 tracking-wide leading-relaxed'>
                    My goal is to create scalable, user-friendly applications that solve real problems 
                    and deliver meaningful experiences.
                </p>
            </div>

        </section>
    )
}

export default About