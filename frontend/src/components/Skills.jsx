import React, { useState, useEffect, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { skills, certifications } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const [visibleBars, setVisibleBars] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation when section comes into view
            setTimeout(() => {
              setVisibleBars({});
              Object.keys(skills).forEach((category, catIndex) => {
                skills[category].forEach((skill, skillIndex) => {
                  setTimeout(() => {
                    setVisibleBars((prev) => ({
                      ...prev,
                      [`${category}-${skill.name}`]: true,
                    }));
                  }, (catIndex * skills[category].length + skillIndex) * 100);
                });
              });
            }, 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getLevelWidth = (level) => {
    switch (level) {
      case 'Expert':
        return '95%';
      case 'Advanced':
        return '80%';
      case 'Intermediate':
        return '65%';
      default:
        return '50%';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-primary';
      case 'Advanced':
        return 'bg-secondary';
      case 'Intermediate':
        return 'bg-accent';
      default:
        return 'bg-muted';
    }
  };

  return (
    <section id="skills" className="section-padding" ref={sectionRef}>
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
                <div className="grid md:grid-cols-2 gap-6">
                  {skillList.map((skill) => {
                    const IconComponent = LucideIcons[skill.icon];
                    const isVisible = visibleBars[`${category}-${skill.name}`];

                    return (
                      <Card key={skill.name} className="card-hover">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              {IconComponent && (
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <IconComponent className="h-5 w-5 text-primary" />
                                </div>
                              )}
                              <div>
                                <h4 className="font-semibold text-lg">{skill.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {skill.years} years
                                </p>
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className={`${
                                skill.level === 'Expert'
                                  ? 'border-primary text-primary'
                                  : skill.level === 'Advanced'
                                  ? 'border-secondary text-secondary'
                                  : 'border-accent text-accent'
                              }`}
                            >
                              {skill.level}
                            </Badge>
                          </div>

                          {/* Progress Bar */}
                          <div className="skill-progress">
                            <div
                              className={`skill-progress-bar ${getLevelColor(
                                skill.level
                              )}`}
                              style={{
                                width: isVisible ? getLevelWidth(skill.level) : '0%',
                              }}
                            />
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