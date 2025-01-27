"use client"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-200 py-12"
    >
      <div className="container mx-auto px-6 text-center">
      <p className="text-gray-600">Peter Kang {new Date().getFullYear()}</p>        
      <p className="mt-2 text-gray-500">
          Built with <span className="sr-only">technologies:</span> React, Next.js, Tailwind CSS, and v0 by Vercel
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer

