import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Users, Zap, Target, BookOpen } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your code for bugs, security vulnerabilities, and performance issues.",
      badge: "Core"
    },
    {
      icon: <Code className="w-8 h-8 text-success" />,
      title: "Multi-Language Support",
      description: "Support for Java, Python, JavaScript, C++, and more programming languages with specialized analysis rules.",
      badge: "Popular"
    },
    {
      icon: <Target className="w-8 h-8 text-warning" />,
      title: "Smart Suggestions",
      description: "Get contextual improvement suggestions with before/after code examples and detailed explanations.",
      badge: "Smart"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-info" />,
      title: "Learning Resources",
      description: "Personalized learning paths with curated resources, tutorials, and best practice guidelines.",
      badge: "Learn"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Team Collaboration",
      description: "Share analysis results with your team and track code quality improvements over time.",
      badge: "Team"
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-400" />,
      title: "Real-time Feedback",
      description: "Get instant feedback as you code with our IDE integrations and live analysis features.",
      badge: "Fast"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for Better Code
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our comprehensive platform provides intelligent analysis, personalized learning, and continuous improvement for developers at every level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-border/50 hover:border-border transition-all duration-300 group hover:shadow-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-secondary/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <Badge variant="secondary" className="text-xs">
                  {feature.badge}
                </Badge>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;