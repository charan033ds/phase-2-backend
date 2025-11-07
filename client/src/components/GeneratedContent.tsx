import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check, Github, Linkedin } from "lucide-react";
import { useState } from "react";

interface GeneratedContentProps {
  repoName: string;
  readme: string;
  linkedinPost: string;
  keywords: string[];
}

export function GeneratedContent({
  repoName,
  readme,
  linkedinPost,
  keywords,
}: GeneratedContentProps) {
  const [copiedRepo, setCopiedRepo] = useState(false);
  const [copiedReadme, setCopiedReadme] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);

  const copyToClipboard = async (
    text: string,
    setter: (val: boolean) => void
  ) => {
    await navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <Github className="h-5 w-5" />
            GitHub Repository
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(repoName, setCopiedRepo)}
            data-testid="button-copy-repo"
          >
            {copiedRepo ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </CardHeader>
        <CardContent>
          <p
            className="font-mono text-sm bg-muted p-3 rounded-md"
            data-testid="text-repo-name"
          >
            {repoName}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-4">
          <CardTitle className="text-lg">README.md</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(readme, setCopiedReadme)}
            data-testid="button-copy-readme"
          >
            {copiedReadme ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </CardHeader>
        <CardContent>
          <pre
            className="font-mono text-xs bg-muted p-4 rounded-md overflow-x-auto whitespace-pre-wrap"
            data-testid="text-readme"
          >
            {readme}
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <Linkedin className="h-5 w-5" />
            LinkedIn Post
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(linkedinPost, setCopiedLinkedin)}
            data-testid="button-copy-linkedin"
          >
            {copiedLinkedin ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm whitespace-pre-wrap" data-testid="text-linkedin-post">
              {linkedinPost}
            </p>
            {keywords.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword, i) => (
                  <Badge key={i} variant="secondary">
                    #{keyword}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
