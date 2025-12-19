import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Discord', icon: '💬', url: '#' },
  ]

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Changelog', 'Docs'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Community', 'Support', 'Status', 'License'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  }

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text mb-4"
            >
              ModernStack
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Building the future with modern web technologies
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <motion.li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ModernStack. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with ❤️ using React 18.3, TypeScript 5.6, Vite, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
