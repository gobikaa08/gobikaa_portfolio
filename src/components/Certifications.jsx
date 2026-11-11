import { motion } from 'framer-motion';
import { Award, Database, Briefcase, BookOpen, Code2, CheckCircle } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { fadeInUp, scaleIn, staggerContainer, staggerContainerSlow, viewportOnce } from '../utils/animations';

const iconMap = { Award, Database, Briefcase, BookOpen, Code2 };

const certColors = {
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    icon: 'text-purple-400',
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
    badge: 'bg-purple-500/10 text-purple-300',
    dot: 'bg-purple-500',
  },
  green: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    icon: 'text-emerald-400',
    glow: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]',
    badge: 'bg-emerald-500/10 text-emerald-300',
    dot: 'bg-emerald-500',
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    icon: 'text-blue-400',
    glow: 'hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]',
    badge: 'bg-blue-500/10 text-blue-300',
    dot: 'bg-blue-500',
  },
  orange: {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    icon: 'text-orange-400',
    glow: 'hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]',
    badge: 'bg-orange-500/10 text-orange-300',
    dot: 'bg-orange-500',
  },
  red: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    icon: 'text-red-400',
    glow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]',
    badge: 'bg-red-500/10 text-red-300',
    dot: 'bg-red-500',
  },
  yellow: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    icon: 'text-yellow-400',
    glow: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]',
    badge: 'bg-yellow-500/10 text-yellow-300',
    dot: 'bg-yellow-500',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    icon: 'text-cyan-400',
    glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]',
    badge: 'bg-cyan-500/10 text-cyan-300',
    dot: 'bg-cyan-500',
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-[500px] h-[500px] bg-cyan-600 top-1/2 -right-32 opacity-10" />
        <div className="orb w-[400px] h-[400px] bg-blue-600 bottom-0 -left-32 opacity-8" />
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
            My credentials
          </motion.span>
          <motion.h2 variants={fadeInUp} className="section-heading text-white mb-2">
            <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-6 mx-auto w-24 h-1.5 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 shadow-glow-md" />
        </motion.div>

        {/* Cert cards */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {certifications.map((cert) => {
            const Icon = iconMap[cert.icon] || Award;
            const colors = certColors[cert.color] || certColors.purple;
            return (
              <motion.div
                key={cert.id}
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glass-card border ${colors.border} ${colors.glow} p-5 transition-all duration-300 cursor-default group`}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                  <Icon size={18} className={colors.icon} />
                </div>

                {/* Score badge */}
                {cert.score && (
                  <div className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${colors.badge}`}>
                    <CheckCircle size={10} />
                    Score: {cert.score}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-white font-bold text-sm leading-snug mb-2 group-hover:text-purple-200 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                  <p className="text-slate-500 text-xs font-medium">{cert.issuer}</p>
                </div>

                {/* Bottom accent line */}
                <div className={`mt-4 h-0.5 w-0 group-hover:w-full rounded-full ${colors.bg} ${colors.icon} bg-current transition-all duration-500 opacity-50`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Total count */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 text-center"
        >
          <span className="inline-flex items-center gap-2 text-sm text-slate-500 font-medium">
            <CheckCircle size={15} className="text-purple-400" />
            {certifications.length} certifications earned and counting
          </span>
        </motion.div>
      </div>
    </section>
  );
}
