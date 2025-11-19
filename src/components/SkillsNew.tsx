import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';
import { 
  SiPython, SiJavascript, SiHtml5, SiMysql,
  SiPandas, SiNumpy, SiTensorflow, SiFlask, SiReact,
  SiGit, SiGithub, SiJupyter, SiPostman,
  SiDocker, SiKubernetes
} from 'react-icons/si';
import { TbChartBar, TbBrandFramer, TbCode, TbDatabase, TbBrain, TbCloud, TbApi } from 'react-icons/tb';
import { FaBrain, FaRobot, FaDatabase } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML/CSS', icon: SiHtml5, color: '#E34F26' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'ML/AI & Frameworks',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'Keras', icon: TbBrain, color: '#D00000' },
      { name: 'Scikit-Learn', icon: FaBrain, color: '#F7931E' },
      { name: 'LangChain', icon: FaRobot, color: '#00C853' },
      { name: 'LLM APIs', icon: TbApi, color: '#9C27B0' },
      { name: 'PyTorch', icon: TbBrain, color: '#EE4C2C' },
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'Matplotlib', icon: TbChartBar, color: '#11557c' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Flask', icon: SiFlask, color: '#000000' },
      { name: 'PyGame', icon: TbBrandFramer, color: '#0ea5ff' },
    ],
  },
  {
    title: 'MLOps/AIOps & Tools',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'RunPod', icon: TbCloud, color: '#00D9FF' },
      { name: 'GPU Containers', icon: TbCloud, color: '#7B68EE' },
      { name: 'CI/CD Basics', icon: TbCode, color: '#FF6B6B' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'VS Code', icon: TbCode, color: '#007ACC' },
      { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
      { name: 'Colab', icon: TbCode, color: '#F9AB00' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
  {
    title: 'Data & Visualization',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'ETL Pipelines', icon: FaDatabase, color: '#4A90E2' },
      { name: 'Analytics', icon: TbChartBar, color: '#00BCD4' },
      { name: 'Power BI', icon: TbDatabase, color: '#F2C811' },
      { name: 'Excel', icon: TbChartBar, color: '#217346' },
    ],
  },
];

export default function SkillsNew() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
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
              Skills & <span className="text-gradient">Tools</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies I've learned during my academic journey and personal projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              return (
                <Card 
                  key={index}
                  className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-center text-gradient">{category.title}</CardTitle>
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
                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg glass-effect group-hover:bg-primary/20 transition-all">
                              <Icon 
                                className="w-5 h-5 transition-transform group-hover:scale-110" 
                                style={{ color: skill.color }}
                              />
                            </div>
                            <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">{skill.name}</span>
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
