const Problem = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight leading-tight mb-8">
            Stop wasting <span className="underline decoration-orange decoration-4">GPUs</span> on failed training runs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-3xl font-light mb-4">$2,847</div>
              <div className="text-lg font-medium mb-2">Average monthly waste per team</div>
              <p className="text-muted-foreground">
                Failed training runs burn through GPU budgets with misconfigured resource estimates.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-8">
              <div className="text-3xl font-light mb-4">3.2 weeks</div>
              <div className="text-lg font-medium mb-2">Average deployment delay</div>
              <p className="text-muted-foreground">
                Resource misconfiguration delays model deployment and time to market.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-8">
              <div className="text-3xl font-light mb-4">68%</div>
              <div className="text-lg font-medium mb-2">Training runs fail on first attempt</div>
              <p className="text-muted-foreground">
                Engineers struggle to estimate optimal GPU types and memory requirements.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-8">
              <div className="text-3xl font-light mb-4">32 hours</div>
              <div className="text-lg font-medium mb-2">Monthly time spent on estimations</div>
              <p className="text-muted-foreground">
                Teams spend hours manually calculating instead of building models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;