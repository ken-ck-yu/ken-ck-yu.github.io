import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ToolPreview = () => {
  return (
    <section id="preview" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Tool Preview
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What we're
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}building{" "}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive ML training cost analysis tool with intelligent optimization recommendations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-6 bg-card border border-border/50 shadow-2xl">
            <img 
              src="/lovable-uploads/4d976a64-b7b4-44b6-ac21-f33813f84c42.png"
              alt="Teemo-Ops Tool Interface"
              className="w-full rounded-lg shadow-lg"
            />
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Current development progress: Interface design, cost estimation algorithms, and cloud provider integrations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolPreview;