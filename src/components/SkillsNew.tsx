import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';
import { 
  SiPython, SiJavascript, SiHtml5, SiMysql, SiTypescript,
  SiPandas, SiNumpy, SiTensorflow, SiFlask, SiReact,
  SiGit, SiGithub, SiJupyter, SiPostman, SiCanva
} from 'react-icons/si';
import { TbChartBar, TbBrandFramer, TbCode, TbBriefcase, TbDatabase } from 'react-icons/tb';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML/CSS', icon: SiHtml5, color: '#E34F26' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    skills: [
      { name: 'pandas', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'Matplotlib', icon: TbChartBar, color: '#11557c' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'PyGame', icon: TbBrandFramer, color: '#0ea5ff' },
      { name: 'Flask', icon: SiFlask, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'VS Code', icon: TbCode, color: '#007ACC' },
      { name: 'MySQL Workbench', icon: SiMysql, color: '#4479A1' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
  {
    title: 'Additional Skills',
    skills: [
      { name: 'Power BI', icon: TbDatabase, color: '#F2C811' },
      { name: 'Excel', icon: TbChartBar, color: '#217346' },
      { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
      { name: 'Data Analysis', icon: TbChartBar, color: '#0ea5ff' },
      { name: 'Agile/Scrum', icon: TbBriefcase, color: '#0ea5ff' },
    ],
  },
];

export default function SkillsNew() {
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
              Technologies and tools I use to build intelligent AI-driven solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              return (
                <Card 
                  key={index}
                  className="card-hover border-border/50 bg-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.skills.map((skill, i) => {
                        const Icon = skill.icon;
                        return (
                          <li 
                            key={i} 
                            className="flex items-center gap-3 group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Icon 
                                className="w-5 h-5" 
                                style={{ color: skill.color }}
                              />
                            </div>
                            <span className="text-sm text-foreground font-medium">{skill.name}</span>
                          </li>
                        );
                      })}
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
