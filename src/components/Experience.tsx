import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 lg:py-32 bg-section-bg">
      <div className="section-container">
        <div 
          ref={ref}
          className={`space-y-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional journey and contributions
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">Web Development Intern</CardTitle>
                    <CardDescription className="text-base font-semibold text-foreground">
                      Dhupar Chemicals
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="gap-2 whitespace-nowrap">
                    <Calendar className="w-3 h-3" />
                    May - Jul 2024
                  </Badge>
                </div>
              </CardHeader>
                <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  <span>Full-time Internship</span>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-0.5">▹</span>
                    <span>
                      Performed website updates, bug fixes, and feature enhancements to improve 
                      user experience and functionality
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-0.5">▹</span>
                    <span>
                      Wrote complex SQL queries and managed MySQL databases for efficient 
                      data operations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-0.5">▹</span>
                    <span>
                      Collaborated with designers and developers to meet sprint goals and 
                      deliver quality solutions
                    </span>
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {['HTML/CSS', 'JavaScript', 'MySQL', 'Agile', 'Git'].map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
