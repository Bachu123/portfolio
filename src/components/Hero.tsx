import Spline from '@splinetool/react-spline';
import { Button } from '@/components/ui/button';
import { Suspense, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, BookOpen, Target } from 'lucide-react';
import { FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTensorflow, SiTypescript, SiJavascript } from 'react-icons/si';
import { motion } from 'framer-motion';

// Spline component with loading state
function SplineWithLoading({ scene }: { scene: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-card/10 rounded-2xl z-10 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            <div className="text-primary font-medium animate-pulse">Loading 3D Scene...</div>
          </div>
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-card/10 rounded-2xl z-10">
          <div className="text-destructive">Failed to load 3D scene</div>
        </div>
      )}
      <Spline
        scene={scene}
        className="w-full h-full"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = async () => {
    const resumes = [
      '/Ai engineer Sahil.pdf',
      '/Gen AI Analyst Sahil.pdf'
    ];

    const randomResume = resumes[Math.floor(Math.random() * resumes.length)];
    const fileName = randomResume.split('/').pop() || 'resume.pdf';

    try {
      const response = await fetch(randomResume);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      const link = document.createElement('a');
      link.href = randomResume;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const stats = [
    {
      value: 'BCA',
      label: 'GRADUATE',
      sublabel: '2024',
      icon: GraduationCap
    },
    {
      value: '10+',
      label: 'PROJECTS',
      sublabel: 'COMPLETED',
      icon: BookOpen
    },
    {
      value: 'AI/ML',
      label: 'FOCUS',
      sublabel: 'AREA',
      icon: Target
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/notiamsam',
      color: 'hover:text-purple-400 hover:border-purple-400/50 hover:bg-purple-400/10'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sahil-sundriyal-904b6b233/',
      color: 'hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10'
    },
    {
      icon: Mail,
      href: 'mailto:sahilsundriyal2004@gmail.com',
      color: 'hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-400/10'
    }
  ];

  const techIcons = [
    { icon: FaPython, color: 'text-yellow-500' },
    { icon: SiTensorflow, color: 'text-orange-500' },
    { icon: FaReact, color: 'text-blue-400' },
    { icon: SiTypescript, color: 'text-blue-600' },
    { icon: FaNodeJs, color: 'text-green-500' },
    { icon: SiJavascript, color: 'text-yellow-400' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background selection:bg-primary/30">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="section-container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div variants={itemVariants} className="inline-block">
                <div className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4 inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Available for work
                </div>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold tracking-tight font-heading">
                <span className="text-gradient">Sahil</span>
                <br />
                <span className="text-foreground">Sundriyal</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-2xl lg:text-3xl font-medium text-foreground/80">
                  Aspiring <span className="text-primary font-bold">Gen-AI Engineer</span>
                </p>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Fresh graduate passionate about building intelligent systems with AI/ML and modern web technologies.
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="glass-effect p-4 rounded-2xl hover:bg-white/5 transition-colors border border-white/5">
                    <div className="flex flex-col gap-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-2xl font-bold text-foreground font-heading">{stat.value}</div>
                        <div className="text-xs text-muted-foreground font-medium tracking-wide">
                          {stat.label} {stat.sublabel}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Tech Icons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {techIcons.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center border border-white/5 cursor-pointer"
                  >
                    <Icon className={`w-6 h-6 ${tech.color}`} />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`w-12 h-12 glass-effect rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/50 text-foreground transition-all duration-300"
                onClick={handleResumeDownload}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: 3D Scene - Spline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[500px] lg:h-[700px] w-full relative perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-[100px] opacity-50 animate-pulse" />
            <div className="w-full h-full relative z-10">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-primary animate-pulse">Loading 3D Scene...</div>
                </div>
              }>
                <SplineWithLoading
                  scene="https://prod.spline.design/trZahTJpIkVlhi17/scene.splinecode"
                />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}