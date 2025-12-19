import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-90 dark:opacity-70" />
      
      {/* Floating Shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            Start your next project with the most modern tech stack available in 2025
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-purple-600 rounded-full font-bold shadow-2xl hover:shadow-white/50 transition-shadow"
            >
              Start Building
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-white rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              View Documentation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
