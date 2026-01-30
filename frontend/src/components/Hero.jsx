import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center hero-gradient hero-pattern pt-20"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Greeting */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm {personalInfo.name.split(' ')[0]}
            </h1>

            {/* Main Heading */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground leading-tight">
              {personalInfo.heroHeadline}
            </h3>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {personalInfo.subtitle}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Transforming testing landscapes with intelligent automation and data-driven
              quality assurance. <span className="font-semibold text-primary">5+ years</span> of
              experience reducing manual effort by{' '}
              <span className="font-semibold text-secondary">94%</span> and ensuring{' '}
              <span className="font-semibold text-accent">96% data accuracy</span>.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={`https://${personalInfo.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href={`https://${personalInfo.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-8 w-8" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                className="btn-transition bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                onClick={() => handleScroll('#contact')}
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                className="btn-transition bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                onClick={() => {
                  window.open(
                    'https://customer-assets.emergentagent.com/job_test-architect-2/artifacts/dtyxhy47_SindhuSundararajan_AutomationTestEngineer.pdf',
                    '_blank'
                  );
                }}
              >
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;