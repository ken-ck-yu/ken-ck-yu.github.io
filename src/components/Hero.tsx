import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-tight mb-8">
            ML training cost prediction that puts{" "}
            <span className="underline decoration-orange decoration-4">precision</span>{" "}
            at the frontier
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                VS Code Extension
              </div>
              <h3 className="text-xl font-medium mb-4">Eliminate Training Guesswork</h3>
              <p className="text-muted-foreground mb-6">
                Predict training time, costs, and resource requirements while you code.
              </p>
              <Button variant="hero" className="w-full">
                Start Analysis
              </Button>
            </div>
            
            <div className="bg-card border rounded-lg p-8">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                Github Integration + API (Coming Soon)
              </div>
              <h3 className="text-xl font-medium mb-4">Build with Teemo</h3>
              <p className="text-muted-foreground mb-6">
                Integrate cost prediction into your ML workflow with our Github Integration and SDK.
              </p>
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract illustration placeholder */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-96 h-96 opacity-20">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="60" fill="hsl(var(--orange))" />
            <circle cx="120" cy="150" r="30" fill="hsl(var(--orange))" />
            <circle cx="280" cy="180" r="25" fill="hsl(var(--orange))" />
            <circle cx="150" cy="280" r="20" fill="hsl(var(--orange))" />
            <circle cx="320" cy="300" r="35" fill="hsl(var(--orange))" />
            <path d="M 200 200 L 120 150" stroke="hsl(var(--orange))" strokeWidth="3" />
            <path d="M 200 200 L 280 180" stroke="hsl(var(--orange))" strokeWidth="3" />
            <path d="M 200 200 L 150 280" stroke="hsl(var(--orange))" strokeWidth="3" />
            <path d="M 200 200 L 320 300" stroke="hsl(var(--orange))" strokeWidth="3" />
            <path d="M 120 150 L 280 180" stroke="hsl(var(--orange))" strokeWidth="2" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;