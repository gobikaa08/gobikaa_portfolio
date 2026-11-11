import { motion } from 'framer-motion';
import { Code2, Globe, Database, Brain, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { fadeInUp, scaleIn, staggerContainer, staggerContainerSlow, viewportOnce } from '../utils/animations';

const iconMap = { Code2, Globe, Database, Brain, Wrench };

const colorMap = {
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    icon: 'text-purple-400',
    badge: 'bg-purple-500/10 border-purple-500/25 text-purple-300',
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
    gradient: 'from-purple-600 to-violet-600',
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    icon: 'text-blue-400',
    badge: 'bg-blue-500/10 border-blue-500/25 text-blue-300',
    glow: 'hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]',
    gradient: 'from-blue-600 to-cyan-500',
  },
  violet: {
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    icon: 'text-violet-400',
    badge: 'bg-violet-500/10 border-violet-500/25 text-violet-300',
    glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',
    gradient: 'from-violet-600 to-purple-500',
  },
  pink: {
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    icon: 'text-pink-400',
    badge: 'bg-pink-500/10 border-pink-500/25 text-pink-300',
    glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]',
    gradient: 'from-pink-600 to-purple-500',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    icon: 'text-cyan-400',
    badge: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300',
    glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]',
    gradient: 'from-cyan-500 to-blue-600',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-[500px] h-[500px] bg-violet-600 top-0 right-0 opacity-8" />
        <div className="orb w-[400px] h-[400px] bg-cyan-500 bottom-0 left-0 opacity-6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-20"
        >
          <motion.span variants={fadeInUp} className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-400 mb-4">
            What I work with
          </motion.span>
          <motion.h2 variants={fadeInUp} className="section-heading text-white mb-2">
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-6 mx-auto w-24 h-1.5 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 shadow-glow-md" />
        </motion.div>

        {/* Skill cards grid */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code2;
            const colors = colorMap[cat.color] || colorMap.purple;
            return (
              <motion.div
                key={cat.category}
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glass-card p-6 border ${colors.border} ${colors.glow} transition-all duration-300 cursor-default`}
              >
                {/* Icon header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <Icon size={20} className={colors.icon} />
                  </div>
                  <h3 className="text-white font-bold text-base">{cat.category}</h3>
                </div>

                {/* Top gradient bar */}
                <div className={`w-full h-0.5 rounded-full bg-gradient-to-r ${colors.gradient} mb-5 opacity-50`} />

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08 }}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${colors.badge} transition-all`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom tech strip */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 glass-card p-6"
        >
          <p className="text-center text-xs text-slate-500 uppercase tracking-widest font-semibold mb-5">
            Technologies I use
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'Java', 'React.js', 'JavaScript', 'HTML', 'CSS', 'MongoDB', 'MySQL', 'Firebase', 'NumPy', 'Pandas', 'Git', 'GitHub', 'Docker', 'Jupyter'].map(
              (tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-400 bg-white/3 border border-white/5 hover:border-purple-500/30 hover:text-purple-300 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
