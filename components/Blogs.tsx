"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Award, Trophy, Star, Zap, Target, DollarSign } from "lucide-react"

type Achievement = {
  title: string
  description: string
  image: string
  link: string
  category?: string
  date?: string
}

const achievements: Achievement[] = [
 
  {
    title: "PROJIT National Level Project Competition",
    description:
      "Secured 2nd Prize, Trophy & ₹3000 Cash Prize at Institute of Technology, Management & Research, Nashik.",
    image: "/achievements/winner.png",
    link: "",
    category: "Competition",
    date: "2023",
  },
  {
    title: "GMRT Online Science Project Exhibition 2023",
    description:
      "Awarded as Most Innovative Project of 2023 at GMRT Khodad (NCRA – TIFR, Pune) and Indian Institute of Knowledge (IIK), Pune.",
    image: "/achievements/winner.png",
    link: "",
    category: "Innovation",
    date: "2023",
  },
  {
    title: "SHOD National Level Project Competition",
    description:
      "Received Participation Certificate at JSPM & TSSM Bhivrabai Sawant College of Engineering and Research, Polytechnic, Narhe Pune.",
    image: "/achievements/winner.png",
    link: "",
    category: "Competition",
    date: "2023",
  },
  {
    title: "Adsul National Level Quiz Competition",
    description:
      "Received Participation Certificate at Sau. Sundarabai Manik Adsul Polytechnic.",
    image: "/achievements/adsul.png",
    link: "",
    category: "Competition",
    date: "2023",
  },
  {
    title: "DIPEX National Level Project Competition",
    description:
      "Received Participation Certificate at Sipna College of Engineering and Technology, Amravati.",
    image: "/achievements/winner.png",
    link: "",
    category: "Competition",
    date: "2023",
  }
]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Grant":
      return <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
    case "Hackathon":
      return <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
    case "Competition":
      return <Trophy className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
    case "Startup":
      return <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
    case "Innovation":
      return <Star className="w-4 h-4 text-orange-600 dark:text-orange-400" />
    case "Technology":
      return <Zap className="w-4 h-4 text-red-600 dark:text-red-400" />
    default:
      return <Award className="w-4 h-4 text-gray-600 dark:text-gray-400" />
  }
}

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full mb-4">
            <Trophy className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              Achievements
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Recognition & Awards</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of achievements that showcase innovation, dedication, and excellence in technology and
            entrepreneurship.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                      <Image
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                        {achievement.title}
                      </h3>
                      {achievement.date && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full flex-shrink-0">
                          {achievement.date}
                        </span>
                      )}
                    </div>

                    {achievement.category && (
                      <div className="flex items-center gap-2 mb-3">
                        {getCategoryIcon(achievement.category)}
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                          {achievement.category}
                        </span>
                      </div>
                    )}

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {achievement.description}
                    </p>

                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
                      <span className="text-sm font-medium">View on LinkedIn</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Stats Summary */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-white dark:bg-gray-800 rounded-lg px-8 py-4 shadow-md border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Awards</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">First Places</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">$300</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Grant Received</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
