import { VariantProps, cva } from "class-variance-authority";

export type ButtonProps = VariantProps<typeof buttonStyles>;

export const buttonStyles = cva("px-5 py-2 flex items-center justify-center text-lg shadow-sm rounded-xl", {
  variants: {
    intent: {
      primary:
        "text-teal-400 border-2 border-teal-400 bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white",
      disabled: "bg-gray-300 text-gray-900 hover:cursor-not-allowed",
    },
    fullwidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface ButtonExtendedProps extends ButtonProps {
  children: string;
  LeftIcon?: React.ReactNode;
}

export default function Button({
  intent,
  fullwidth,
  children,
  LeftIcon,
  ...props
}: ButtonExtendedProps) {
  return (
    <button className={buttonStyles({ intent, fullwidth })} {...props}>
      {
        LeftIcon && (
          <div className="text-lg pr-3">{LeftIcon}</div>
        )
      }
      {children}
    </button>
  );
}
