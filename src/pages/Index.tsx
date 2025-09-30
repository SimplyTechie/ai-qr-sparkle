import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GeneratorModes from "@/components/GeneratorModes";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <GeneratorModes />
      <Features />
    </div>
  );
};

export default Index;
