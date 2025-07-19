"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, ExternalLink, Calendar, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const research = {
  title: "Empowering Agricultural Sustainability with Nanosensors and ML",
  publisher: "APPLE ACADEMIC PRESS",
  status: "Published",
  year: "2025",
  doi: "",
  abstract:
    "This research explores the integration of nanosensor technology with machine learning algorithms to enhance agricultural sustainability. The study presents novel approaches for real-time crop monitoring, soil analysis, and precision farming using IoT-enabled nanosensors combined with advanced ML models for predictive analytics and decision support systems.",
  keywords: [
    "Nanosensors",
    "Machine Learning",
    "Agricultural Sustainability",
    "IoT",
    "Precision Farming",
    "Predictive Analytics",
  ],
  authors: ["Ambika Das", "Dr. Kaushik Adhikary"]
}

export default function ResearchSection() {
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
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
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
                Research Publication
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contributing to the advancement of AI and sustainable technology
            </p>
          </motion.div>

          {/* Research Paper Card */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
              {/* Header with Book Cover Style */}
              <div className="relative bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10" />
                <div className="relative flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Book Cover */}
                  <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} className="relative">
                    <div className="w-48 h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-2xl border border-cyan-400/30 flex flex-col justify-between p-6">
                      <div>
                        <BookOpen className="w-8 h-8 text-cyan-400 mb-4" />
                        <h3 className="text-sm font-bold text-white leading-tight mb-2">{research.title}</h3>
                      </div>
                      <div>
                        <div className="text-xs text-cyan-400 font-semibold mb-1">{research.publisher}</div>
                        <div className="text-xs text-gray-400">{research.year}</div>
                      </div>
                    </div>
                    <motion.div
                      className="absolute -top-2 -right-2"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold">
                        Published
                      </Badge>
                    </motion.div>
                  </motion.div>

                  {/* Paper Details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{research.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                          {research.year}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-purple-400" />
                          {research.authors.length} Authors
                        </div>
                      </div>
                    </div>

                    <div className="text-cyan-400 font-semibold text-lg">{research.publisher}</div>

                    <div className="flex flex-wrap gap-2">
                      {research.keywords.map((keyword, index) => (
                        <motion.div
                          key={keyword}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Badge variant="outline" className="text-xs bg-slate-700/50 text-gray-300 border-slate-600">
                            {keyword}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 space-y-6">
                {/* Abstract */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Abstract</h4>
                  <p className="text-gray-300 leading-relaxed text-lg">{research.abstract}</p>
                </div>

                {/* Authors */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Authors</h4>
                  <div className="flex flex-wrap gap-2">
                    {research.authors.map((author, index) => (
                      <Badge
                        key={author}
                        variant="secondary"
                        className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-gray-300 border-slate-600"
                      >
                        {author}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                    asChild
                  >
                    <a href={`https://www.appleacademicpress.com/nanotechnology-and-beyond-the-synergy-of-materials-and-artificial-intelligence-/9781779643025`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Publication
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>

                {/* DOI */}
                <div className="text-center pt-4 border-t border-slate-700">
                  <div className="text-sm text-gray-400">
                    DOI: <span className="text-cyan-400 font-mono">{research.doi}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
