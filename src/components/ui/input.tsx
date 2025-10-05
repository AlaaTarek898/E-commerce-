import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
     
        "mt-1 w-full bg-transparent border-0 border-b-2 border-gray-300 py-2 text-base outline-none transition-colors",
        "focus:border-indigo-600 focus:ring-0",
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
