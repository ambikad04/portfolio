"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Brain, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const techStack = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "SQL",
  "Git",
]

const interests = [
  "Federated Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Deep Learning",
  "Machine Learning Security",
  "AI Ethics",
]

const softSkills = [
  "Problem Solving",
  "Team Leadership",
  "Research",
  "Communication",
  "Project Management",
  "Critical Thinking",
]

export default function AboutSection() {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate AI Engineer with expertise in machine learning, deep learning, and secure federated systems
            </p>
          </motion.div>

          {/* Profile and Introduction */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <div className="space-y-6">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mx-auto lg:mx-0 flex items-center justify-center"
                >
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-xl border-4 border-cyan-400 bg-slate-900 flex items-center justify-center overflow-hidden mx-auto lg:mx-0 lg:-ml-20">
                    <img
                      src="/about.png"
                      alt="Ambika Das"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </motion.div>
                <div className="absolute -top-8 left-[70%] -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-6 mt-8 lg:mt-0 lg:-ml-28">
              <motion.div variants={itemVariants} className="prose prose-lg text-gray-300 max-w-full">
                <p className="text-lg leading-relaxed">
                  Hello World! I’m Ambika Das, an AI Engineer from Kolkata, India. I recently completed my Bachelor’s degree in Computer Science with a strong interest in Artificial Intelligence, Machine Learning, and Deep Learning.
                </p>
                <p className="text-lg leading-relaxed">
                  I have worked on real-world AI projects like smart product scanners, AI storyboard generators, and secure Federated Learning systems. I’ve also done internships at IIT Patna and WildChild Studios, where I worked independently and as part of a team to build smart AI tools.
                </p>
                <p className="text-lg leading-relaxed">
                  Along with my technical skills, I enjoy solving problems, doing research, and creating innovative solutions that make a difference. I’m always excited to learn and grow in this fast-moving field.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center space-x-4">
                <Award className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Top 10 Academic Ranking</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Cards */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-purple-400/20 text-purple-300 rounded-full text-sm font-medium"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-pink-400/30 hover:border-pink-400/60 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-pink-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-pink-400/20 text-pink-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
