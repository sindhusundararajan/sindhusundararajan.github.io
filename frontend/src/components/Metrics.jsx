import React, { useState, useEffect, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { metrics } from '../data/mock';
import { Card, CardContent } from './ui/card';

const Metrics = () => {
  const [counts, setCounts] = useState({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    metrics.forEach((metric) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = metric.value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        current += increment;
        step++;
        
        if (step >= steps) {
          current = metric.value;
          clearInterval(timer);
        }

        setCounts((prev) => ({
          ...prev,
          [metric.label]: current,
        }));
      }, duration / steps);
    });
  };

  const formatValue = (value, suffix) => {
    if (!value) return '0';
    
    // For percentages with decimals
    if (suffix === '%' && value % 1 !== 0) {
      return value.toFixed(1);
    }
    
    // For large numbers
    if (value >= 1000) {
      return Math.floor(value).toLocaleString();
    }
    
    return Math.floor(value).toString();
  };

  return (
    <section id="metrics" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Impact Metrics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that tell the story of quality and efficiency
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => {
              const IconComponent = LucideIcons[metric.icon];
              const currentValue = counts[metric.label] || 0;

              return (
                <Card
                  key={index}
                  className="card-hover text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
                      {IconComponent && (
                        <IconComponent className="h-8 w-8 text-primary" />
                      )}
                    </div>

                    {/* Metric Value */}
                    <div className="metric-value mb-3">
                      {formatValue(currentValue, metric.suffix)}
                      {metric.suffix}
                    </div>

                    {/* Metric Label */}
                    <p className="text-sm text-muted-foreground font-medium">
                      {metric.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Context */}
          <div className="mt-16 text-center animate-fade-in">
            <Card className="inline-block bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg text-foreground/80 max-w-3xl">
                  These metrics represent real-world impact across enterprise-scale projects,
                  demonstrating not just technical proficiency but tangible value delivered to
                  teams and organizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;