import { useEffect, useRef } from 'react';

const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (y - 0.5) * 10;
      const rotateY = (x - 0.5) * 10;

      const elements = container.querySelectorAll('.hero-3d-element');
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        const depth = (index + 1) * 0.5;
        element.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX * depth}deg) 
          rotateY(${rotateY * depth}deg)
          translateZ(${depth * 20}px)
        `;
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="hero-3d-element mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-4 animate-fade-in">
            Naga Arundhathi Jampala
            <span className="block text-3xl md:text-4xl font-medium text-muted-foreground mt-2">
              Full Stack Developer | AI Builder | DevOps Learner
            </span>
          </h1>
        </div>

        <div className="hero-3d-element mb-8" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
            Turning ideas into intelligent, scalable, and aesthetic tech solutions — from web to AI to infrastructure.
          </p>
        </div>

        <div className="hero-3d-element animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button 
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 card-hover transform hover:scale-105"
            data-cursor-hover
          >
            View My Portfolio
          </button>
        </div>
      </div>

      {/* 3D floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 hero-3d-element">
        <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-3xl animate-float opacity-20 blur-sm"></div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 hero-3d-element">
        <div className="w-full h-full bg-gradient-to-br from-accent to-primary rounded-full animate-float opacity-30 blur-sm" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Hero3D;
