import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: '3D FPS Game using PyGame',
    description: 'Doom-inspired first-person shooter built from scratch',
    tech: ['Python', 'PyGame', 'Ray Casting', '3D Graphics'],
    highlights: [
      'Implemented ray-casting engine for 3D rendering',
      'Developed player movement, collision detection, and shooting mechanics',
      'Created multiple levels with increasing difficulty and enemy AI',
    ],
    github: 'https://github.com/notiamsam/fpsgame',
  },
  {
    title: 'Netflix Content Data Analysis',
    description: 'Comprehensive exploratory data analysis of Netflix content library',
    tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
    highlights: [
      'Analyzed 8,000+ titles to identify content trends and patterns',
      'Created visualizations for release trends, genre distribution, and ratings',
      'Generated insights on content strategy and regional preferences',
    ],
    github: 'https://github.com/notiamsam/netflix_data_analysis',
  },
  {
    title: 'Fake News Generator',
    description: 'Flask web application generating satirical news headlines',
    tech: ['Python', 'Flask', 'HTML/CSS', 'JavaScript'],
    highlights: [
      'Built dynamic template system for headline generation',
      'Implemented responsive frontend with modern UI/UX',
      'Deployed with RESTful API architecture',
    ],
    github: 'https://github.com/notiamsam/Fake_News_Generator',
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="section-container">
        <div 
          ref={ref}
          className={`space-y-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing skills in AI, data analysis, game development, and web applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="card-hover border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary"
              onClick={() => window.open('https://github.com/notiamsam', '_blank')}
            >
              <Github className="w-5 h-5" />
              See all projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
