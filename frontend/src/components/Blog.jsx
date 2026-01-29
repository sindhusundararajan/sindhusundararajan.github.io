import React from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mock';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Blog = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Testing Chronicles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, learnings, and deep dives into test automation and quality engineering
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="card-hover overflow-hidden blog-card group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Featured Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/10">
                      {post.id}
                    </div>
                  </div>
                  <div className="blog-image-overlay" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime} min read
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Button variant="ghost" className="p-0 h-auto font-semibold group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note about blog articles */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Full articles coming soon. Stay tuned for in-depth technical content!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;