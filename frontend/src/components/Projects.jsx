import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../data/mock';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          {project.shortDesc}
        </p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        {/* Impact Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {project.impact.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {metric.metric}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.category.map((cat, idx) => (
            <Badge key={idx} variant="secondary">
              {cat}
            </Badge>
          ))}
        </div>

        {/* View Details Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full btn-transition mt-auto" variant="outline">
              View Details
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
              <DialogDescription>{project.shortDesc}</DialogDescription>
            </DialogHeader>

            <div className="space-y-6 mt-4">
              {/* Full Description */}
              <div>
                <h4 className="font-semibold text-lg mb-2">Overview</h4>
                <p className="text-foreground/80">{project.description}</p>
              </div>

              {/* Impact Metrics */}
              <div>
                <h4 className="font-semibold text-lg mb-3">Impact</h4>
                <div className="grid grid-cols-3 gap-4">
                  {project.impact.map((metric, idx) => (
                    <Card key={idx}>
                      <CardContent className="p-4 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {metric.metric}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-semibold text-lg mb-2">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What it Demonstrates */}
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  What This Demonstrates
                </h4>
                <p className="text-foreground/80">{project.demonstrates}</p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                {project.github && (
                  <Button variant="outline" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    'Automation',
    'API Testing',
    'ETL Testing',
    'Mobile Testing',
    'Performance Testing',
    'AI/ML',
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of automation frameworks and testing solutions that drive
              quality
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
                className="btn-transition"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;