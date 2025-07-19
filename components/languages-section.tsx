"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Globe } from "lucide-react"

const languages = [
  {
    name: "English",
    level: "Professional",
    proficiency: 90,
    description: "Fluent in technical communication, presentations, and academic writing",
    flag: "US",
  },
  {
    name: "Hindi",
    level: "Native",
    proficiency: 100,
    description: "Native speaker with excellent verbal and written communication",
    flag: "IN",
  },
  {
    name: "Bengali",
    level: "Native",
    proficiency: 100,
    description: "Native speaker, primary language for local communication",
    flag: "IN",
  },
]

export default function LanguagesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Languages
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Multilingual communication capabilities</p>
          </motion.div>

          {/* Languages Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <motion.div key={language.name} variants={itemVariants} whileHover={{ scale: 1.05 }} className="group">
                <div className="bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 rounded-xl p-6 h-full">
                  <div className="text-center space-y-4">
                    {/* Flag and Globe Icon */}
                    <div className="relative">
                      <div className="text-6xl mb-4">{language.flag}</div>
                      <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full">
                        <Globe className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>

                    {/* Language Name and Level */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {language.name}
                      </h3>
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          language.level === "Native"
                            ? "bg-gradient-to-r from-green-400/20 to-emerald-500/20 text-green-300 border border-green-400/30"
                            : "bg-gradient-to-r from-blue-400/20 to-cyan-500/20 text-blue-300 border border-blue-400/30"
                        }`}
                      >
                        {language.level}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">{language.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
