import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Code Analysis</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Fix My Code AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Intelligent code analysis that detects bugs, suggests improvements, and provides 
            <span className="text-foreground font-medium"> personalized learning guidance</span> for developers of all levels.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-card/50 border border-border/50 rounded-xl backdrop-blur-sm">
              <Code2 className="w-8 h-8 text-error mb-3" />
              <h3 className="font-semibold mb-2">Bug Detection</h3>
              <p className="text-sm text-muted-foreground">Instantly identify syntax errors and logical issues</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card/50 border border-border/50 rounded-xl backdrop-blur-sm">
              <Zap className="w-8 h-8 text-warning mb-3" />
              <h3 className="font-semibold mb-2">Smart Suggestions</h3>
              <p className="text-sm text-muted-foreground">Get AI-powered improvement recommendations</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card/50 border border-border/50 rounded-xl backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-success mb-3" />
              <h3 className="font-semibold mb-2">Learn & Improve</h3>
              <p className="text-sm text-muted-foreground">Understand concepts with personalized explanations</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-primary">
              Start Analyzing Code
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-border/50 bg-background/50 backdrop-blur-sm">
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;