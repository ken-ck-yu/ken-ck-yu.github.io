import { Button } from "@/components/ui/button";
import teemoIcon from "@/assets/teemo-icon.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={teemoIcon} alt="Teemo-Ops" className="w-8 h-8 rounded-lg" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Teemo-Ops</h1>
              <p className="text-xs text-muted-foreground">Intelligent ML Training Cost Estimation</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#preview" className="text-muted-foreground hover:text-foreground transition-colors">
              Preview
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a 
              href="https://github.com/ken-ck-yu/Teemo-Ops" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.open('https://github.com/ken-ck-yu/Teemo-Ops', '_blank')}
            >
              Follow Progress
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;