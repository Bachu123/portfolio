import Spline from '@splinetool/react-spline';
import { Button } from '@/components/ui/button';
import { Suspense, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, BookOpen, Target } from 'lucide-react';
import { FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTensorflow, SiTypescript, SiJavascript } from 'react-icons/si';

// Component to load and display your Blender model
function LaptopModel() {
  // IMPORTANT: Replace 'asus-laptop.glb' with your exported model filename
  // The model should be in the public folder
  const { scene } = useGLTF('/asus-laptop.glb');
  
  return (
    <group>
      {/* Purple bubble/sphere */}
      <Sphere args={[2.5, 64, 64]}>
        <meshPhysicalMaterial
          color="#7c3aed"
          transparent
          opacity={0.15}
          roughness={0.2}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </Sphere>
      
      {/* Your Blender model */}
      <primitive 
        object={scene} 
        scale={0.8} 
        position={[0, -0.5, 0]}
        rotation={[0, Math.PI * 0.25, 0]}
      />
      
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 3, 2]} intensity={0.8} color="#b266ff" castShadow />
      <pointLight position={[-2, 2, 1]} intensity={0.6} color="#e879f9" />
      <spotLight 
        position={[0, 3, 0]} 
        intensity={1} 
        color="#b266ff" 
        angle={0.6} 
        penumbra={0.5}
        castShadow
      />
    </group>
  );
}

// Current desk scene (comment this out when using Blender model)
function DeskInBubble() {
  return (
    <group>
      {/* Purple bubble/sphere */}
      <Sphere args={[2.5, 64, 64]}>
        <meshPhysicalMaterial
          color="#7c3aed"
          transparent
          opacity={0.15}
          roughness={0.2}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </Sphere>
      
      {/* Desk Scene inside */}
      <group scale={0.8}>
        {/* Desk */}
        <mesh position={[0, -0.5, 0]} castShadow>
          <boxGeometry args={[3, 0.1, 1.5]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        
        {/* Laptop base */}
        <mesh position={[0, -0.4, 0.2]} castShadow>
          <boxGeometry args={[1.2, 0.05, 0.9]} />
          <meshStandardMaterial color="#16213e" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Laptop screen */}
        <mesh position={[0, 0.1, -0.25]} rotation={[-0.2, 0, 0]} castShadow>
          <boxGeometry args={[1.2, 0.8, 0.05]} />
          <meshStandardMaterial color="#0f3460" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Screen glow with code */}
        <mesh position={[0, 0.1, -0.22]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[1.1, 0.7, 0.01]} />
          <meshStandardMaterial 
            color="#b266ff" 
            emissive="#b266ff" 
            emissiveIntensity={0.8}
          />
        </mesh>
        
        {/* Coffee mug */}
        <mesh position={[0.8, -0.2, 0.3]} castShadow>
          <cylinderGeometry args={[0.1, 0.12, 0.25, 16]} />
          <meshStandardMaterial color="#2d1b69" metalness={0.4} />
        </mesh>
        
        {/* Books stack */}
        <mesh position={[-0.9, -0.35, 0.2]} castShadow>
          <boxGeometry args={[0.3, 0.3, 0.4]} />
          <meshStandardMaterial color="#533483" />
        </mesh>
        
        {/* Notebook */}
        <mesh position={[-0.5, -0.45, 0.4]} rotation={[0, 0.3, 0]} castShadow>
          <boxGeometry args={[0.4, 0.02, 0.3]} />
          <meshStandardMaterial color="#6b46c1" />
        </mesh>
      </group>
      
      {/* Ambient light */}
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 3, 2]} intensity={0.8} color="#b266ff" castShadow />
      <pointLight position={[-2, 2, 1]} intensity={0.6} color="#e879f9" />
      <spotLight 
        position={[0, 3, 0]} 
        intensity={1} 
        color="#b266ff" 
        angle={0.6} 
        penumbra={0.5}
        castShadow
      />
    </group>
  );
}

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
        <div className="absolute inset-0 flex items-center justify-center bg-card/10 rounded-2xl z-10">
          <div className="text-primary animate-pulse">Loading 3D Scene...</div>
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
    // Array of resume PDFs
    const resumes = [
      '/Ai engineer Sahil.pdf',
      '/Gen AI Analyst Sahil.pdf'
    ];
    
    // Randomly select one resume
    const randomResume = resumes[Math.floor(Math.random() * resumes.length)];
    const fileName = randomResume.split('/').pop() || 'resume.pdf';
    
    try {
      // Fetch the PDF file
      const response = await fetch(randomResume);
      const blob = await response.blob();
      
      // Create a blob URL and trigger download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback to direct link if fetch fails
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
      color: 'hover:text-purple-400'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/sahil-sundriyal-904b6b233/',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Mail, 
      href: 'mailto:sahilsundriyal2004@gmail.com',
      color: 'hover:text-pink-400'
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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-bg">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="section-container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight animate-fade-in-up">
                <span className="text-gradient">Sahil</span>
                <br />
                <span className="text-gradient">Sundriyal</span>
              </h1>
              <div className="space-y-2 animate-fade-in-up delay-200">
                <p className="text-2xl lg:text-3xl font-semibold">
                  Aspiring <span className="text-primary">Gen-AI Engineer</span>
                </p>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                  Fresh graduate passionate about building intelligent systems with AI/ML and modern web technologies
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in-up delay-300">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="stat-card">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                          <br />
                          {stat.sublabel}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tech Icons */}
            <div className="flex gap-4 animate-fade-in-up delay-400">
              {techIcons.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Icon className={`w-6 h-6 ${tech.color}`} />
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in-up delay-500">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 glass-effect rounded-full flex items-center justify-center ${social.color} transition-all hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-600">
              <Button 
                size="lg" 
                className="glass-effect border-primary/50 hover:bg-primary/20 text-primary hover:text-primary-foreground"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button 
                size="lg"
                variant="ghost"
                className="glass-effect"
                onClick={handleResumeDownload}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Resume
              </Button>
            </div>
          </div>
          
          {/* Right: 3D Scene - Spline */}
          <div className="h-[400px] lg:h-[600px] w-full animate-fade-in relative">
            <div className="absolute inset-0 purple-glow rounded-full opacity-50" />
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center bg-card/10 rounded-2xl">
                  <div className="text-primary animate-pulse">Loading 3D Scene...</div>
                </div>
              }>
                <SplineWithLoading 
                  scene="https://prod.spline.design/trZahTJpIkVlhi17/scene.splinecode"
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 glass-effect border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}