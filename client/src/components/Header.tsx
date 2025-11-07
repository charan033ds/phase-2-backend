import { Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center h-9 w-9 rounded-md bg-primary text-primary-foreground">
            <Code2 className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Project Uploader</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Automate your project sharing
            </p>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
