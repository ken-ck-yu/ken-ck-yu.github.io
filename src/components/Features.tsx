const Features = () => {
  return (
    <section className="py-20 bg-accent/50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight leading-tight mb-16">
            Precise ML cost estimations and{" "}
            <span className="underline decoration-orange decoration-4">optimizations</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-medium mb-4">Training Time Estimation</h3>
              <p className="text-muted-foreground mb-6">
                Get precise estimates from hours to days based on your model architecture, dataset size, and hardware configuration.
              </p>
              
              {/* <h3 className="text-2xl font-medium mb-4">Multi-Cloud Cost Analysis</h3>
              <p className="text-muted-foreground mb-6">
                Compare training costs across AWS, GCP, and Azure to find the most cost-effective option for your workload.
              </p> */}
              
              <h3 className="text-2xl font-medium mb-4">Compute Optimization</h3>
              <p className="text-muted-foreground">
                Receive optimal GPU compute suggestions tailored to your specific training requirements.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium mb-4">Hyperparameter Tuning</h3>
              <p className="text-muted-foreground mb-6">
                Get data-driven hyperparameter recommendations to reduce training time and improve model efficiency.
              </p>
              
              <h3 className="text-2xl font-medium mb-4">Resource Planning</h3>
              <p className="text-muted-foreground mb-6">
                Analyze potential training costs before provisioning expensive resources.
              </p>
              
              {/* <h3 className="text-2xl font-medium mb-4">Energy Efficiency</h3>
              <p className="text-muted-foreground">
                Calculate energy consumption and carbon footprint to make environmentally conscious training decisions.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;