import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated 3D Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1737505599162-d9932323a889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBkYXJrJTIwbmV0d29ya3xlbnwxfHx8fDE3NzM2NDQ0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Vinayak Pal
          </motion.h1>
          
          <motion.h2
            className="text-3xl md:text-5xl text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Azure DevOps / MLOps Engineer
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building scalable cloud-native platforms with 4.5 years of expertise in Azure, 
            Terraform, CI/CD, and AI/ML deployments
          </motion.p>

          {/* Contact Info with 3D effect */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center items-center text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="mailto:say2vinayak@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700/50 transition-all"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              say2vinayak@gmail.com
            </motion.a>
            
            <motion.a
              href="tel:+916295409011"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700/50 transition-all"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-5 h-5" />
              +91-6295409011
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/vinayakpal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700/50 transition-all"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>

            <motion.div
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-lg"
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <MapPin className="w-5 h-5" />
              Bangalore
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full mx-auto flex justify-center">
              <motion.div
                className="w-1.5 h-3 bg-purple-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
