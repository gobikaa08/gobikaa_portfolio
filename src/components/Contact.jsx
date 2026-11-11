import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personal } from '../data/portfolioData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from '../utils/animations';

const socialLinks = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'gobikaa08',
    href: personal.github,
    color: 'hover:border-white/30 hover:text-white',
    description: 'Check out my repositories',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'gobikaa-e',
    href: personal.linkedin,
    color: 'hover:border-blue-500/40 hover:text-blue-400',
    description: 'Connect with me professionally',
  },
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'hover:border-purple-500/40 hover:text-purple-400',
    description: 'Send me a message',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-[600px] h-[600px] bg-purple-600 bottom-0 left-1/2 -translate-x-1/2 opacity-12" />
        <div className="orb w-[400px] h-[400px] bg-blue-600 top-0 right-0 opacity-8" />
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
            Let's connect
          </motion.span>
          <motion.h2 variants={fadeInUp} className="section-heading text-white mb-2">
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-6 mx-auto w-24 h-1.5 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 shadow-glow-md" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left — CTA card */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <div className="glass-card p-8 border border-purple-500/20">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6 shadow-glow-purple">
                <MessageSquare size={24} className="text-white" />
              </div>

              <h3 className="text-white font-bold text-2xl mb-3">
                Let's work together
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                I'm currently open to internship opportunities, collaborative projects and discussions about software development, AI and ML. Feel free to reach out — I'd love to connect!
              </p>

              <motion.a
                href={`mailto:${personal.email}?subject=Hello Gobikaa – Portfolio Enquiry`}
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(168,85,247,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 transition-all"
              >
                <Send size={16} />
                Send me an email
                <ArrowRight size={16} />
              </motion.a>
            </div>

            {/* Email display */}
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 glass-card p-4 border border-white/5 hover:border-purple-500/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Mail size={16} className="text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Email</p>
                <p className="text-sm text-slate-300 font-semibold group-hover:text-purple-300 transition-colors">
                  {personal.email}
                </p>
              </div>
              <ArrowRight size={14} className="ml-auto text-slate-600 group-hover:text-purple-400 transition-colors" />
            </motion.a>
          </motion.div>

          {/* Right — Social links */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-6">
              Find me on
            </p>

            {socialLinks.map(({ icon: Icon, label, value, href, color, description }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className={`flex items-center gap-4 glass-card p-5 border border-white/5 ${color} transition-all duration-300 group`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-slate-500 text-xs font-medium truncate">{description}</p>
                  <p className="text-slate-400 text-xs mt-0.5 font-mono truncate">{value}</p>
                </div>
                <ArrowRight size={16} className="text-slate-600 group-hover:text-current transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
