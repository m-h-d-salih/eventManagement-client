import { ChevronDown, ChevronUp } from "lucide-react";
import SidebarItem from "./SidebarItem";

function SidebarSection({ title, expanded, toggle, items }) {
    return (
      <div>
        <button className="flex items-center  h-10 rounded-md p-4 justify-between w-full border border-[#D960B6] text-pink-400 font-medium mb-2" onClick={toggle}>
          <span>{title}</span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {expanded && (
          <div className="ml-4 space-y-3">
            {items.map((item, index) => (
              <SidebarItem key={index} title={item} />
            ))}
          </div>
        )}
      </div>
    )
  }
  export default SidebarSection;