import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-heading font-bold uppercase tracking-wider transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:brightness-110 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-accent-foreground shadow-[0_6px_0_-1px_hsl(45_85%_38%)] hover:translate-y-0.5 hover:shadow-[0_4px_0_-1px_hsl(45_85%_38%)] active:translate-y-1 active:shadow-[0_2px_0_-1px_hsl(45_85%_38%)]",
        primary:
          "bg-primary text-primary-foreground shadow-[0_6px_0_-1px_hsl(225_100%_16%)] hover:translate-y-0.5 hover:shadow-[0_4px_0_-1px_hsl(225_100%_16%)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_6px_0_-1px_hsl(196_100%_36%)] hover:translate-y-0.5 hover:shadow-[0_4px_0_-1px_hsl(196_100%_36%)]",
        magic:
          "bg-magic text-magic-foreground shadow-[0_6px_0_-1px_hsl(263_60%_22%)] hover:translate-y-0.5 hover:shadow-[0_4px_0_-1px_hsl(263_60%_22%)]",
        outline:
          "border-2 border-white bg-transparent text-white hover:bg-white/15",
        outlineDark:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/10",
        ghost: "text-primary hover:bg-primary/10",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        default: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-15 px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children as React.ReactElement<Record<string, unknown>>,
        {
          className: cn(buttonVariants({ variant, size, className })),
          ref,
          ...props,
        } as Record<string, unknown>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
