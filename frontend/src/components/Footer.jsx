import React from 'react';
import { Heart, ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Column */}
            <div>
              <h3 className="font-mono text-lg font-semibold mb-4">
                {personalInfo.tagline}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Building quality into code, one test at a time.
              </p>
              <div className="flex gap-3">
                <a
                  href={`https://${personalInfo.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`https://${personalInfo.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${personalInfo.contact.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.contact.phone}
                  </a>
                </li>
                <li>{personalInfo.contact.location}</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with React & Tailwind CSS{' '}
              <Heart className="h-4 w-4 text-accent fill-accent" />
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 rounded-full shadow-lg btn-transition z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;