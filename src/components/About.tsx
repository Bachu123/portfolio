import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 gradient-bg opacity-50" />
      
      <div 
        ref={ref}
        className={`section-container relative z-10 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 lg:p-12 purple-glow">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a final year <span className="text-primary font-semibold">BCA student</span> at Amity University, 
                passionate about <span className="text-primary font-semibold">Gen-AI technologies</span> and modern web development. 
                Currently seeking opportunities to apply my skills in Python, Machine Learning, and Full-Stack development.
              </p>
              <p>
                Throughout my academic journey, I've built numerous projects using <span className="text-primary font-semibold">AI/ML frameworks</span>, 
                developed web applications with Flask and React, and gained hands-on experience with data analysis and automation. 
                I'm eager to contribute to innovative projects and grow as a professional developer.
              </p>
              <p>
                My goal is to work on cutting-edge <span className="text-primary font-semibold">AI-driven solutions</span> that 
                solve real-world problems. I'm a quick learner, team player, and always excited to take on new challenges 
                in the rapidly evolving field of artificial intelligence.
              </p>
              <div className="pt-6 space-y-4">
                <h3 className="text-xl font-semibold text-center mb-4">What I'm Looking For</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass-effect p-4 rounded-xl border border-primary/30">
                    <p className="text-sm">• Entry-level Gen-AI/ML Engineer positions</p>
                  </div>
                  <div className="glass-effect p-4 rounded-xl border border-primary/30">
                    <p className="text-sm">• Full-Stack Developer roles with AI focus</p>
                  </div>
                  <div className="glass-effect p-4 rounded-xl border border-primary/30">
                    <p className="text-sm">• Internships in AI/ML development</p>
                  </div>
                  <div className="glass-effect p-4 rounded-xl border border-primary/30">
                    <p className="text-sm">• Projects involving LLMs and automation</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex flex-wrap gap-3 justify-center">
                <div className="glass-effect px-6 py-2 rounded-full text-sm text-primary border border-primary/30">
                  AI & Machine Learning
                </div>
                <div className="glass-effect px-6 py-2 rounded-full text-sm text-primary border border-primary/30">
                  Python Development
                </div>
                <div className="glass-effect px-6 py-2 rounded-full text-sm text-primary border border-primary/30">
                  Full Stack Development
                </div>
                <div className="glass-effect px-6 py-2 rounded-full text-sm text-primary border border-primary/30">
                  Data Analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}