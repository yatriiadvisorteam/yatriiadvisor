import Login from "./login";

export default function RectangleFrame() {
    return (
      <div className="h-[600px] w-[400px] top-10 bg-white border-[1px] border-secondary rounded-[20px]  flex flex-col items-center justify-center">
        <Login/>
      </div>
    );
  }