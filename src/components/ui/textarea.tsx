import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(

        "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400",

        "focus:outline-none focus:border-gray-500 focus:ring-0",

        "disabled:cursor-not-allowed disabled:opacity-50",

        "resize-y min-h-[4rem]",

        className
      )}
      {...props}
    />
  );
}

export { Textarea };
