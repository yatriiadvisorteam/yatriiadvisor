import { Yatra_One } from "next/font/google";
import Link from "next/link";

interface props {
  children: React.ReactNode;
}

const YatriFont = Yatra_One({ weight: "400", subsets: ["devanagari"] });

export default function RootLayout({ children }: props) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <header
        style={YatriFont.style}
        className="h-14 border-b border-gray-600 flex items-center px-5 text-xl font-mono font-bold"
      >
        i-Dashboard
      </header>
      <div className="w-full h-full flex">
        <nav className="h-full w-[180px] border-r border-gray-600 p-5">
          <ul className="w-full flex flex-col gap-3">
            <Link href={"/dashboard"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Home
              </li>
            </Link>
            <Link href={"/dashboard/check-status"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Check Status
              </li>
            </Link>
            <Link href={"/dashboard/orders"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Orders
              </li>
            </Link>
            <Link href={"/dashboard/favourites"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Favourites
              </li>
            </Link>
          </ul>
        </nav>
        <main className="w-full h-full bg-gray-950 flex items-center justify-center overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}
