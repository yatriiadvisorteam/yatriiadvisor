import {Roboto} from "next/font/google";
import Link from "next/link";

interface props {
  children: React.ReactNode;
}

const Yatrii = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }: props) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <header
        style={Yatrii.style}
        className="h-14 border-b border-blue-800 flex items-center px-5 text-xl font-mono font-bold"
      >
      </header>
      <div className="w-full h-full flex">
            <Link href={"/DASHBOARD/ProfilePage"}>
              
            </Link>
        
        <main className="w-full h-full border-blue-300 flex items-center justify-center ">
          {children}
        </main>
      </div>
    </div>
  );
}