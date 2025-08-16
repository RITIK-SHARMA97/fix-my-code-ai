import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Info, XCircle, Play, BookOpen, Code2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CodeAnalyzer = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("java");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const mockAnalysis = {
    errors: [
      {
        line: 12,
        issue: "Potential NullPointerException",
        explanation: "The variable 'user' might be null when accessing its properties. This is a common runtime error that can crash your application.",
        fix: "Add null check: if (user != null) { ... }",
        severity: "high"
      },
      {
        line: 8,
        issue: "Resource leak",
        explanation: "File stream is not properly closed. This can lead to memory leaks and file system issues.",
        fix: "Use try-with-resources: try (FileReader fr = new FileReader(file)) { ... }",
        severity: "medium"
      }
    ],
    improvements: [
      {
        tip: "Use meaningful variable names",
        example: "Change 'data' to 'userProfiles' for better readability",
        category: "readability"
      },
      {
        tip: "Extract method for complex logic",
        example: "The validation logic in lines 15-25 should be extracted to a separate method",
        category: "structure"
      }
    ],
    resources: [
      "Java NullPointerException Best Practices",
      "Resource Management in Java",
      "Clean Code Principles"
    ]
  };

  const handleAnalyze = async () => {
    if (!code.trim()) {
      toast({
        title: "No code provided",
        description: "Please paste your code to analyze.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      setResults(mockAnalysis);
      setIsAnalyzing(false);
      toast({
        title: "Analysis complete!",
        description: `Found ${mockAnalysis.errors.length} issues and ${mockAnalysis.improvements.length} improvements.`,
      });
    }, 2000);
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <XCircle className="w-4 h-4 text-error" />;
      case 'medium': return <AlertTriangle className="w-4 h-4 text-warning" />;
      default: return <Info className="w-4 h-4 text-info" />;
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Analyze Your Code
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Paste your code below and let our AI identify issues, suggest improvements, and help you learn better coding practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code Input */}
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Code Input</h3>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="cpp">C++</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Textarea
                placeholder="Paste your code here..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="min-h-[300px] font-mono text-sm bg-code-bg border-border/50 resize-none"
              />
              
              <Button 
                onClick={handleAnalyze} 
                disabled={isAnalyzing}
                className="w-full bg-gradient-primary hover:opacity-90"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 w-4 h-4" />
                    Analyze Code
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Results */}
          <Card className="p-6 bg-gradient-card border-border/50">
            <h3 className="text-lg font-semibold mb-4">Analysis Results</h3>
            
            {!results ? (
              <div className="flex items-center justify-center h-[300px] text-muted-foreground">
                <div className="text-center">
                  <Code2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Run analysis to see results</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 max-h-[400px] overflow-y-auto">
                {/* Errors */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-error" />
                    Issues Found ({results.errors.length})
                  </h4>
                  <div className="space-y-3">
                    {results.errors.map((error: any, index: number) => (
                      <div key={index} className="p-3 bg-error/10 border border-error/20 rounded-lg">
                        <div className="flex items-start gap-2 mb-2">
                          {getSeverityIcon(error.severity)}
                          <div className="flex-1">
                            <p className="font-medium text-sm">Line {error.line}: {error.issue}</p>
                            <Badge variant="secondary" className="mt-1 text-xs">{error.severity}</Badge>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{error.explanation}</p>
                        <p className="text-sm bg-background/50 p-2 rounded font-mono">{error.fix}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Improvements */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Improvements ({results.improvements.length})
                  </h4>
                  <div className="space-y-3">
                    {results.improvements.map((improvement: any, index: number) => (
                      <div key={index} className="p-3 bg-success/10 border border-success/20 rounded-lg">
                        <p className="font-medium text-sm mb-2">{improvement.tip}</p>
                        <p className="text-sm text-muted-foreground mb-2">{improvement.example}</p>
                        <Badge variant="outline" className="text-xs">{improvement.category}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-info" />
                    Learning Resources
                  </h4>
                  <div className="space-y-2">
                    {results.resources.map((resource: string, index: number) => (
                      <div key={index} className="p-2 bg-info/10 border border-info/20 rounded text-sm">
                        {resource}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeAnalyzer;