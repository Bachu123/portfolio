import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: '3D FPS Game using PyGame',
    description: 'Doom-inspired first-person shooter built from scratch',
    tech: ['Python', 'PyGame', 'Ray Casting', '3D Graphics'],
    highlights: [
      'Implemented ray-casting engine for 3D rendering without external 3D libraries',
      'Developed player movement, collision detection, and shooting mechanics',
      'Created multiple levels with increasing difficulty and enemy AI',
    ],
    github: 'https://github.com/notiamsam/fpsgame',
    featured: true,
  },
  {
    title: 'AI-Powered Chat Assistant',
    description: 'Intelligent chatbot using OpenAI API for natural conversations',
    tech: ['Python', 'OpenAI API', 'Flask', 'React'],
    highlights: [
      'Integrated GPT models for context-aware responses',
      'Built real-time chat interface with message history',
      'Implemented user authentication and session management',
    ],
    github: 'https://github.com/notiamsam',
    featured: true,
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
    title: 'Stock Price Predictor',
    description: 'Machine learning model for stock price prediction using LSTM',
    tech: ['Python', 'TensorFlow', 'Keras', 'pandas'],
    highlights: [
      'Built LSTM neural network for time-series forecasting',
      'Achieved 85% accuracy in trend prediction',
      'Created interactive dashboard for visualization',
    ],
    github: 'https://github.com/notiamsam',
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
  {
    title: 'Cricket Application',
    description: 'Interactive cricket application with live scores, statistics, and match details',
    tech: ['React', 'TypeScript', 'Vite', 'Modern Web'],
    highlights: [
      'Real-time cricket match scores and updates',
      'Comprehensive player and team statistics',
      'Responsive design with modern UI/UX',
      'Live match tracking and detailed analytics',
    ],
    github: 'https://github.com/notiamsam',
    live: 'https://cricket-sahil-sundariyal.vercel.app/',
    featured: true,
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 gradient-bg opacity-30" />
      
      <div className="section-container relative z-10">
        <div 
          ref={ref}
          className={`space-y-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic and personal projects showcasing my skills in AI/ML, web development, and data analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 group h-full ${
                  project.featured ? 'purple-glow' : ''
                }`}
              >
                <CardHeader>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.featured && (
                        <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                      )}
                    </div>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="glass-effect text-xs border-primary/20 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="glass-effect hover:text-primary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="glass-effect hover:text-primary"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center pt-8">
            <Button
              size="lg"
              variant="ghost"
              className="glass-effect hover:text-primary"
              asChild
            >
              <a href="https://github.com/notiamsam" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}