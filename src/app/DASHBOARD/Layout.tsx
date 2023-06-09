import {Roboto} from "next/font/google";


interface props {
  children: React.ReactNode;
}
export default function RootLayout({ children }: props) {
  return (
    <div className="h-screen w-screen overflow-hidden">
    
      <div className="w-full h-full flex">
      
        <main className="w-full h-full border-blue-300 flex items-center justify-center ">
          {children}
        </main>
      </div>
    </div>
  );
}