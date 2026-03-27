import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-800 to-slate-950 py-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋
              </motion.span>
              Get in Touch
            </h3>
            <div className="space-y-3">
              <motion.a
                href="mailto:say2vinayak@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">say2vinayak@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+916295409011"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91-6295409011</span>
              </motion.a>
              <motion.div
                className="flex items-center gap-2 text-gray-300"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Bangalore, India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Expertise</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>☁️ Azure Cloud</div>
              <div>🏗️ Infrastructure as Code</div>
              <div>🚀 CI/CD Pipelines</div>
              <div>🤖 AI/ML Deployment</div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Connect</h3>
            <motion.a
              href="https://linkedin.com/in/vinayakpal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"></div>

        {/* Bottom */}
        <motion.div
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center gap-2">
            Made with 
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            by Vinayak Pal © 2026
          </p>
          <p className="mt-2 text-xs">
            Azure DevOps Engineer | MLOps Specialist | Cloud Architecture Expert
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
