"use client"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4 font-poppins tracking-tight text-gray-800">
          Peter Kang, Frontend Engineer
        </h1>
        <p className="text-xl mb-8 font-light text-gray-600">
          Crafting delightful user experiences and accessible interfaces
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto: peeterkang@gmail.com"
            aria-label="Send an email"
            className="text-gray-600 hover:text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100 rounded-full p-2"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/pswk1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-600 hover:text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100 rounded-full p-2"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/peterswkang/" // Add your LinkedIn profile URL here
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-600 hover:text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100 rounded-full p-2"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

