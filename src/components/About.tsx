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
              A BCA student specializing in <span className="text-primary font-semibold">Gen-AI technologies</span>, 
              data-driven development, and modern web systems. Experienced with Python, MySQL, Flask, PyGame, 
              and analytical workflows.
            </p>
            <p>
              Passionate about building <span className="text-primary font-semibold">intelligent applications</span> using 
              AI models, automation, and machine learning techniques. Skilled in leveraging data insights to create 
              innovative solutions that drive business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
