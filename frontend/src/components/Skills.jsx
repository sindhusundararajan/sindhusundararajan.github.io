import React from 'react';
import * as LucideIcons from 'lucide-react';
import { skills, certifications } from '../data/mock';
import { Card, CardContent } from './ui/card';

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building quality into every layer of software
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-12 mb-16">
            {Object.entries(skills).map(([category, skillList], catIndex) => (
              <div
                key={category}
                className="animate-slide-up"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-6">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {skillList.map((skill) => {
                    const IconComponent = LucideIcons[skill.icon];

                    return (
                      <Card key={skill.name} className="card-hover">
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center text-center gap-3">
                            {IconComponent && (
                              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <IconComponent className="h-6 w-6 text-primary" />
                              </div>
                            )}
                            <h4 className="font-semibold text-sm">{skill.name}</h4>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
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