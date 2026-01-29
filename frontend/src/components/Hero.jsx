import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Mail, Linkedin, Github } from 'lucide-react';
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
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Greeting */}
              <div className="inline-block">
                <span className="text-sm md:text-base font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                  👋 Hi, I'm {personalInfo.name.split(' ')[0]}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {personalInfo.heroHeadline}
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {personalInfo.subtitle}
              </p>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Transforming testing landscapes with intelligent automation and data-driven
                quality assurance. <span className="font-semibold text-primary">5+ years</span> of
                experience reducing manual effort by{' '}
                <span className="font-semibold text-secondary">94%</span> and ensuring{' '}
                <span className="font-semibold text-accent">99.9% data accuracy</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="btn-transition bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => handleScroll('#projects')}
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-transition border-2"
                  onClick={() => {
                    // Download resume functionality
                    window.open(
                      'https://customer-assets.emergentagent.com/job_test-architect-2/artifacts/dtyxhy47_SindhuSundararajan_AutomationTestEngineer.pdf',
                      '_blank'
                    );
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-transition border-2"
                  onClick={() => handleScroll('#contact')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Let's Connect
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href={`https://${personalInfo.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={`https://${personalInfo.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div
              className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-20 animate-pulse" />
                
                {/* Profile Image Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <div className="profile-image w-full h-full">
                    <img
                      src="https://customer-assets.emergentagent.com/job_test-architect-2/artifacts/yu8cjx2s_IMG_5475.heic"
                      alt="Sindhu Sundararajan - SDET"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute bottom-4 right-4 bg-background border-2 border-accent rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      <span className="text-sm font-medium">All Tests Passing ✓</span>
                    </div>
                  </div>
                </div>
              </div>
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