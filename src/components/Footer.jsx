import { motion } from 'framer-motion';
import { Mail, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personal, navLinks } from '../data/portfolioData';
import { fadeInUp, staggerContainer, viewportOnce } from '../utils/animations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-10 mb-10"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                {personal.name.split(' ')[0]}<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Computer Science Engineering Student passionate about building innovative solutions with modern technology.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeInUp}>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-slate-500 hover:text-purple-400 text-sm transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={fadeInUp}>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Connect
            </p>
            <div className="space-y-3 mb-5">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-purple-400 transition-colors"
              >
                <Mail size={14} />
                {personal.email}
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
              >
                <GithubIcon size={14} />
                github.com/gobikaa08
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon size={14} />
                linkedin.com/in/gobikaa-e
              </a>
            </div>

            {/* Social icon row */}
            <div className="flex gap-3">
              {[
                { icon: GithubIcon, href: personal.github, label: 'GitHub' },
                { icon: LinkedinIcon, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-500 hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600"
          >
            <p>© {currentYear} {personal.name}. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Built with <Heart size={12} className="text-pink-500 fill-pink-500" /> using React & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
