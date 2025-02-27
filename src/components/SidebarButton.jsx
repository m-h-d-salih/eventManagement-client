function SidebarButton({ title }) {
    return (
      <button className="flex items-center justify-between w-full text-pink-400 font-medium">
        <span>{title}</span>
      </button>
    )
  }
  export default SidebarButton;