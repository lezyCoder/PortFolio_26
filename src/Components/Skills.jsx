import React from 'react'

const Skills = () => {

    const data = [
        {
            id: 1,
            title: "Core Skills",
            skills: ["UI/UX", "Responsive Design", "Component-based Design"]
        },
        {
            id: 2,
            title: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"]
        },
        {
            id: 3,
            title: "Backend & Database",
            skills: ["Node.js", "Express", "Java", "MySQL", "MongoDB"]
        },
        {
            id: 4,
            title: "Tools & Technology",
            skills: ["VS Code", "Git", "GitHub", "Linux", "Vercel", "GSAP"]
        }
    ]

    return (
        <section id="skills" className="py-20 px-6 md:px-16">

            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-200">
                    Skills
                </h2>
                <p className="pt-4 text-lg text-gray-400">
                    Technologies and tools I work with
                </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="group rounded-2xl border border-gray-700 bg-gradient-to-b from-zinc-900 to-zinc-800 p-6 
                                   hover:scale-105 hover:border-gray-500 transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-200 mb-4 group-hover:text-white">
                            {item.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="text-sm px-3 py-1 rounded-full bg-zinc-800 text-gray-300 border border-gray-600 
                                               group-hover:border-gray-400 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Skills