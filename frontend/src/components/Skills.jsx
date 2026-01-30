import React from 'react';
import * as LucideIcons from 'lucide-react';
import { skills, certifications } from '../data/mock';
import { Card, CardContent } from './ui/card';

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building quality into every layer of software
            </p>
          </div>

          {/* Skills Categories - Vertical Layout */}
          <div className="space-y-8 mb-16">
            {Object.entries(skills).map(([category, skillList], catIndex) => (
              <Card
                key={category}
                className="animate-slide-up"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 pb-3 border-b border-border">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skillList.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center text-center gap-3 group cursor-pointer"
                      >
                        <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div
                            className="w-16 h-16 rounded-lg bg-primary/10 items-center justify-center hidden"
                          >
                            <span className="text-2xl font-bold text-primary">
                              {skill.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = LucideIcons[cert.icon];
                return (
                  <Card
                    key={index}
                    className="card-hover text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        {IconComponent && (
                          <IconComponent className="h-8 w-8 text-primary" />
                        )}
                      </div>
                      <h4 className="font-semibold mb-2">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-muted-foreground">{cert.date}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;