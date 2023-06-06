import "./globals.css";
import Providers from "./providers";
import { Roboto } from "next/font/google";
import 'mapbox-gl/dist/mapbox-gl.css';

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css' rel='stylesheet' />
      </head>
      <body className="w-[100vw] h-[100vh]" style={roboto.style}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
