
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  fileName?: string;
  className?: string;
}

export function CodeBlock({ 
  children, 
  language = "bash", 
  fileName, 
  className 
}: CodeBlockProps) {
  return (
    <div className={cn("rounded-lg overflow-hidden my-4", className)}>
      {fileName && (
        <div className="bg-muted/80 dark:bg-muted/20 px-4 py-2 text-sm border-b">
          {fileName}
        </div>
      )}
      <pre className="bg-muted/50 dark:bg-muted/20 p-4 overflow-x-auto text-sm">
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
}
