import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Sparkles, ArrowRight } from "lucide-react";
import simpleModeIcon from "@/assets/simple-mode-icon.jpg";
import aiModeIcon from "@/assets/ai-mode-icon.jpg";

const GeneratorModes = () => {
  const modes = [
    {
      title: "Simple Mode",
      description: "Quick and easy QR code generation with customizable colors, logos, and styles.",
      icon: Palette,
      image: simpleModeIcon,
      features: [
        "Custom color palettes",
        "Logo embedding",
        "Multiple formats",
        "Instant generation"
      ],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "AI-Powered Mode",
      description: "Revolutionary AI-enhanced QR codes with dynamic image processing and creative designs.",
      icon: Sparkles,
      image: aiModeIcon,
      features: [
        "AI image enhancement",
        "Dynamic designs",
        "Creative patterns",
        "Gemini-powered"
      ],
      gradient: "from-accent/20 to-accent/5",
      badge: "Coming Soon"
    }
  ];

  return (
    <section id="generator" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Generation Mode</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you need quick customization or AI-powered creativity, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modes.map((mode) => (
            <Card 
              key={mode.title} 
              className="glass-card border-border/50 hover:border-primary/50 transition-all group overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${mode.gradient}`} />
              
              {mode.badge && (
                <div className="absolute top-6 right-6 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30">
                    {mode.badge}
                  </span>
                </div>
              )}

              <CardHeader>
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={mode.image} 
                    alt={mode.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <mode.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{mode.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {mode.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {mode.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full group-hover:shadow-glow transition-all"
                  variant={mode.badge ? "outline" : "default"}
                  disabled={!!mode.badge}
                >
                  {mode.badge ? "Coming Soon" : "Get Started"}
                  {!mode.badge && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeneratorModes;
