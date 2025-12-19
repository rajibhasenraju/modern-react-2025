import { motion } from 'framer-motion'

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Built with Vite for instant hot module replacement and optimized builds'
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Tailwind CSS with custom design system and glassmorphism effects'
  },
  {
    icon: '💪',
    title: 'Type Safe',
    description: 'TypeScript 5.6 for enhanced developer experience and fewer bugs'
  },
  {
    icon: '✨',
    title: 'Smooth Animations',
    description: 'Framer Motion for production-ready, performant animations'
  },
  {
    icon: '🌙',
    title: 'Dark Mode',
    description: 'System detection with manual toggle for perfect user experience'
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Mobile-first design that looks great on all devices'
  }
]

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need for modern web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-6xl mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
