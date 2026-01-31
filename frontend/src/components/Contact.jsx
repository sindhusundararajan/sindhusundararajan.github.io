import React from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Card, CardContent } from './ui/card';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Looking for a quality-focused SDET? Let's talk!
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      {personalInfo.contact.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-center">Connect on Social</h3>
                <div className="flex justify-center gap-4">
                  <a
                    href={`https://${personalInfo.contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-background hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 text-primary" />
                  </a>
                  <a
                    href={`https://${personalInfo.contact.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-background hover:bg-secondary/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6 text-secondary" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Availability Note */}
            <Card className="border-2 border-accent/50 md:col-span-2">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Open to full-time opportunities and freelance projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
