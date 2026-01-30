import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Mail, Linkedin, Github } from 'lucide-react';
import Lottie from 'lottie-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';

// Temporary placeholder animation data
// Replace this with actual Lottie JSON from LottieFiles.com
// Recommended: Search "woman coding" or "female developer" on LottieFiles
const placeholderAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 500,
  h: 500,
  nm: "Woman Coding Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle Background",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [250, 250, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [400, 400] },
              p: { a: 0, k: [0, 0] },
              nm: "Circle"
            },
            {
              ty: "gf",
              o: { a: 0, k: 100 },
              r: 1,
              bm: 0,
              g: {
                p: 3,
                k: {
                  a: 0,
                  k: [0, 0.66, 0.81, 0.96, 0.5, 0.83, 0.65, 0.94, 1, 1, 0.49, 0.92]
                }
              },
              s: { a: 0, k: [0, 0] },
              e: { a: 0, k: [100, 100] },
              t: 1,
              nm: "Gradient Fill"
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 30 },
              sk: { a: 0, k: 0 },
              sa: { a: 0, k: 0 }
            }
          ],
          nm: "Circle Group"
        }
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0
    }
  ],
  markers: []
};

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
                <span className="text-sm md:text-base font-bold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Hi, I'm {personalInfo.name.split(' ')[0]}
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
                <span className="font-semibold text-accent">96% data accuracy</span>.
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

            {/* Right Column - Animated Illustration */}
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
                
                {/* Animated Illustration Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                    {/* Lottie Animation */}
                    <Lottie
                      animationData={placeholderAnimation}
                      loop={true}
                      className="w-full h-full"
                    />
                    
                    {/* Instructional Overlay - Remove after adding actual animation */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="text-center px-6">
                        <div className="text-4xl mb-2">👩‍💻</div>
                        <p className="text-xs text-muted-foreground font-mono">
                          Replace with Lottie animation
                        </p>
                        <p className="text-xs text-muted-foreground font-mono mt-1">
                          See ANIMATION_GUIDE.md
                        </p>
                      </div>
                    </div>
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