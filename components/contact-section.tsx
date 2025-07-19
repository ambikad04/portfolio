"use client"

import React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Github, Linkedin, Send, Download, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", description: "" });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setModalContent({
          title: "🎉 Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setModalOpen(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setModalContent({
          title: "❌ Error",
          description: data.error || "Failed to send message. Please try again later.",
        });
        setModalOpen(true);
      }
    } catch (err) {
      setModalContent({
        title: "❌ Error",
        description: "Failed to send message. Please try again later.",
      });
      setModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/ambikad04",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/ambika04",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:ambikadas0412@gmail.com",
      color: "hover:text-cyan-400",
    },
  ]

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogTitle>{modalContent.title}</DialogTitle>
          <DialogDescription>{modalContent.description}</DialogDescription>
          <button
            className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
            onClick={() => setModalOpen(false)}
          >
            Close
          </button>
        </DialogContent>
      </Dialog>
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
                  Get In Touch
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Let's collaborate on exciting AI projects or discuss research opportunities
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    I'm always interested in discussing new opportunities, collaborating on research projects, or simply
                    connecting with fellow AI enthusiasts. Feel free to reach out!
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <a
                        href="mailto:ambikadas0412@gmail.com"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        ambikadas0412@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Location</div>
                      <div className="text-gray-300">Kolkata, India</div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/50 rounded-lg text-gray-400 ${social.color} transition-all duration-300`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Download CV */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="/AMBIKA_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download CV
                    </Button>
                  </a>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <Card className="bg-slate-800/50 border-slate-700/50">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                            placeholder="Your Name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 resize-none"
                          placeholder="Tell me about your project or idea..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                        disabled={isSubmitting}
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        <Send className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
