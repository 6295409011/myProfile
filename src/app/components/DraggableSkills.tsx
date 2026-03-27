import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface SkillCardProps {
  skill: string;
  icon: string;
  initialX: number;
  initialY: number;
  color: string;
}

function SkillCard({ skill, icon, initialX, initialY, color }: SkillCardProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  const [{ isDragging }, drag] = useDrag({
    type: 'SKILL',
    item: { skill },
    end: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (delta) {
        setPosition((prev) => ({
          x: prev.x + delta.x,
          y: prev.y + delta.y,
        }));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <motion.div
      ref={drag}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ 
        scale: isDragging ? 1.15 : 1,
        rotate: 0,
        opacity: isDragging ? 0.8 : 1,
      }}
      whileInView={{ scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.15, 
        rotateZ: isDragging ? 0 : 8,
        boxShadow: '0 20px 60px rgba(139, 92, 246, 0.6)',
      }}
      whileTap={{ scale: 0.95 }}
      className={`px-7 py-5 bg-gradient-to-br ${color} rounded-2xl shadow-2xl text-white font-bold backdrop-blur-md border-2 border-white/20 relative overflow-hidden group`}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex items-center gap-3 relative z-10">
        <motion.span 
          className="text-3xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {icon}
        </motion.span>
        <span className="text-lg tracking-wide drop-shadow-lg">{skill}</span>
      </div>
      
      {/* Corner sparkle */}
      <motion.div
        className="absolute -top-1 -right-1"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Sparkles className="w-4 h-4 text-yellow-300" />
      </motion.div>
    </motion.div>
  );
}

export function DraggableSkills() {
  const skills = [
    { name: 'Azure', icon: '☁️', x: 50, y: 50, color: 'from-blue-500 via-blue-600 to-blue-700' },
    { name: 'Terraform', icon: '🏗️', x: 300, y: 100, color: 'from-purple-500 via-purple-600 to-purple-700' },
    { name: 'Docker', icon: '🐳', x: 600, y: 80, color: 'from-cyan-500 via-cyan-600 to-cyan-700' },
    { name: 'Azure DevOps', icon: '⚙️', x: 900, y: 120, color: 'from-indigo-500 via-indigo-600 to-indigo-700' },
    { name: 'CI/CD', icon: '🔄', x: 150, y: 250, color: 'from-green-500 via-green-600 to-green-700' },
    { name: 'GitHub Actions', icon: '🚀', x: 450, y: 220, color: 'from-blue-500 via-purple-600 to-pink-600' },
    { name: 'Azure OpenAI', icon: '🤖', x: 750, y: 200, color: 'from-emerald-500 via-teal-600 to-cyan-700' },
    { name: 'Python', icon: '🐍', x: 200, y: 400, color: 'from-yellow-500 via-green-600 to-blue-600' },
    { name: 'Databricks', icon: '⚡', x: 500, y: 380, color: 'from-orange-500 via-red-600 to-pink-700' },
    { name: 'Function Apps', icon: '⚡', x: 800, y: 420, color: 'from-violet-500 via-purple-600 to-fuchsia-700' },
    { name: 'PowerShell', icon: '💻', x: 100, y: 550, color: 'from-blue-600 via-indigo-700 to-purple-800' },
    { name: 'ARM Templates', icon: '📋', x: 400, y: 520, color: 'from-red-500 via-orange-600 to-amber-700' },
    { name: 'GitLab', icon: '🦊', x: 700, y: 560, color: 'from-orange-600 via-red-600 to-rose-700' },
    { name: 'Azure Monitor', icon: '📊', x: 950, y: 500, color: 'from-teal-500 via-cyan-600 to-blue-700' },
    { name: 'MLOps', icon: '🧠', x: 300, y: 680, color: 'from-pink-500 via-rose-600 to-red-700' },
    { name: 'Kubernetes', icon: '⚓', x: 600, y: 700, color: 'from-indigo-500 via-blue-600 to-cyan-700' },
    { name: 'GitOps', icon: '🔀', x: 50, y: 780, color: 'from-lime-500 via-green-600 to-emerald-700' },
    { name: 'Azure CLI', icon: '⌨️', x: 350, y: 800, color: 'from-sky-500 via-blue-600 to-indigo-700' },
    { name: 'APIM', icon: '🔌', x: 650, y: 780, color: 'from-purple-500 via-fuchsia-600 to-pink-700' },
    { name: 'VS Code', icon: '💡', x: 900, y: 750, color: 'from-blue-500 via-cyan-600 to-teal-700' },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-slate-950">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900"></div>
        
        {/* Multiple animated layers */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${30 + i * 20}% ${40 + i * 15}%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
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
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-16 h-16 text-purple-400 mx-auto" />
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{ backgroundSize: '200% auto' }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Technical Skills
            </motion.span>
          </h2>
          
          <motion.p 
            className="text-2xl text-gray-300 mb-4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨ Drag, Drop & Explore! ✨
          </motion.p>
          
          <p className="text-lg text-purple-300">
            Showcase of my expertise in Azure, DevOps, MLOps and more. Click and drag the cards to see my skills in action!
          </p>
        </motion.div>

        <DndProvider backend={HTML5Backend}>
          <motion.div 
            className="relative w-full h-[900px] bg-gradient-to-br from-slate-900/80 via-purple-900/30 to-slate-900/80 rounded-3xl border-2 border-purple-500/30 backdrop-blur-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Enhanced grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            
            {/* Animated corner accents */}
            {[
              { top: 0, left: 0, rotate: 0 },
              { top: 0, right: 0, rotate: 90 },
              { bottom: 0, right: 0, rotate: 180 },
              { bottom: 0, left: 0, rotate: 270 },
            ].map((corner, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32"
                style={corner}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                <div className="w-full h-full border-l-4 border-t-4 border-purple-500/50"></div>
              </motion.div>
            ))}
            
            {/* Multiple animated gradient blobs */}
            <motion.div
              className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, 150, 0],
                y: [0, 100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ left: '5%', top: '10%' }}
            />
            <motion.div
              className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, -150, 0],
                y: [0, -100, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ right: '5%', top: '30%' }}
            />
            <motion.div
              className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ left: '40%', bottom: '10%' }}
            />

            {/* Floating particles */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}

            {/* Draggable skill cards */}
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill.name}
                icon={skill.icon}
                initialX={skill.x}
                initialY={skill.y}
                color={skill.color}
              />
            ))}
            
            {/* Center glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </DndProvider>

        {/* Enhanced category cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Cloud Platforms',
              icon: '☁️',
              color: 'from-blue-600 to-cyan-600',
              content: 'Microsoft Azure',
            },
            {
              title: 'Azure Cloud Services',
              icon: '🔧',
              color: 'from-blue-500 to-purple-600',
              content: 'Azure Function Apps, Azure OpenAI, Azure AI Search, Azure Data Factory (ADF), Azure Databricks, Azure Data Lake Storage (ADLS), Azure Storage Accounts, Azure Front Door, Azure App Services, Azure Static Web Apps, Azure Application Insights, Azure API Management (APIM), Azure Machine Learning, Azure Networking',
            },
            {
              title: 'DevOps & Development Tools',
              icon: '🚀',
              color: 'from-purple-600 to-pink-600',
              content: 'Azure DevOps, GitHub Actions, GitLab, Git Bucket, Docker, VS Code, CI/CD Pipelines',
            },
            {
              title: 'Infrastructure as Code & Automation',
              icon: '🏗️',
              color: 'from-green-600 to-emerald-600',
              content: 'Terraform, ARM Templates, GitOps, RLC Scripting, Azure CLI, Bash, Python, PowerShell',
            },
            {
              title: 'Monitoring & Observability',
              icon: '📊',
              color: 'from-orange-600 to-red-600',
              content: 'Azure Monitor, Metrics, Alerts, Scheduled Query Alerts, Big Panda',
            },
            {
              title: 'DevOps Practices',
              icon: '⚙️',
              color: 'from-indigo-600 to-purple-600',
              content: 'CI/CD, GitOps, MLOps, Infrastructure Automation, Cloud Architecture',
            },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-50 blur-xl group-hover:opacity-75 transition-opacity`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              
              <div className="relative p-8 bg-slate-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-500/30 overflow-hidden">
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
                
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {category.icon}
                </motion.div>
                
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {category.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.2) 2px, transparent 2px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.2) 2px, transparent 2px),
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
          background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
        }
      `}</style>
    </section>
  );
}