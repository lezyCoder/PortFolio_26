import React from 'react'
import shopImg from '../assets/E_Shop.png'
import planoraImg from '../assets/planora.png'
import aiImg from '../assets/AI_Interviewe.png'
import movieImg from '../assets/movie.png'
const Projects = () => {

  const projectData = [
    {
      id: 1,
      name: "E-Shop",
      category: "E-commerce Website",
      desc: "A modern UI design concept for an online shopping platform.",
      live_link: "https://e-shop-hv9ueyush-lezycoders-projects.vercel.app/",
      image: shopImg
    },
    {
      id: 2,
      name: "Planora",
      category: "Event Management",
      desc: "Event management and booking platform built using modern frontend tools.",
      live_link: "",
      image: planoraImg
    },
    {
      id: 3,
      name: "AI Interviewer",
      category: "Study & Job Preparation",
      desc: "A text-based AI interviewer platform to help users practice and learn concepts.",
      live_link: "https://aiinterviewer-amber.vercel.app/",
      image: aiImg
    },
    {
      id: 4,
      name: "Dekho Movie",
      category: "Entertainment",
      desc: "A platform to search movie details using modern APIs and tools.",
      live_link: "https://movie-finder-7a4x.vercel.app/",
      image: movieImg
    }
  ]

  return (
    <section id='projects' className="py-20 px-6 md:px-16">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-200">
          My Projects
        </h2>
        <p className="pt-4 text-lg text-gray-400">
          A showcase of clean, modern, and responsive applications
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 mt-16">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl overflow-hidden border border-gray-700 bg-zinc-900 hover:scale-[1.02] transition-all duration-300"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-sm text-gray-400">{project.category}</p>

              <h3 className="text-2xl font-semibold text-gray-200 mt-1">
                {project.name}
              </h3>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Button */}
              {project.live_link && (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-sm text-white border border-gray-500 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                >
                  Live Preview →
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects