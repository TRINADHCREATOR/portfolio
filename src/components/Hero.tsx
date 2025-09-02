import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-pulse-slow"></div>
      
      {/* Floating background orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-bounce-gentle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }}></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-slide-up">
                <span className="inline-block animate-fade-in">Welcome to My</span>
                <span className="bg-gradient-primary bg-clip-text text-transparent block animate-slide-up-delay">
                  Professional Space
                </span>
              </h1>
              <div className="space-y-2 animate-slide-up-delay">
                <h2 className="text-2xl lg:text-3xl font-semibold text-primary animate-scale-in">
                  Trinadh Suroju
                </h2>
                <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                  Cybersecurity Enthusiast | Developer | BTech Student
                </p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
              Passionate about building secure, innovative solutions in web development 
              and cybersecurity. Currently pursuing my Bachelor's in Technology while 
              crafting exceptional digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-scale-in-delay">
              <Button 
                variant="hero" 
                size="lg" 
                className="group hover:scale-105 transition-all duration-300 hover:shadow-elegant"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="hero-secondary" 
                size="lg"
                className="hover:scale-105 transition-all duration-300"
                onClick={() => document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Read My Blog
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                className="hover:scale-105 transition-all duration-300 group"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-4 w-4 group-hover:bounce-gentle" />
                Let's Connect
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
            <div className="relative group">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-glow group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Floating ring effects */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse-slow"></div>
              <div className="absolute inset-0 rounded-full border border-secondary/20 animate-bounce-gentle" style={{ animationDelay: "1s" }}></div>
              
              <img
                src={profilePhoto}
                alt="Trinadh Suroju - Professional Profile"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-primary/20 shadow-elegant hover:scale-110 hover:rotate-2 transition-all duration-500 hover:shadow-[0_20px_50px_-10px_hsl(var(--primary)/0.5)]"
              />
              
              {/* Floating particles */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-primary/30 rounded-full animate-bounce-gentle" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;