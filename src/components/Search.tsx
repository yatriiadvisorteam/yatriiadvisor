import { VariantProps, cva } from "class-variance-authority";
import { AiOutlineSearch } from "react-icons/ai";

export type SearchProps = VariantProps<typeof searchStyles>;

export const searchStyles = cva("relative flex items-center", {
  variants: {
    inputVariant: {
      default: "bg-gray-100 border border-[#364C63]  w-1672 h-100 rounded-full pl-10 pr-4 py-2",
      another: "bg-gray-100 border border-[#364C63]  w-1672 h-100 rounded-full pl-10 pr-4 py-2",
    },
  },
});

interface SearchExtendedProps extends SearchProps {
  placeholder: string;
  inputVariant?: "default" | "another";
}

export default function Search({ placeholder, inputVariant = "default", ...props }: SearchExtendedProps) {
  return (
    <div className={searchStyles()}>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className={searchStyles({ inputVariant })}
          {...props}
        />
        {inputVariant === "default" && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <AiOutlineSearch className="text-gray-600" />
          </div>
        )}
      </div>
    </div>
  );
}