import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, Wrench, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'HTML/CSS', 'SQL', 'TypeScript'],
  },
  {
    title: 'Libraries & Frameworks',
    icon: Sparkles,
    skills: ['pandas', 'NumPy', 'Matplotlib', 'TensorFlow', 'PyGame', 'Flask', 'React'],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: ['VS Code', 'MySQL Workbench', 'Git', 'GitHub', 'Jupyter', 'Postman'],
  },
  {
    title: 'Additional Skills',
    icon: Database,
    skills: ['Power BI', 'Excel', 'Canva', 'Data Analysis', 'Agile/Scrum'],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 lg:py-32 bg-background">
      <div className="section-container">
        <div 
          ref={ref}
          className={`space-y-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Skills & Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="card-hover border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <li 
                          key={i} 
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
