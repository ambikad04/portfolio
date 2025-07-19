"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code, Brain, Globe, Wrench, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const skillCategories = [
  {
    id: "programming",
    name: "Programming",
    icon: <Code className="w-5 h-5" />,
    color: "from-blue-400 to-cyan-500",
    skills: [
      { name: "Python", level: 95, icon: "🐍", description: "Advanced proficiency in AI/ML development" },
      { name: "Java", level: 85, icon: "☕", description: "Object-oriented programming and enterprise applications" },
      { name: "C", level: 80, icon: " </> ", description: "System programming and performance optimization" },
      { name: "UNIX & Shell", level: 75, icon: "🖥️", description: "Command-line scripting and system administration" },
      { name: "SQL", level: 88, icon: "🗃️", description: "Database design and complex query optimization" },
    ],
  },
  {
    id: "ml-ai",
    name: "ML & AI",
    icon: <Brain className="w-5 h-5" />,
    color: "from-purple-400 to-pink-500",
    skills: [
      { name: "PyTorch", level: 92, icon: "🔥", description: "Deep learning model development and training" },
      { name: "TensorFlow", level: 88, icon: "🧠", description: "Neural networks and production ML systems" },
      { name: "Scikit-learn", level: 90, icon: "🔬", description: "Classical ML algorithms and data preprocessing" },
      { name: "Hugging Face", level: 85, icon: "🤗", description: "Transformer models and NLP applications" },
      { name: "OpenCV", level: 87, icon: "👁️", description: "Computer vision and image processing" },
      { name: "FAISS", level: 80, icon: "🔍", description: "Vector similarity search and indexing" },
      { name: "YOLOv9", level: 85, icon: "🎯", description: "Real-time object detection systems" },
      { name: "SAM2", level: 78, icon: "✂️", description: "Segment Anything Model for image segmentation" },
      { name: "DINOv2", level: 82, icon: "🦕", description: "Self-supervised vision transformers" },
    ],
  },
  {
    id: "web-dev",
    name: "Web Development",
    icon: <Globe className="w-5 h-5" />,
    color: "from-green-400 to-emerald-500",
    skills: [
      { name: "HTML5", level: 90, icon: "🌐", description: "Semantic markup and modern web standards" },
      { name: "CSS3", level: 88, icon: "🎨", description: "Responsive design and advanced styling" },
      { name: "JavaScript", level: 85, icon: "⚡", description: "Modern ES6+ and asynchronous programming" },
      { name: "React", level: 82, icon: "⚛️", description: "Component-based UI development" },
      { name: "Spring Boot", level: 80, icon: "🍃", description: "Java-based backend development" },
      { name: "MySQL", level: 85, icon: "🐬", description: "Relational database design and optimization" },
      { name: "Oracle 10g", level: 75, icon: "🏛️", description: "Enterprise database management" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Libraries",
    icon: <Wrench className="w-5 h-5" />,
    color: "from-orange-400 to-red-500",
    skills: [
      { name: "Git", level: 90, icon: "📝", description: "Version control and collaborative development" },
      { name: "GitHub", level: 88, icon: "🐙", description: "Repository management and CI/CD workflows" },
      { name: "Pandas", level: 92, icon: "🐼", description: "Data manipulation and analysis" },
      { name: "NumPy", level: 90, icon: "🔢", description: "Numerical computing and array operations" },
      { name: "Matplotlib", level: 85, icon: "📊", description: "Data visualization and plotting" },
      { name: "Seaborn", level: 83, icon: "📈", description: "Statistical data visualization" },
      { name: "Jupyter", level: 88, icon: "📓", description: "Interactive development and prototyping" },
      { name: "Docker", level: 75, icon: "🐳", description: "Containerization and deployment" },
    ],
  },
  {
    id: "soft-skills",
    name: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    color: "from-pink-400 to-purple-500",
    skills: [
      { name: "Problem Solving", level: 95, icon: "🧩", description: "Analytical thinking and creative solutions" },
      { name: "Team Collaboration", level: 90, icon: "🤝", description: "Cross-functional teamwork and communication" },
      {
        name: "Independent Development",
        level: 92,
        icon: "🚀",
        description: "Self-directed learning and project execution",
      },
      { name: "Research Mindset", level: 88, icon: "🔬", description: "Scientific approach to problem-solving" },
      { name: "Communication", level: 85, icon: "💬", description: "Technical writing and presentation skills" },
      { name: "Leadership", level: 82, icon: "👑", description: "Project management and team guidance" },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("programming")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || []

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive expertise across AI/ML, software development, and emerging technologies
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`relative px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-slate-800/50 border-slate-600 text-gray-300 hover:border-cyan-400/50 hover:text-white"
                }`}
              >
                <span className="flex items-center space-x-2">
                  {category.icon}
                  <span className="font-medium">{category.name}</span>
                </span>
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20"
                  />
                )}
              </Button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {activeSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="group"
              >
                <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 h-full overflow-hidden relative">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-purple-500/0 group-hover:from-cyan-400/10 group-hover:to-purple-500/10 transition-all duration-300" />

                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-slate-700/50 text-cyan-300 border-slate-600 group-hover:border-cyan-400/50 transition-colors"
                      >
                        {skill.level}%
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skill.description}</p>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skillCategories.find((cat) => cat.id === activeCategory)?.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-cyan-400 text-sm font-medium">Click to learn more</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Skills Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {skillCategories.map((category) => (
                  <div key={category.id} className="text-center">
                    <div
                      className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20 mb-3`}
                    >
                      {category.icon}
                    </div>
                    <div className="text-white font-semibold">{category.skills.length}</div>
                    <div className="text-gray-400 text-sm">{category.name}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mt-6 leading-relaxed">
                Continuously expanding skillset with focus on cutting-edge AI technologies, full-stack development, and
                research methodologies. Always eager to learn and adapt to emerging technologies in the rapidly evolving
                tech landscape.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
