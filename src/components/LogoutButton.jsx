import { ChevronLeft } from "lucide-react";

function LogoutButton() {
    return (
      <div className="flex items-center gap-2 text-pink-300 hover:text-pink-100 cursor-pointer">
        <ChevronLeft size={20} />
        <span>Logout</span>
      </div>
    )
  }
  export default LogoutButton;