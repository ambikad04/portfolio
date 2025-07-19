"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "WildChild Studios",
    role: "AI/ML Engineer",
    period: "Jan 2025 – June 2025",
    location: " Ahmedabad, Gujarat, India ",
    description: "Developing cutting-edge AI solutions for real-world applications",
    projects: [
      "Smart Cart System - Real-time object detection and inventory management",
      "AI Storyboard Generator - Automated visual storytelling using deep learning",
    ],
    technologies: ["Python", "TensorFlow", "Computer Vision", "Deep Learning", "REST APIs"],
    logo: "🤖",
  },
  {
    company: "IIT Patna",
    role: "Deep Learning Research Intern",
    period: "Jan 2025 – Ongoing",
    location: "Patna, Bihar, India",
    description: "Research focused on security aspects of federated learning systems",
    projects: [
      "Attacks in Federated Learning - Analyzing vulnerabilities in distributed ML",
      "GAN-based Defenses - Developing robust defense mechanisms using generative models",
    ],
    technologies: ["PyTorch", "Federated Learning", "GANs", "Security Research", "Python"],
    logo: "🖱️",
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
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
                Work Experience
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional journey in AI/ML engineering and research
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full hidden md:block" />

                  <Card className="md:ml-16 bg-slate-800/50 border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                          <div className="text-4xl">{exp.logo}</div>
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                              {exp.role}
                            </h3>
                            <div className="flex items-center text-cyan-400 font-semibold text-lg mb-2">
                              <Building className="w-4 h-4 mr-2" />
                              {exp.company}
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-gray-400">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {exp.period}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">{exp.description}</p>

                      {/* Projects */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Projects:</h4>
                        <ul className="space-y-2">
                          {exp.projects.map((project, projectIndex) => (
                            <motion.li
                              key={projectIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: index * 0.2 + projectIndex * 0.1 }}
                              className="flex items-start text-gray-300"
                            >
                              <ExternalLink className="w-4 h-4 mr-3 mt-1 text-cyan-400 flex-shrink-0" />
                              {project}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                              transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-300 border-cyan-400/30 hover:border-cyan-400/60 transition-colors"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
