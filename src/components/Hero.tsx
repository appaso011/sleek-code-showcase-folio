import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-glow ring-4 ring-primary/20"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Alex Johnson</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
            Full-Stack Software Developer
          </h2>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            I craft digital experiences through clean code and innovative solutions. 
            Passionate about creating scalable applications that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="hero-gradient hover:shadow-glow transition-all duration-300"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 hover:bg-primary/5 transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;