import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToGenerator = () => {
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">AI-Powered QR Code Generation</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Create Stunning
          <br />
          <span className="gradient-text">QR Codes</span> in Seconds
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in delay-200">
          Transform your links into beautiful, customizable QR codes with our simple interface 
          or unleash AI-powered creativity for truly unique designs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
          <Button 
            size="lg" 
            className="gradient-primary text-lg px-8 hover:shadow-glow transition-all"
            onClick={scrollToGenerator}
          >
            <Zap className="w-5 h-5 mr-2" />
            Start Creating
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 glass-card hover:bg-secondary"
            onClick={scrollToGenerator}
          >
            View Features
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in delay-500">
          {[
            { label: "QR Codes Generated", value: "10K+" },
            { label: "Active Users", value: "2.5K+" },
            { label: "Satisfaction Rate", value: "99%" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
