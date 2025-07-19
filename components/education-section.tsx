"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const education = {
  degree: "Bachelor's Degree, Computer Science",
  institution: "Techno India Group, Salt Lake, Kolkata",
  location: "Kolkata, West Bengal, India",
  cgpa: "8.41",
  rank: "Top 10",
  description:
    "Specialized in Computer Science with focus on Artificial Intelligence, Machine Learning, and Software Development. Consistently maintained academic excellence with top 10 ranking throughout the program.",
}

const achievements = [
  {
    title: "Field Secretary",
    organization: "Techno Endeavours",
    description:
      "Founded and led the technical society, organizing workshops, and technical events for 500+ students",
    icon: "🏆",
  },
  {
    title: "Academic Excellence",
    organization: "Techno India Group",
    description: "Maintained top 10 ranking throughout the program with CGPA of 8.41",
    icon: "📚",
  },
]

const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2024",
    skills: ["Data Analysis", "SQL", "Tableau", "R Programming"],
    credentialLink: "https://www.coursera.org/account/accomplishments/professional-cert/JPA69A2BFE46",
  },
  {
    title: "Cisco Data Science Essentials",
    issuer: "Cisco",
    date: "2024",
    skills: ["Python", "Machine Learning", "Statistics", "Data Visualization"],
    credentialLink: "https://www.credly.com/badges/90e6d418-8f8b-428c-a9a8-48648c394df2",
  },
]

export default function EducationSection() {
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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
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
                Education
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Academic journey and professional certifications</p>
          </motion.div>

          {/* Main Education Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="p-4 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl">
                      <GraduationCap className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
                      <div className="text-cyan-400 font-semibold text-lg mb-2">{education.institution}</div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-gray-400">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {education.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 text-lg font-semibold">
                      CGPA: {education.cgpa}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 text-lg font-semibold">
                      {education.rank} Rank
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">{education.description}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02 }} className="group">
                  <Card className="bg-slate-800/50 border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{achievement.icon}</div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {achievement.title}
                          </h4>
                          <div className="text-purple-400 font-medium mb-3">{achievement.organization}</div>
                          <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02 }} className="group">
                  <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg">
                          <Award className="w-6 h-6 text-cyan-400" />
                        </div>
                        <Badge variant="outline" className="text-gray-400 border-gray-600">
                          {cert.date}
                        </Badge>
                      </div>

                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h4>

                      <div className="text-cyan-400 font-medium mb-4">{cert.issuer}</div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Skills Covered:</div>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs bg-slate-700/50 text-gray-300 border-slate-600"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="text-xs text-gray-500">
                        Credential Link: <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline break-all">{cert.credentialLink}</a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
