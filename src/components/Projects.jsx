import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';
import { fadeInUp, scaleIn, staggerContainer, staggerContainerSlow, viewportOnce } from '../utils/animations';

const projectColors = {
  purple: {
    gradient: 'from-purple-600/20 to-violet-600/20',
    border: 'border-purple-500/20',
    tag: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    glow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]',
    btn: 'from-purple-600 to-violet-600',
    dot: 'bg-purple-500',
    iconBg: 'bg-purple-500/10 text-purple-400',
  },
  blue: {
    gradient: 'from-blue-600/20 to-cyan-600/20',
    border: 'border-blue-500/20',
    tag: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    glow: 'hover:shadow-[0_0_40px_rgba(96,165,250,0.2)]',
    btn: 'from-blue-600 to-cyan-500',
    dot: 'bg-blue-500',
    iconBg: 'bg-blue-500/10 text-blue-400',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-[500px] h-[500px] bg-blue-600 bottom-0 left-0 opacity-10" />
        <div className="orb w-[400px] h-[400px] bg-purple-600 top-20 right-20 opacity-8" />
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
            What I've built
          </motion.span>
          <motion.h2 variants={fadeInUp} className="section-heading text-white mb-2">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-6 mx-auto w-24 h-1.5 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 shadow-glow-md" />
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => {
            const colors = projectColors[project.color] || projectColors.purple;
            return (
              <motion.article
                key={project.id}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`glass-card border ${colors.border} ${colors.glow} transition-all duration-300 overflow-hidden group`}
              >
                {/* Card top gradient band */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${colors.btn}`} />

                {/* Visual header */}
                <div className={`relative h-44 bg-gradient-to-br ${colors.gradient} flex items-center justify-center overflow-hidden`}>
                  {/* Decorative circles */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/3" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/3" />
                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: '30px 30px',
                    }}
                  />
                  <div className="relative z-10 text-center">
                    <span className={`text-5xl font-black ${colors.iconBg.split(' ')[1]} opacity-80`}>
                      {project.shortTitle}
                    </span>
                    {project.featured && (
                      <div className="absolute -top-6 -right-6 flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">
                        <Sparkles size={10} /> Featured
                      </div>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${colors.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r ${colors.btn} hover:opacity-90 transition-opacity`}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      title="Placeholder – replace with actual repo URL"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-300 glass-card border border-white/10 hover:border-white/20 hover:text-white transition-all"
                    >
                      <GithubIcon size={15} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* More projects hint */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 text-center"
        >
          <motion.a
            href="https://github.com/gobikaa08"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-purple-400 transition-colors font-medium"
          >
            <GithubIcon size={16} />
            See more on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
