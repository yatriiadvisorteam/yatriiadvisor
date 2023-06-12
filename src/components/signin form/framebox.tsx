import Navbar from "../Header";
import Login from "./login";

export default function RectangleFrame() {
    return (
      <div className="h-[490px] w-[366px] top-10 bg-frame border-[1px] border-button rounded-[20px]  flex items-center" >
        <Login/>
      </div>
    );
  }