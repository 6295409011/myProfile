import { motion } from 'motion/react';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'UBS - Azure DevOps Platform',
    client: 'Union Bank of Switzerland',
    description: 'Designed and deployed cloud-based applications utilizing Azure Function Apps and Static Web Apps. Integrated multiple Azure services to build scalable and reliable enterprise solutions.',
    tech: ['Azure Function Apps', 'Static Web Apps', 'CI/CD', 'Application Insights', 'Azure Monitor'],
    image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGF6dXJlJTIwc2VydmVyc3xlbnwxfHx8fDE3NzM2NDQ0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'FTA - Field Tech Assistance Platform',
    client: 'Generative AI Application',
    description: 'Developed and deployed GenAI applications leveraging Azure OpenAI services, including ChatGPT-4o and text-embedding-ada-002. Built scalable serverless architectures with complete automation.',
    tech: ['Azure OpenAI', 'ChatGPT-4o', 'Function Apps', 'Terraform', 'Static Web Apps'],
    image: 'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzM1NzkzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-600 to-pink-600',
  },
  {
    title: 'PHI - Solar Cost Estimation Platform',
    client: 'ML-Powered Platform',
    description: 'Built comprehensive CI/CD pipelines with GitHub Actions supporting multiple environments. Automated deployment of Azure Databricks jobs, ML services, backend APIs, and React UI.',
    tech: ['Azure Databricks', 'Terraform', 'GitHub Actions', 'App Services', 'React', 'ML Services'],
    image: 'https://images.unsplash.com/photo-1763568258244-9d5aa9c3ce45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZvcHMlMjBhdXRvbWF0aW9uJTIwY29kZXxlbnwxfHx8fDE3NzM2NDQ0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Lloyds of London - Cloud Automation',
    client: 'Enterprise Platform',
    description: 'Designed Infrastructure as Code workflows using Terraform. Implemented comprehensive monitoring and logging with Azure Application Insights for enterprise-grade reliability.',
    tech: ['Terraform', 'IaC', 'Azure Databricks', 'GitHub Actions', 'Application Insights', 'React'],
    image: 'https://images.unsplash.com/photo-1737505599162-d9932323a889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBkYXJrJTIwbmV0d29ya3xlbnwxfHx8fDE3NzM2NDQ0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-orange-600 to-red-600',
  },
];

export function Projects() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full opacity-5"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#8b5cf6' : '#3b82f6'} 0%, transparent 70%)`,
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Project Experience
          </h2>
          <p className="text-xl text-gray-400">Delivering enterprise solutions for global clients</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 h-full"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image with 3D effect */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 mix-blend-multiply`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  
                  {/* Client badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-sm font-semibold text-slate-900">{project.client}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-purple-400" />
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 text-purple-300 rounded-full text-sm"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(147, 51, 234, 0.3)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
