"use client"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Software Engineer, Frontend",
    company: "Skilljar",
    period: "April 2022 – Present",
    location: "Seattle, WA (Remote)",
    achievements: [
      "Frontend engineer for Skilljar's admin dashboard and course platform experience",
      "Lead, plan for, and build data-driven features for learning management software",
      "Cross-team collaboration, component library development, and accessibility improvements",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Omou Learning",
    period: "Aug 2020 - Sep 2021",
    location: "San Francisco, CA (Remote)",
    achievements: [
      "Delivered data management platform increasing active students by 15%",
      "Led frontend development of tuition management feature, increasing enrollment by 24%+",
      "Created first library of reusable UI components",
      "Led code review sessions for early-career engineers",
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white" aria-labelledby="experience-title">
      <div className="container mx-auto px-6">
        <h2
          id="experience-title"
          className="text-4xl font-bold mb-12 text-center font-poppins tracking-tight text-gray-800"
        >
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-2 font-poppins text-gray-800">{exp.title}</h3>
              <p className="text-gray-600 mb-2 font-medium">{exp.company}</p>
              <p className="text-sm mb-4 text-gray-500">
                <span className="sr-only">Period:</span> {exp.period} | <span className="sr-only">Location:</span>{" "}
                {exp.location}
              </p>
              <ul
                className="list-disc list-inside space-y-2 text-gray-700"
                aria-label={`Achievements at ${exp.company}`}
              >
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

