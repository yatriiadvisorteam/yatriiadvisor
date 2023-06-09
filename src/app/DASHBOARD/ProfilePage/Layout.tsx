import {Roboto} from "next/font/google";
import Link from "next/link";
interface props {
  children: React.ReactNode;
}
const Yatrii = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }: props) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-">
            <Link href={"/DASHBOARD/ProfilePage"}>
            </Link>
        <main className="w-full h-full border-blue-300 flex items-center justify-center ">
          {children}
        </main>
      </div>
  );
}