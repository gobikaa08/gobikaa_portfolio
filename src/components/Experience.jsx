import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { fadeInUp, fadeInLeft, staggerContainer, staggerContainerSlow, viewportOnce } from '../utils/animations';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-[450px] h-[450px] bg-purple-600 top-0 right-1/4 opacity-10" />
        <div className="orb w-[350px] h-[350px] bg-violet-600 bottom-0 left-1/4 opacity-8" />
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
            My journey
          </motion.span>
          <motion.h2 variants={fadeInUp} className="section-heading text-white mb-2">
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-6 mx-auto w-24 h-1.5 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 shadow-glow-md" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent" />

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeInLeft}
                className="relative flex gap-6 md:gap-10 mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-glow-purple z-10 relative"
                  >
                    <Briefcase size={20} className="text-white" />
                  </motion.div>
                  {/* Connecting dot */}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-px bg-purple-500/40" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex-1 glass-card border border-purple-500/15 p-6 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300"
                >
                  {/* Badge */}
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full mb-3">
                    {exp.type}
                  </span>

                  <h3 className="text-white font-bold text-xl mb-1">{exp.role}</h3>
                  <p className="text-purple-300 font-semibold text-base mb-2">{exp.company}</p>

                  <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
                    <Calendar size={13} />
                    {exp.duration}
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                  {/* Skills used */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                      >
                        <ChevronRight size={10} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Future marker */}
            <motion.div
              variants={fadeInUp}
              className="relative flex gap-6 md:gap-10 mt-8"
            >
              <div className="relative flex-shrink-0 flex items-center justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl border-2 border-dashed border-purple-500/30 flex items-center justify-center">
                  <span className="text-purple-500/60 text-xl font-black">+</span>
                </div>
              </div>
              <div className="flex-1 flex items-center">
                <p className="text-slate-600 text-sm italic">More experiences coming soon...</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
