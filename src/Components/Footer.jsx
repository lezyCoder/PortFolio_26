import React from 'react'

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-gray-800 px-6 md:px-16 py-10">

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left */}
                <h2 className="text-xl font-semibold text-gray-300">
                    VijaySingh Maurya
                </h2>

                {/* Center - Links */}
                <ul className="flex gap-6 text-gray-400 text-sm">
                    <li><a href="#home" className="hover:text-white transition">Home</a></li>
                    <li><a href="#about" className="hover:text-white transition">About</a></li>
                    <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                </ul>

                {/* Right - Socials */}
                <div className="flex gap-4 text-gray-400 text-sm">
                    <a href="https://github.com/lezyCoder" className="hover:text-white transition">GitHub</a>
                    <a href="https://www.linkedin.com/in/iamvijay23/" className="hover:text-white transition">LinkedIn</a>
                    {/* <a href="#" className="hover:text-white transition">Twitter</a> */}
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center text-gray-500 text-sm mt-8">
                © {new Date().getFullYear()} Vijaysingh Maurya. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer