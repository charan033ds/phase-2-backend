import { Upload, FileCode, FileArchive, X } from "lucide-react";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FileUploadZoneProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  onClearFile: () => void;
  isUploading?: boolean;
}

export function FileUploadZone({
  onFileSelect,
  selectedFile,
  onClearFile,
  isUploading = false,
}: FileUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      const validFile = files.find(
        (file) =>
          file.name.endsWith(".zip") || file.name.endsWith(".ipynb")
      );

      if (validFile) {
        onFileSelect(validFile);
      }
    },
    [onFileSelect]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <div className="w-full">
      {!selectedFile ? (
        <Card
          className={`relative border-2 border-dashed transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-border hover-elevate"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">
              Drop your project file here
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              or click to browse
            </p>
            <div className="flex gap-2 mb-4">
              <Badge variant="secondary">
                <FileArchive className="h-3 w-3 mr-1" />
                ZIP files
              </Badge>
              <Badge variant="secondary">
                <FileCode className="h-3 w-3 mr-1" />
                Jupyter notebooks
              </Badge>
            </div>
            <input
              type="file"
              accept=".zip,.ipynb"
              onChange={handleFileInput}
              className="absolute inset-0 cursor-pointer opacity-0"
              disabled={isUploading}
              data-testid="input-file"
            />
          </div>
        </Card>
      ) : (
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {selectedFile.name.endsWith(".zip") ? (
                <FileArchive className="h-8 w-8 text-primary" />
              ) : (
                <FileCode className="h-8 w-8 text-primary" />
              )}
              <div>
                <p className="font-medium" data-testid="text-filename">
                  {selectedFile.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClearFile}
              disabled={isUploading}
              data-testid="button-clear-file"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
