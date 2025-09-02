import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-transparent hover:border hover:border-primary hover:text-primary",
        destructive: "bg-destructive text-white hover:bg-transparent hover:border hover:border-destructive hover:text-destructive",
        outline: "border border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
        secondary: "bg-secondary text-white hover:bg-transparent hover:border hover:border-secondary hover:text-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "cogintech-orange": "bg-cogintech-orange text-white hover:bg-transparent hover:border hover:border-cogintech-orange hover:text-cogintech-orange",
        "cogintech-orange-outline": "border border-cogintech-orange bg-transparent text-cogintech-orange hover:bg-cogintech-orange hover:text-white",
        "cogintech-blue": "bg-cogintech-blue text-white hover:bg-transparent hover:border hover:border-cogintech-blue hover:text-cogintech-blue",
        "cogintech-blue-outline": "border border-cogintech-blue bg-transparent text-cogintech-blue hover:bg-cogintech-blue hover:text-white",
        "cogintech-teal": "bg-cogintech-teal text-white hover:bg-transparent hover:border hover:border-cogintech-teal hover:text-cogintech-teal",
        "cogintech-teal-outline": "border border-cogintech-teal bg-transparent text-cogintech-teal hover:bg-cogintech-teal hover:text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
