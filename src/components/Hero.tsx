import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    'Software Engineer',
    'Web Developer', 
    'Problem Solver',
    'Tech Innovator'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        
        if (currentText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, phrases]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-poppins text-foreground mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-project-hover bg-clip-text text-transparent">
              [Your Name]
            </span>
          </h1>

          {/* Typing animation subheading */}
          <div className="text-2xl md:text-4xl font-medium font-poppins text-muted-foreground mb-8 h-16 flex items-center justify-center">
            <span className="border-r-2 border-primary animate-pulse pr-2">
              {currentText}
            </span>
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-poppins">
            [Your one-line professional summary, e.g., "Third-year Computer Science student passionate about building scalable web applications and innovative tech solutions."]
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-hero hover:shadow-glow text-lg font-poppins font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 animate-glow"
          >
            View My Projects
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;