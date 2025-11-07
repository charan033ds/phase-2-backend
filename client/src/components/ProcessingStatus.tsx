import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, Loader2 } from "lucide-react";

interface Step {
  label: string;
  status: "pending" | "processing" | "completed";
}

interface ProcessingStatusProps {
  steps: Step[];
  currentProgress: number;
}

export function ProcessingStatus({
  steps,
  currentProgress,
}: ProcessingStatusProps) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Processing Your Project</h3>
            <span className="text-sm text-muted-foreground">
              {Math.round(currentProgress)}%
            </span>
          </div>
          <Progress value={currentProgress} data-testid="progress-upload" />
        </div>

        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
              data-testid={`step-${step.status}`}
            >
              {step.status === "completed" ? (
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              ) : step.status === "processing" ? (
                <Loader2 className="h-5 w-5 text-primary animate-spin flex-shrink-0" />
              ) : (
                <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              )}
              <span
                className={
                  step.status === "completed"
                    ? "text-foreground"
                    : step.status === "processing"
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
