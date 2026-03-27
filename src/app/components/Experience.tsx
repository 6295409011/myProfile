import { motion } from 'motion/react';
import { Briefcase, Award, Languages } from 'lucide-react';

export function Experience() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Summary
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 h-full"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-purple-400" />
                <h3 className="text-3xl font-bold text-white">Senior Analyst</h3>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Experienced Azure DevOps Engineer with <span className="text-purple-400 font-bold">4.5 years of expertise</span> in 
                  designing, automating, and managing cloud-native platforms on Microsoft Azure.
                </p>
                
                <p>
                  I specialize in building <span className="text-blue-400 font-semibold">scalable and secure cloud infrastructures</span> using 
                  Terraform and Infrastructure as Code (IaC) methodologies. Strong track record of implementing 
                  end-to-end <span className="text-green-400 font-semibold">CI/CD pipelines</span> using Azure DevOps and GitHub Actions.
                </p>
                
                <p>
                  Skilled in leveraging key Azure services including Azure Function Apps, App Services, Azure OpenAI, 
                  Azure AI Search, Databricks, and more to deliver robust enterprise-grade cloud solutions.
                </p>
                
                <p>
                  Hands-on experience supporting enterprise platforms for <span className="text-pink-400 font-semibold">global clients 
                  including UBS and PHI</span>, focusing on automation, reliability, scalability, and DevOps best practices.
                </p>

                <p>
                  Proficient in deploying <span className="text-purple-400 font-semibold">AI/ML solutions and Generative AI (GenAI) 
                  applications</span> using Azure OpenAI models, integrating them seamlessly into production-grade cloud environments.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Side Cards */}
          <div className="space-y-8">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border border-blue-500/30"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
                </div>
                <div className="space-y-3">
                  <motion.div
                    className="p-3 bg-slate-800/50 rounded-lg"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-blue-400 font-semibold">AZ-900</div>
                    <div className="text-sm text-gray-300">Azure Fundamentals</div>
                  </motion.div>
                  <motion.div
                    className="p-3 bg-slate-800/50 rounded-lg"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-purple-400 font-semibold">AZ-204</div>
                    <div className="text-sm text-gray-300">Azure Developer Associate</div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl border border-purple-500/30"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Languages className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Languages</h3>
                </div>
                <div className="space-y-2">
                  {['English', 'Bengali', 'Hindi'].map((lang, i) => (
                    <motion.div
                      key={lang}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{lang}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: '4.5+', label: 'Years Experience', color: 'from-blue-400 to-cyan-400' },
            { value: '4', label: 'Major Projects', color: 'from-purple-400 to-pink-400' },
            { value: '2', label: 'Certifications', color: 'from-green-400 to-emerald-400' },
            { value: '10+', label: 'Azure Services', color: 'from-orange-400 to-red-400' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotateY: 10 }}
            >
              <motion.div
                className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
