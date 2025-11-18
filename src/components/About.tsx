import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 lg:py-32 bg-section-bg">
      <div 
        ref={ref}
        className={`section-container transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold">
            About Me
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a BCA student at <span className="text-primary font-semibold">Amity University</span>, passionate 
              about building innovative web applications and extracting insights from data. My journey 
              combines technical skills in web development, data analysis, and game development with 
              a constant drive to learn and create.
            </p>
            <p>
              During my internship at <span className="text-primary font-semibold">Dhupar Chemicals</span> (May–July 2024), 
              I contributed to website updates, database optimizations, and collaborated with teams using Agile 
              methodologies. I thrive on turning complex problems into elegant, user-friendly solutions.
            </p>
            <p>
              Whether it's analyzing Netflix content trends, building 3D games with PyGame, or creating 
              dynamic web applications with Flask and JavaScript, I bring curiosity and dedication to 
              every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
