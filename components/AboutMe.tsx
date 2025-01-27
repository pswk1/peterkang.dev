"use client"
import { motion } from "framer-motion"

const AboutMe = () => {
  return (
    <section id="about" className="py-24 bg-white" aria-labelledby="about-title">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-100 rounded-lg p-8 shadow-md"
        >
          <h2
            id="about-title"
            className="text-4xl font-bold mb-6 text-center font-poppins tracking-tight text-gray-800"
          >
            About Me
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-xl font-semibold">Hi, I'm Peter!</p>
            <p>Currently a frontend software engineer at Skilljar 🍳</p>
            <p>
              I have 3+ years experience developing delightful user experiences, building UI component libraries,
              enhancing accessibility, and much more. While I consider myself framework-agnostic, I'm familiar with
              React, Vue, HTML, CSS/SCSS, and Javascript/Typescript. I'm always excited to add to my toolkit.
            </p>
            <p>
              When I'm not coding, I love to explore new coffee shops ☕, get my run on 🏃, lift weights 🏋️, or play cozy
              video games 🎮.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe

