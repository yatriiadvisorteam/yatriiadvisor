import { VariantProps, cva } from "class-variance-authority";

export type ButtonProps = VariantProps<typeof buttonStyles>;

export const buttonStyles = cva(
  "flex items-center justify-center shadow-lg rounded-full font-semibold",
  {
    variants: {
      intent: {
        primary: "bg-brand hover:bg-gray-700",
        secondary:"bg-secondary hover:bg-yellow-700 text-brand"
      },
      variant:{
        solid:"text-white",
        outline:""
      },
      size:{
        lg:"px-8 py-2 text-lg",
        md:"px-5 py-2 text-md"
      },
    },
    compoundVariants: [
      {
        intent:"primary",
        variant:"outline",
        className:"bg-transparent text-brand border-brand border-2 hover:bg-gray-300"
      },
      {
        intent:"secondary",
        variant:"outline",
        className:"bg-transparent text-secondary border-secondary border-2 hover:bg-yellow-100"
      }
    ],
    defaultVariants: {
      intent: "primary",
      size:"lg"
    },
  }
);

export interface ButtonExtendedProps extends ButtonProps {
  children: string;
  leftIcon?:React.ReactNode
}

export default function Button({
  intent,
  size,
  variant,
  children,
  leftIcon,
  ...props
}: ButtonExtendedProps) {
  return (
    <button className={buttonStyles({ intent,size,variant })} {...props}>
      <div className="pr-2">
        {leftIcon}
      </div>
      {children}
    </button>
  );
}
