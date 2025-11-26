import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                // Base layout
                "flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base md:text-sm",
                "resize-none outline-none transition-[color,box-shadow]",
                "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
                "bg-input-background",

                // ⭐ Always-visible border
                "border border-gray-400",

                // ⭐ Focus state — keep the nice ring
                "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",

                // Error styles
                "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",

                // Disabled styles
                "disabled:cursor-not-allowed disabled:opacity-50",

                className,
            )}
            {...props}
        />
    );
}

export { Textarea };
