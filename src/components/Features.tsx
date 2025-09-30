import { Link2, Layers, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Link2,
      title: "URL Shortener",
      description: "Shorten long URLs and organize them into categories like Facebook, Instagram, YouTube, and more."
    },
    {
      icon: Layers,
      title: "Category Management",
      description: "Keep your links organized with intuitive category sorting and custom grouping options."
    },
    {
      icon: Shield,
      title: "Secure Storage",
      description: "All your data is securely stored and managed with enterprise-grade security."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate and access your QR codes instantly with our optimized infrastructure."
    }
  ];

  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create, manage, and share your QR codes effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="glass-card p-6 hover:bg-secondary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
