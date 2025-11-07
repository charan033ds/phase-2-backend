import { useState } from "react";
import { FileUploadZone } from "@/components/FileUploadZone";
import { ProcessingStatus } from "@/components/ProcessingStatus";
import { GeneratedContent } from "@/components/GeneratedContent";
import { FeatureList } from "@/components/FeatureList";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type UploadState = "idle" | "uploading" | "processing" | "completed";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const steps = [
    {
      label: "Uploading file",
      status:
        uploadState === "idle"
          ? ("pending" as const)
          : uploadState === "uploading"
          ? ("processing" as const)
          : ("completed" as const),
    },
    {
      label: "Extracting content",
      status:
        uploadState === "processing" && progress > 20
          ? progress < 40
            ? ("processing" as const)
            : ("completed" as const)
          : ("pending" as const),
    },
    {
      label: "Analyzing with NLP",
      status:
        uploadState === "processing" && progress >= 40
          ? progress < 60
            ? ("processing" as const)
            : ("completed" as const)
          : ("pending" as const),
    },
    {
      label: "Generating GitHub content",
      status:
        uploadState === "processing" && progress >= 60
          ? progress < 80
            ? ("processing" as const)
            : ("completed" as const)
          : ("pending" as const),
    },
    {
      label: "Creating LinkedIn post",
      status:
        uploadState === "processing" && progress >= 80
          ? progress < 100
            ? ("processing" as const)
            : ("completed" as const)
          : ("pending" as const),
    },
  ];

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploadState("uploading");
    setProgress(10);

    await new Promise((resolve) => setTimeout(resolve, 500));
    setUploadState("processing");

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadState("completed");
          toast({
            title: "Processing Complete!",
            description: "Your content has been generated successfully.",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setUploadState("idle");
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold">
            Share Your Projects Effortlessly
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your project files and let AI generate professional GitHub
            repositories and engaging LinkedIn posts automatically.
          </p>
        </div>

        <Tabs defaultValue="upload" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upload" data-testid="tab-upload">
              Upload Project
            </TabsTrigger>
            <TabsTrigger value="features" data-testid="tab-features">
              Features
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6">
            <FileUploadZone
              onFileSelect={setSelectedFile}
              selectedFile={selectedFile}
              onClearFile={() => setSelectedFile(null)}
              isUploading={uploadState !== "idle"}
            />

            {selectedFile && uploadState === "idle" && (
              <div className="flex justify-center">
                <Button
                  size="lg"
                  onClick={handleUpload}
                  data-testid="button-upload"
                >
                  <Upload className="h-5 w-5 mr-2" />
                  Process & Generate
                </Button>
              </div>
            )}

            {(uploadState === "uploading" || uploadState === "processing") && (
              <ProcessingStatus steps={steps} currentProgress={progress} />
            )}

            {uploadState === "completed" && (
              <div className="space-y-6">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">
                          Content Generated Successfully!
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Your GitHub repository details and LinkedIn post are
                          ready below.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        onClick={handleReset}
                        data-testid="button-reset"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        New Upload
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <GeneratedContent
                  repoName="machine-learning-sentiment-analysis"
                  readme={`# Machine Learning Sentiment Analysis

A sophisticated machine learning project for analyzing sentiment in text data using natural language processing techniques.

## Features

- Text preprocessing and tokenization
- Sentiment classification using ML models
- Visual analytics dashboard
- Real-time prediction API

## Installation

\`\`\`bash
pip install -r requirements.txt
\`\`\`

## Usage

\`\`\`python
from sentiment_analyzer import SentimentAnalyzer

analyzer = SentimentAnalyzer()
result = analyzer.predict("This is amazing!")
print(result)
\`\`\`

## License

MIT License`}
                  linkedinPost={`Excited to share my latest project! 🚀

I've built a machine learning sentiment analysis tool that classifies text emotions with high accuracy. This project combines NLP techniques with modern ML frameworks to deliver real-time sentiment predictions.

Key highlights:
✅ Advanced text preprocessing
✅ Multiple ML model support
✅ Interactive analytics dashboard
✅ REST API for easy integration

Would love to hear your thoughts and feedback!`}
                  keywords={[
                    "MachineLearning",
                    "NLP",
                    "SentimentAnalysis",
                    "Python",
                    "DataScience",
                  ]}
                />
              </div>
            )}
          </TabsContent>

          <TabsContent value="features">
            <FeatureList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
