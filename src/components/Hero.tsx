import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';

function DeskScene() {
  return (
    <group>
      {/* Desk */}
      <mesh position={[0, -0.5, 0]} castShadow>
        <boxGeometry args={[3, 0.1, 1.5]} />
        <meshStandardMaterial color="#8B7355" />
      </mesh>
      
      {/* Laptop base */}
      <mesh position={[0, -0.4, 0.2]} castShadow>
        <boxGeometry args={[1.2, 0.05, 0.9]} />
        <meshStandardMaterial color="#2d3748" />
      </mesh>
      
      {/* Laptop screen */}
      <mesh position={[0, 0.1, -0.25]} rotation={[-0.2, 0, 0]} castShadow>
        <boxGeometry args={[1.2, 0.8, 0.05]} />
        <meshStandardMaterial color="#1a202c" />
      </mesh>
      
      {/* Screen glow */}
      <mesh position={[0, 0.1, -0.22]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[1.1, 0.7, 0.01]} />
        <meshStandardMaterial 
          color="#14B8A6" 
          emissive="#14B8A6" 
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Coffee mug */}
      <mesh position={[0.8, -0.2, 0.3]} castShadow>
        <cylinderGeometry args={[0.1, 0.12, 0.25, 16]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      
      {/* Plant pot */}
      <mesh position={[-0.9, -0.3, 0.2]} castShadow>
        <cylinderGeometry args={[0.15, 0.12, 0.2, 16]} />
        <meshStandardMaterial color="#c97b63" />
      </mesh>
      
      {/* Plant leaves */}
      {[0, 1, 2].map((i) => (
        <mesh 
          key={i}
          position={[-0.9, -0.1, 0.2]} 
          rotation={[0, (Math.PI * 2 / 3) * i, 0.3]}
          castShadow
        >
          <boxGeometry args={[0.05, 0.4, 0.15]} />
          <meshStandardMaterial color="#2d5016" />
        </mesh>
      ))}
      
      {/* Ambient light */}
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 3, 2]} intensity={1} castShadow />
      <pointLight position={[-2, 2, 1]} intensity={0.5} color="#14B8A6" />
    </group>
  );
}

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="section-container py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Sahil Sundriyal
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                BCA Student & Web Developer
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                Building web experiences with{' '}
                <span className="text-gradient font-semibold">Python</span>,{' '}
                <span className="text-gradient font-semibold">JavaScript</span> & 
                data-driven insights.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-base"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </div>
          
          {/* Right: 3D Scene */}
          <div className="h-[400px] lg:h-[600px] w-full animate-fade-in">
            <Canvas shadows>
              <Suspense fallback={null}>
                <PerspectiveCamera makeDefault position={[2, 1, 4]} />
                <OrbitControls 
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 2}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
                <Environment preset="sunset" />
                <DeskScene />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
