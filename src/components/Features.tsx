import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileCode, 
  BarChart3, 
  Zap, 
  Cloud, 
  GitBranch, 
  Settings,
  DollarSign,
  Leaf,
  Shield
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FileCode className="w-8 h-8" />,
      title: "Script Analysis",
      description: "Upload your Python ML training scripts and get instant analysis of training parameters, model architecture, and resource requirements.",
      badge: "Core Feature"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Estimation",
      description: "Get precise cost estimates for training across AWS, Google Cloud, and Microsoft Azure with real-time pricing data.",
      badge: "Popular"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Resource Planning",
      description: "Understand GPU, CPU, memory, and storage requirements before you start training. Plan your infrastructure needs accurately.",
      badge: "Essential"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimization Recommendations",
      description: "Receive actionable suggestions to reduce training costs and improve efficiency with LoRA parameters, batch sizes, and precision settings.",
      badge: "AI-Powered"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "GitHub Integration",
      description: "Seamlessly integrate with your development workflow. Get cost impact analysis on pull requests and track changes over time.",
      badge: "DevOps"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environmental Impact",
      description: "Monitor energy consumption and carbon footprint of your ML training jobs. Make environmentally conscious decisions.",
      badge: "Sustainability"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Settings className="w-4 h-4 mr-2" />
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything you need for
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}cost-efficient{" "}
            </span>
            ML training
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From script analysis to optimization recommendations, Teemo-Ops provides comprehensive 
            insights to help you train ML models efficiently and cost-effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {feature.icon}
                </div>
                <Badge variant="secondary" className="text-xs">
                  {feature.badge}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Cloud Providers */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Supported Cloud Providers
          </h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="flex items-center space-x-2">
              <Cloud className="w-8 h-8 text-muted-foreground" />
              <span className="text-lg font-medium text-muted-foreground">AWS</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="w-8 h-8 text-muted-foreground" />
              <span className="text-lg font-medium text-muted-foreground">Google Cloud</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="w-8 h-8 text-muted-foreground" />
              <span className="text-lg font-medium text-muted-foreground">Microsoft Azure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;