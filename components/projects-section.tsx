"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, Eye, Brain, Shield, Heart, Sprout } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Real-Time Object Detection & Smart Cart System",
    description:
      "Advanced computer vision system for real-time object detection and smart shopping cart management with inventory tracking and automated billing.",
    longDescription:
      "This project combines cutting-edge computer vision techniques with practical retail applications. The system uses YOLO-based object detection to identify products in real-time, tracks inventory levels, and provides automated billing solutions. Features include multi-object tracking, price calculation, and integration with payment systems.",
    technologies: ["Python", "YOLO", "OpenCV", "TensorFlow", "Flask", "SQLite"],
    icon: <Eye className="w-6 h-6" />,
    gradient: "from-cyan-400 to-blue-500",
    image: "/object.jpg",
    github: "https://github.com/ambikad04/YOLOv9-SAM2-RealTime-Detection",
    demo: "https://github.com/ambikad04/YOLOv9-SAM2-RealTime-Detection",
    status: "Completed",
  },
  {
    title: "AI Storyboard Generator",
    description:
      "Intelligent system that generates visual storyboards from text descriptions using advanced NLP and computer vision techniques.",
    longDescription:
      "An innovative AI-powered tool that transforms written narratives into visual storyboards. The system uses natural language processing to understand story elements and generates corresponding visual scenes using generative AI models. Perfect for filmmakers, animators, and content creators.",
    technologies: ["Python", "GPT-4", "DALL-E", "Transformers", "React", "Node.js"],
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-purple-400 to-pink-500",
    image: "/storyboard.jpg",
    github: "#",
    demo: "#",
    status: "In Progress",
  },
  {
    title: "Federated Learning with Byzantine-Robust Aggregators",
    description:
      "Research project on secure federated learning systems with defense mechanisms against Byzantine attacks and malicious participants.",
    longDescription:
      "Advanced research in federated learning security, focusing on developing robust aggregation algorithms that can withstand Byzantine attacks. The project includes implementation of various defense mechanisms, performance analysis, and comparison of different aggregation strategies in adversarial environments.",
    technologies: ["PyTorch", "Federated Learning", "Cryptography", "NumPy", "Matplotlib"],
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-green-400 to-emerald-500",
    image: "/federated.jpg",
    github: "https://github.com/ambikad04/Secure-Robust-Federated-Learning",
    demo: "https://github.com/ambikad04/Secure-Robust-Federated-Learning",
    status: "Research",
  },
  {
    title: "Heart Disease Prediction System",
    description:
      "Machine learning model for early detection and prediction of heart disease using clinical data and advanced ML algorithms.",
    longDescription:
      "A comprehensive healthcare AI system that predicts heart disease risk using patient clinical data. The model incorporates multiple ML algorithms including Random Forest, SVM, and Neural Networks to provide accurate predictions. Features include risk assessment, visualization dashboards, and clinical decision support.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Plotly"],
    icon: <Heart className="w-6 h-6" />,
    gradient: "from-red-400 to-rose-500",
    image: "/heart.jpg",
    github: "https://github.com/ambikad04/Heart-Disease-Prediction",
    demo: "https://github.com/ambikad04/Heart-Disease-Prediction",
    status: "Completed",
  },
  {
    title: "Crop Prediction System",
    description:
      "Agricultural AI system for crop yield prediction and farming optimization using weather data, soil conditions, and historical patterns.",
    longDescription:
      "Smart agriculture solution that helps farmers optimize crop yields through AI-powered predictions. The system analyzes weather patterns, soil conditions, historical data, and market trends to provide recommendations for crop selection, planting schedules, and resource allocation.",
    technologies: ["Python", "Random Forest", "Weather APIs", "Django", "PostgreSQL"],
    icon: <Sprout className="w-6 h-6" />,
    gradient: "from-yellow-400 to-orange-500",
    image: "/crop.jpg",
    github: "https://github.com/ambikad04/Machine-Learning-Python-Crop-Prediction-project",
    demo: "https://github.com/ambikad04/Machine-Learning-Python-Crop-Prediction-project",
    status: "Completed",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative AI solutions and research projects showcasing cutting-edge technology
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 h-full overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={
                          project.status === "Completed"
                            ? "default"
                            : project.status === "In Progress"
                              ? "secondary"
                              : "outline"
                        }
                        className="bg-slate-900/80 text-white border-slate-600"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                        {project.icon}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {expandedProject === index ? project.longDescription : project.description}
                      </p>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                        className="text-cyan-400 hover:text-cyan-300 p-0 h-auto mt-2"
                      >
                        {expandedProject === index ? "Show Less" : "Read More"}
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-xs bg-slate-700/50 text-gray-300 border-slate-600 hover:border-cyan-400/50 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white`}
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
