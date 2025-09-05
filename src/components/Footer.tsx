import { Button } from "@/components/ui/button";
import teemoIcon from "@/assets/teemo-icon.jpg";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={teemoIcon} alt="Teemo-Ops" className="w-8 h-8 rounded-lg" />
              <div>
                <h3 className="text-lg font-bold text-foreground">Teemo-Ops</h3>
                <p className="text-sm text-muted-foreground">Intelligent ML Training Cost Estimation</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Currently developing an intelligent machine learning training cost estimation tool. 
              Follow our progress and contribute to the project on GitHub.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open('https://github.com/ken-ck-yu/Teemo-Ops', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Development</h4>
            <ul className="space-y-2">
              <li><a href="#preview" className="text-muted-foreground hover:text-foreground transition-colors">Tool Preview</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Planned Features</a></li>
              <li><a href="https://github.com/ken-ck-yu/Teemo-Ops" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Progress Updates</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/ken-ck-yu/Teemo-Ops" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Contribute</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Discussions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Issues</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Teemo-Ops. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;