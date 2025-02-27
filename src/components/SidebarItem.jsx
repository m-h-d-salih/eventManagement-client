function SidebarItem({ title }) {
    return (
      <div className="flex items-center gap-2 text-sm text-pink-300 hover:text-pink-100 cursor-pointer">
        <div className="w-4 h-0.5 bg-pink-500"></div>
        <span>{title}</span>
      </div>
    )
  }
  export default SidebarItem;