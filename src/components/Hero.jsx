import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowDown, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personal, roles } from '../data/portfolioData';
import { fadeInUp, fadeInDown, staggerContainer } from '../utils/animations';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced animated background with multiple layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.15, 0.25, 0.15],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="orb w-[700px] h-[700px] bg-purple-600 -top-48 -left-48"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.12, 0.22, 0.12],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="orb w-[600px] h-[600px] bg-blue-600 -bottom-32 -right-32"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.08, 0.18, 0.08],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="orb w-[400px] h-[400px] bg-violet-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.25, 1], 
            opacity: [0.06, 0.15, 0.06]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="orb w-[350px] h-[350px] bg-cyan-500 top-20 right-1/4"
        />

        {/* Enhanced grid pattern with gradient */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168,85,247,0.8) 1.5px, transparent 1.5px),
              linear-gradient(90deg, rgba(168,85,247,0.8) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Animated gradient lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full"
              style={{
                top: `${20 * (i + 1)}%`,
                background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)',
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 8,
                delay: i * 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Enhanced floating particles with varied sizes and colors */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: i % 3 === 0 
                ? 'rgba(168,85,247,0.5)' 
                : i % 3 === 1 
                ? 'rgba(99,102,241,0.4)' 
                : 'rgba(59,130,246,0.4)',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() > 0.5 ? 20 : -20, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Enhanced badge with shimmer */}
          <motion.div variants={fadeInDown} className="mb-8">
            <span className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-blue-500/20 border border-purple-400/30 text-purple-200 shadow-glow-sm">
              <span className="relative flex w-2.5 h-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-purple-500"></span>
              </span>
              Available for opportunities
              <span className="absolute inset-0 rounded-full shimmer"></span>
            </span>
          </motion.div>

          {/* Name with enhanced glow */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none"
          >
            <span className="text-white text-glow">Hi, I'm </span>
            <span className="gradient-text inline-block">Gobikaa</span>
          </motion.h1>

          {/* Enhanced animated role with backdrop */}
          <motion.div
            variants={fadeInUp}
            className="h-12 md:h-14 flex items-center justify-center mb-8"
          >
            <div className="relative px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
              <span className="text-xl md:text-2xl lg:text-3xl font-mono font-bold">
                <span className="text-purple-400">{'<'}</span>
                <span className="gradient-text-purple">{displayed}</span>
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-purple-400"
                >
                  |
                </motion.span>
                <span className="text-purple-400">{' />'}</span>
              </span>
            </div>
          </motion.div>

          {/* Enhanced sub-role */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-slate-300 font-semibold mb-8 tracking-wide flex items-center justify-center gap-3 flex-wrap"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
              Computer Science Engineering Student
            </span>
            <span className="text-purple-400/60">·</span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
              Rajalakshmi Institute of Technology
            </span>
          </motion.p>

          {/* Enhanced bio */}
          <motion.p
            variants={fadeInUp}
            className="max-w-3xl text-slate-300 text-base md:text-lg leading-relaxed mb-12 px-4"
          >
            {personal.intro}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168,85,247,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="btn-primary"
            >
              View Projects <ChevronRight size={18} />
            </motion.button>
            <motion.a
              href={personal.resume}
              download="Gobikaa_E_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary"
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Enhanced social links */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-20">
            {[
              { icon: GithubIcon, href: personal.github, label: 'GitHub', color: 'hover:text-white hover:border-white/30' },
              { icon: LinkedinIcon, href: personal.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/30' },
              { icon: Mail, href: `mailto:${personal.email}`, label: 'Email', color: 'hover:text-purple-400 hover:border-purple-400/30' },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className={`relative w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-400 ${color} transition-all duration-300 group`}
              >
                <Icon size={20} />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced scroll indicator */}
          <motion.div
            variants={fadeInUp}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3 text-slate-500 cursor-pointer group"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs tracking-widest uppercase font-semibold group-hover:text-purple-400 transition-colors">
              Scroll down
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-purple-400/30 flex items-start justify-center p-1.5 group-hover:border-purple-400/50 transition-colors">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-purple-400"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
