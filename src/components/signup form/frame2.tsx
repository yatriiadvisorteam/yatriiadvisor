import CreateAccountForm from "./CreateAccountForm";
import Login from "../signin form/login";

export default function RectangleFrame2() {
    return (
      <div className="h-[750px] w-[600px] top-10 bg-white border-[1px] border-secondary rounded-[20px]  flex flex-col items-center justify-center">
        <CreateAccountForm/>
      </div>
    );
  }