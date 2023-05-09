import { VariantProps, cva } from "class-variance-authority";

export type ButtonProps = VariantProps<typeof buttonStyles>;

export const buttonStyles = cva("px-5 py-2 flex items-center justify-center text-lg shadow-sm rounded-full", {
  variants: {
    intent: {
      primary:
        "text-[#364C63] border-2 border-[#364C63] bg-gradient-to-t transition-all duration-75 font-sans md:font-roboto hover:from-[#364C63] hover:to-[#364C63] hover:text-white",
      disabled: "bg-gray-300 text-gray-900 hover:cursor-not-allowed",
    },
    fullwidth: {
      true: "w-full",
    },
    size: {
      medium:"h-41 w-143"
    },
  },
  defaultVariants: {
    intent: "primary",
    
  },
});

interface ButtonExtendedProps extends ButtonProps {
  children: string;
  children1: string;
  LeftIcon?: React.ReactNode;
  LeftIcon1?: React.ReactNode;
}

export default function Button({
  intent,
 
  fullwidth,
  size,
  children,
  children1,
  LeftIcon,
  LeftIcon1,
  ...props
}: ButtonExtendedProps) {
  return (
    <button className={buttonStyles({ intent, fullwidth, size })} {...props} >
      {
        LeftIcon && (
          <div className="stroke-full pr-3">{LeftIcon}</div>
        )
      }
      {children}
      {
        LeftIcon1 && (
          <div className="stroke-full pr-3">{LeftIcon1}</div>
        )
      }
      {children1}
    </button>
  );
}
