import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-bg.jpg";
import { ArrowRight, Zap, DollarSign, Clock, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm">
            <Zap className="w-4 h-4 mr-2" />
            In Development
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Intelligent ML
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}Training Cost{" "}
            </span>
            Estimation
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We're building a tool to analyze Python ML training scripts and provide precise cost estimates, 
            resource requirements, and optimization recommendations across major cloud providers.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => document.getElementById('preview')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Preview <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://github.com/ken-ck-yu/Teemo-Ops', '_blank')}
            >
              View on GitHub
            </Button>
          </div>
          
          {/* Development Status */}
          <div className="text-center">
            <p className="text-muted-foreground text-lg mb-8">
              🚧 Currently in development - Follow our progress on GitHub
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;