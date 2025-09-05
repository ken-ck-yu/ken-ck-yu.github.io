import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Building } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      icon: <Zap className="w-6 h-6" />,
      price: "$0",
      period: "/month",
      description: "Perfect for individual developers and small projects",
      features: [
        "5 script analyses per month",
        "Basic cost estimation",
        "AWS, GCP, Azure pricing",
        "Community support",
        "Basic optimization tips"
      ],
      cta: "Get Started Free",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      icon: <Crown className="w-6 h-6" />,
      price: "$29",
      period: "/month",
      description: "For serious ML engineers and small teams",
      features: [
        "Unlimited script analyses",
        "Advanced cost optimization",
        "GitHub integration",
        "Priority support",
        "Environmental impact tracking",
        "Historical cost tracking",
        "Custom optimization rules"
      ],
      cta: "Start Pro Trial",
      variant: "hero" as const,
      popular: true
    },
    {
      name: "Enterprise",
      icon: <Building className="w-6 h-6" />,
      price: "Custom",
      period: "",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Pro",
        "On-premise deployment",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees",
        "Advanced analytics",
        "Team management",
        "Custom billing"
      ],
      cta: "Contact Sales",
      variant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Crown className="w-4 h-4 mr-2" />
            Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, transparent
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}pricing{" "}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your ML training workflow. 
            All plans include our core cost estimation features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-primary shadow-lg ring-2 ring-primary/20' 
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <Badge 
                  variant="default" 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground"
                >
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-lg ${plan.popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.variant} 
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required. 
            <a href="#" className="text-primary hover:underline ml-1">
              View detailed feature comparison →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;