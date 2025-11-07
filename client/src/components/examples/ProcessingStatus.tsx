import { ProcessingStatus } from "../ProcessingStatus";

export default function ProcessingStatusExample() {
  const steps = [
    { label: "Uploading file", status: "completed" as const },
    { label: "Extracting content", status: "processing" as const },
    { label: "Analyzing with NLP", status: "pending" as const },
    { label: "Generating GitHub content", status: "pending" as const },
    { label: "Creating LinkedIn post", status: "pending" as const },
  ];

  return (
    <div className="p-8 max-w-xl">
      <ProcessingStatus steps={steps} currentProgress={35} />
    </div>
  );
}
