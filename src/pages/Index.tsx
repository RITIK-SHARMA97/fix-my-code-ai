import HeroSection from "@/components/HeroSection";
import CodeAnalyzer from "@/components/CodeAnalyzer";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CodeAnalyzer />
      <FeaturesSection />
    </div>
  );
};

export default Index;