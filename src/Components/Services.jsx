import React from 'react'

const Services = () => {

  const data = [
    {
      id: 1,
      title: "UI/UX Design",
      desc: "Crafting intuitive and visually engaging user experiences with a focus on usability and clarity."
    },
    {
      id: 2,
      title: "Frontend Development",
      desc: "Creating responsive, interactive interfaces using modern web technologies."
    },
    {
      id: 3,
      title: "Full-Stack Development",
      desc: "Building end-to-end web applications with scalable architecture and efficient performance."
    },
    {
      id: 4,
      title: "API & Backend Services",
      desc: "Designing secure APIs and managing server-side logic for seamless data flow and integration."
    }
  ]

  return (
    <section id='services' className='py-20 px-6 md:px-16 h-screen'>

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className='text-4xl md:text-6xl font-bold text-gray-200'>
          Services
        </h2>
        <p className='pt-4 text-lg text-gray-400'>
          Designing scalable and modern web solutions with performance in mind.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-28">
        {data.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl border border-gray-700 bg-gradient-to-b from-zinc-900 to-zinc-800 p-6 
                       hover:scale-105 hover:border-gray-500 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col h-full justify-between">
              
              <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-6 text-sm text-gray-500 group-hover:text-gray-300 transition">
                Learn more →
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Services