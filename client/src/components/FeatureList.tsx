import { Card, CardContent } from "@/components/ui/card";
import { FileText, Sparkles, Github, Linkedin, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Smart File Analysis",
    description: "Automatically extracts project names, keywords, and summaries from your files",
  },
  {
    icon: Sparkles,
    title: "NLP Processing",
    description: "Uses natural language processing to understand your project content",
  },
  {
    icon: Github,
    title: "GitHub Integration",
    description: "Generates repository names and professional README.md files",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Posts",
    description: "Creates engaging posts with relevant hashtags for your network",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process and generate content in seconds, not hours",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your files are processed securely with environment-based token management",
  },
];

export function FeatureList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <Card key={index} className="hover-elevate">
            <CardContent className="pt-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
