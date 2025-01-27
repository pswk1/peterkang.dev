"use client"
import { motion } from "framer-motion"

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript"] },
  { category: "Technologies", items: ["HTML", "CSS", "React", "Vue", "SCSS"] },
  { category: "Other", items: ["Git", "Jest", "Storybook", "Material-UI", "Bootstrap", "Chakra-UI"] },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-100" aria-labelledby="skills-title">
      <div className="container mx-auto px-6">
        <h2
          id="skills-title"
          className="text-4xl font-bold mb-12 text-center font-poppins tracking-tight text-gray-800"
        >
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4 font-poppins text-gray-700">{skillGroup.category}</h3>
              <ul className="space-y-2" aria-label={skillGroup.category}>
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

