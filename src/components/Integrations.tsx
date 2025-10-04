const Integrations = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight leading-tight mb-16">
            Seamless integration with your{" "}
            <span className="underline decoration-orange decoration-4">workflow</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                IDE
              </div>
              <h3 className="text-xl font-medium mb-4">VS Code Extension</h3>
              <p className="text-muted-foreground mb-6">
                Real-time cost estimates directly in your development environment.
              </p>
              <div className="text-sm text-muted-foreground">
                Available now
              </div>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                GITHUB
              </div>
              <h3 className="text-xl font-medium mb-4">Pull Request Integration</h3>
              <p className="text-muted-foreground mb-6">
                Automatic cost analysis on every PR with detailed reports and recommendations.
              </p>
              <div className="text-sm text-muted-foreground">
                Contact Us
              </div>
            </div>
            
            
            
            <div className="bg-card border rounded-lg p-8">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                UI
              </div>
              <h3 className="text-xl font-medium mb-4">Web Dashboard</h3>
              <p className="text-muted-foreground mb-6">
                Centralized platform to manage projects, view analytics, and optimize costs.
              </p>
              <div className="text-sm text-muted-foreground">
                Contact Us
              </div>
            </div>
            
            <div className="bg-card border rounded-lg p-8">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                PYTHON
              </div>
              <h3 className="text-xl font-medium mb-4">SDK</h3>
              <p className="text-muted-foreground mb-6">
                Native Python integration with CLI tools and Jupyter notebook support.
              </p>
              <div className="text-sm text-muted-foreground">
                Coming soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;