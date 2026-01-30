import React from 'react';
import * as LucideIcons from 'lucide-react';
import { whyWorkWithMe } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const WhyWorkWithMe = () => {
  const handleScrollToMetrics = () => {
    const element = document.querySelector('#metrics');
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
    <section id="why-work" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Work With Me?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I don't just test software. I help teams build products they can trust.
            </p>
          </div>

          {/* Value Propositions Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {whyWorkWithMe.map((value, index) => {
              const IconComponent = LucideIcons[value.icon];
              return (
                <Card
                  key={index}
                  className="card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                        {IconComponent && (
                          <IconComponent className="h-7 w-7 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                        <p className="text-foreground/80 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Testimonial Pull Quote */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="text-6xl text-primary/30 mb-4">“</div>
                <blockquote className="text-xl md:text-2xl font-medium italic mb-6">
                  Sindhu was an enthusiastic and quick learner. She has scaled up herself to deliver in Agile fashion. She was very active and ready to explore her learning skills and using it to fix the codes and helped in implementation parts. She was skillful and also managed the team as an individual.
                </blockquote>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Antony Jeniro</p>
                  <p className="text-sm text-muted-foreground">
                    Project Lead, Cognizant
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="btn-transition bg-primary hover:bg-primary/90"
              onClick={handleScrollToMetrics}
            >
              See My Impact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;