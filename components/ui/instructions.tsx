import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";
import ReactMarkdown from "react-markdown";

interface InstructionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | string;
}

export function Instructions({
  children,
  className,
  ...props
}: InstructionsProps) {
  return (
    <div
      className={cn("border border-gray-300 p-3 bg-white text-sm", className)}
      {...props}
    >
      {typeof children === "string" ? (
        <div className="instructions-text">
          <ReactMarkdown>{children}</ReactMarkdown>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
