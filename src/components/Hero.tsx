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
            ML Training Cost Optimization
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
            Analyze your Python ML training scripts and get precise cost estimates, 
            resource requirements, and optimization recommendations across major cloud providers.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Try Demo <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              View Documentation
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <Card className="p-4 bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="w-6 h-6 text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground">70%</div>
              <div className="text-sm text-muted-foreground">Cost Savings</div>
            </Card>
            
            <Card className="p-4 bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">5min</div>
              <div className="text-sm text-muted-foreground">Analysis Time</div>
            </Card>
            
            <Card className="p-4 bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="flex items-center justify-center mb-2">
                <Cpu className="w-6 h-6 text-warning" />
              </div>
              <div className="text-2xl font-bold text-foreground">3</div>
              <div className="text-sm text-muted-foreground">Cloud Providers</div>
            </Card>
            
            <Card className="p-4 bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-primary-glow" />
              </div>
              <div className="text-2xl font-bold text-foreground">Auto</div>
              <div className="text-sm text-muted-foreground">Optimization</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;