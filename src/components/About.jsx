import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Star, Heart } from 'lucide-react';
import { personal, education, careerInterests } from '../data/portfolioData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from '../utils/animations';

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-96 h-96 bg-purple-600 top-20 -left-20 opacity-10" />
        <div className="orb w-80 h-80 bg-blue-600 bottom-20 -right-20 opacity-8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-400 mb-4"
          >
            Get to know me
          </motion.span>
          <motion.h2 variants={fadeInUp} className="section-heading text-white mb-2">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="mt-6 mx-auto w-24 h-1.5 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 shadow-glow-md"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — intro */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <motion.div variants={fadeInLeft} className="glass-card p-8">
              {/* Avatar placeholder */}
              <div className="flex items-center gap-5 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 via-violet-600 to-blue-600 flex items-center justify-center text-3xl font-black text-white shadow-glow-purple">
                    G
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-[#020818]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{personal.name}</h3>
                  <p className="text-purple-400 text-sm font-medium">{personal.role}</p>
                  <p className="text-slate-500 text-sm">{personal.tagline}</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-base">
                {personal.intro}
              </p>
            </motion.div>

            {/* Career interests */}
            <motion.div variants={fadeInLeft} className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Heart size={16} className="text-purple-400" />
                <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                  Career Interests
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {careerInterests.map((interest) => (
                  <span key={interest} className="skill-badge">
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — education */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <motion.div variants={fadeInRight} className="glass-card p-8">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={20} className="text-purple-400" />
                <h3 className="text-lg font-bold text-white">Education</h3>
              </div>

              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="relative pl-5 border-l-2 border-purple-500/30"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-2 border-[#020818]" />

                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-400 mb-2">
                    {edu.status}
                  </span>
                  <h4 className="text-white font-bold text-lg leading-tight mb-1">
                    {edu.degree}
                  </h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-purple-400" />
                      {edu.institution}, {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-blue-400" />
                      {edu.duration}
                    </span>
                  </div>

                  {/* CGPA */}
                  <div className="glass-card p-4 inline-flex items-center gap-3">
                    <Star size={16} className="text-yellow-400" />
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">CGPA</p>
                      <p className="text-2xl font-black gradient-text">{edu.cgpa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Quick stats */}
            <motion.div variants={fadeInRight}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '2+', label: 'Projects', color: 'from-purple-500 to-violet-600' },
                  { value: '7+', label: 'Certifications', color: 'from-blue-500 to-cyan-500' },
                  { value: '1+', label: 'Internship', color: 'from-violet-500 to-pink-500' },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card p-5 text-center glass-card-hover">
                    <p
                      className={`text-3xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
