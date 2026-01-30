import React from 'react';
import * as LucideIcons from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Card, CardContent } from './ui/card';

const About = () => {
  // Dynamically get icon component
  const getIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
  };

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Breaking Code Early So Users Never Do
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Photo & Stats */}
            <div className="lg:col-span-1 space-y-6 animate-slide-in-left">
              {/* Professional Photo */}
              <div className="relative group">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-8xl font-bold text-foreground/60">SS</div>
                  {/* Note: Replace with actual image when you have a web-compatible format (JPG/PNG/WebP) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Quick Stats Card */}
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-center">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {personalInfo.quickStats.map((stat, index) => {
                      const IconComponent = LucideIcons[stat.icon];
                      return (
                        <div key={index} className="text-center">
                          <div className="flex justify-center mb-2">
                            {IconComponent && (
                              <IconComponent className="h-6 w-6 text-primary" />
                            )}
                          </div>
                          <div className="text-2xl font-bold text-primary">
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {stat.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Bio & Core Values */}
            <div className="lg:col-span-2 space-y-8 animate-slide-in-right">
              {/* Bio */}
              <div className="space-y-4">
                {personalInfo.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-foreground/80 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Values */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Core Values</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {personalInfo.coreValues.map((value, index) => {
                    const IconComponent = LucideIcons[value.icon];
                    return (
                      <Card
                        key={index}
                        className="card-hover border-2 hover:border-primary/50 transition-colors"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center text-center space-y-3">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                              {IconComponent && (
                                <IconComponent className="h-6 w-6 text-primary" />
                              )}
                            </div>
                            <h4 className="font-semibold text-lg">{value.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {value.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;