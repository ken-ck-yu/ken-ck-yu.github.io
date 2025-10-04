import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">TEEMO-OPS</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#integrations" className="text-muted-foreground hover:text-foreground transition-colors">
            Integrations
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact Us
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <ThemeToggle />
          {/* <Button variant="ghost" className="text-sm">Sign In</Button> */}
          <Button variant="orange" className="text-sm font-medium">Try Teemo-Ops</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;