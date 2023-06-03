import "./globals.css";
import Providers from "./providers";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight:"400",
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-[100vw] h-[100vh]" style={roboto.style}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
