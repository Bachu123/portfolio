import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award, FileCheck } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Amity University',
    location: 'Online',
    period: '2022 - Present',
    gpa: '7.53 / 10',
    type: 'primary',
  },
  {
    degree: 'Senior Secondary (Class XII)',
    institution: "St. Teresa's School",
    location: 'CBSE Board',
    period: '2021',
    gpa: '90.5%',
    type: 'secondary',
  },
  {
    degree: 'Secondary (Class X)',
    institution: "St. Teresa's School",
    location: 'CBSE Board',
    period: '2019',
    gpa: '93.8%',
    type: 'secondary',
  },
];

const certifications = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI and Stanford University',
    period: '2024',
    type: 'primary',
  },
  {
    name: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI',
    period: '2024',
    type: 'primary',
  },
  {
    name: 'Generative AI for Everyone',
    issuer: 'DeepLearning.AI',
    period: '2024',
    type: 'primary',
  },
  {
    name: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    period: '2024',
    type: 'primary',
  },
  {
    name: 'Networking Essentials',
    issuer: 'CISCO',
    period: '2024',
    type: 'secondary',
  },
  {
    name: 'Innovation by Design',
    issuer: 'NPTEL',
    period: '2024',
    type: 'secondary',
  },
  {
    name: 'Practical Cyber Security',
    issuer: 'NPTEL',
    period: '2024',
    type: 'secondary',
  },
];

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 lg:py-32 bg-section-bg">
      <div className="section-container">
        <div 
          ref={ref}
          className={`space-y-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic background and achievements
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className={`border-l-4 ${
                  edu.type === 'primary' ? 'border-l-primary' : 'border-l-muted'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        edu.type === 'primary' ? 'bg-primary/10' : 'bg-muted'
                      }`}>
                        {edu.type === 'primary' ? (
                          <GraduationCap className="w-6 h-6 text-primary" />
                        ) : (
                          <Award className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-base">
                          {edu.institution} · {edu.location}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Period:</span>
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Score:</span>
                      <span className="font-semibold text-primary">{edu.gpa}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="text-center space-y-4 pt-12">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and courses completed
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className={`border-l-4 ${
                  cert.type === 'primary' ? 'border-l-primary' : 'border-l-muted'
                }`}
                style={{ animationDelay: `${(index + education.length) * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      cert.type === 'primary' ? 'bg-primary/10' : 'bg-muted'
                    }`}>
                      <FileCheck className={`w-6 h-6 ${
                        cert.type === 'primary' ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Completed:</span>
                    <span className="font-medium">{cert.period}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
