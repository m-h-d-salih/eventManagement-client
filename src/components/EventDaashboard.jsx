import { useState } from "react"
import {
  Search,
  Plus,
  ChevronDown,
  ChevronUp,
  Eye,
  ChevronLeft,
  ChevronRight,
  Bell,
  LayoutGrid,
  Menu,
  X
} from "lucide-react"
import SidebarSection from "./SidebarSection"
import SidebarButton from "./SidebarButton"
import LogoutButton from "./LogoutButton"
import EventTable from "./EventTable"
import SearchInput from "./SearchInput"
import AddButton from "./AddButton"

export default function EventDashboard() {
  const [expandedSections, setExpandedSections] = useState({
    events: true,
    users: true,
  })
  const [menuOpen, setMenuOpen] = useState(false) // Mobile menu state

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const toggleMenu = () => setMenuOpen(!menuOpen) // Toggle menu visibility

  const eventRequests = Array(10)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      name: "Filled Name",
      startDate: "Jan 12, 2024",
      endDate: "Jan 14, 2024",
      clientName: "Muhammad Asad",
      contactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-fuchsia-900 text-white relative">
      {/* 🌟 Top Navigation */}
      <header className="flex justify-between items-center p-4 border-b border-pink-500/20">
        <div className="flex items-center">
          {/* 🍔 Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 text-pink-300 hover:text-pink-100">
            <Menu size={24} />
          </button>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            <span className="text-2xl font-bold">₿</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-pink-300 hover:text-pink-100 hidden lg:block">
            <LayoutGrid size={20} />
          </button>
          <button className="p-2 text-pink-300 hover:text-pink-100">
            <Bell size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div className="text-right mr-2">
              <p className="text-sm">
                Hi, <span className="text-pink-400">Muhammad Asad</span>
              </p>
              <p className="text-xs text-gray-300">Welcome back!</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center overflow-hidden">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Overlay when menu is open */}
      {menuOpen && <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={toggleMenu}></div>}

      <div className="flex flex-col lg:flex-row h-[calc(100vh-73px)]">
        {/* 🌟 Sidebar - Takes Half Screen Width on Mobile */}
        <aside
          className={`fixed inset-y-0 left-0 bg-purple-950 lg:relative lg:w-[220px] border-r border-pink-500/20 transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0 w-1/2 max-w-[300px]" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="p-4 space-y-6 flex flex-col lg:block">
            {/* ❌ Close Button (Mobile) */}
            <button onClick={toggleMenu} className="lg:hidden text-white self-end">
              <X size={24} />
            </button>

            <SidebarSection
              title="Events"
              expanded={expandedSections.events}
              toggle={() => toggleSection("events")}
              items={["New Requests", "Estimate", "Events", "Partial Requests"]}
            />
            <SidebarButton title="Positions" />
            <SidebarButton title="Contractors" />
            <SidebarSection
              title="Users"
              expanded={expandedSections.users}
              toggle={() => toggleSection("users")}
              items={["Admins", "Clients", "Coordinators"]}
            />
            <SidebarButton title="Profile" />
            <LogoutButton />
          </div>
        </aside>

        {/* 🌟 Main Content */}
        <main className="flex-1 p-4 overflow-auto">
          <div className="mb-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Event Requests</h1>

            {/* Hide Search Bar when menu is open */}
            {!menuOpen && (
              <div className="flex items-center gap-2">
                <SearchInput />
                <AddButton />
              </div>
            )}
          </div>

          {/* 🌟 Table */}
          <EventTable eventRequests={eventRequests} />
        </main>
      </div>
    </div>
  )
}

// ✅ **Now Defining SidebarSection**
// function SidebarSection({ title, expanded, toggle, items }) {
//   return (
//     <div>
//       <button className="flex items-center justify-between w-full text-pink-400 font-medium mb-2" onClick={toggle}>
//         <span>{title}</span>
//         {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//       </button>
//       {expanded && (
//         <div className="ml-4 space-y-3">
//           {items.map((item, index) => (
//             <SidebarItem key={index} title={item} />
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// ✅ **SidebarButton**
// function SidebarButton({ title }) {
//   return (
//     <button className="flex items-center justify-between w-full text-pink-400 font-medium">
//       <span>{title}</span>
//     </button>
//   )
// }

// ✅ **Logout Button**
// function LogoutButton() {
//   return (
//     <div className="flex items-center gap-2 text-pink-300 hover:text-pink-100 cursor-pointer">
//       <ChevronLeft size={20} />
//       <span>Logout</span>
//     </div>
//   )
// }

// ✅ **Event Table**
// function EventTable({ eventRequests }) {
//   return (
//     <div className="bg-black/20 rounded-lg overflow-hidden border border-pink-500/20">
//       {eventRequests.map((event) => (
//         <div key={event.id} className="grid grid-cols-1 md:grid-cols-6 gap-4 py-3 px-4 hover:bg-pink-500/5">
//           <div className="flex items-center gap-2">
//             <Eye size={16} className="text-gray-400" />
//             <span>{event.name}</span>
//           </div>
//           <div>{event.startDate}</div>
//           <div>{event.endDate}</div>
//           <div>{event.clientName}</div>
//           <div>{event.contactInfo}</div>
//           <div>{event.venue}</div>
//         </div>
//       ))}
//     </div>
//   )
// }

// ✅ **Search Input**
// function SearchInput() {
//   return (
//     <div className="relative">
//       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//       <input
//         type="text"
//         placeholder="Search here"
//         className="  bg-gray-800/50 border border-pink-500/30 rounded-md pl-10 pr-4 py-2 text-sm w-[220px] focus:outline-none focus:ring-1 focus:ring-pink-500"
//       />
//     </div>
//   )
// }

// ✅ **Add Button**
// function AddButton() {
//   return (
//     <button className="bg-pink-600 p-2 rounded-md hover:bg-pink-700">
//       <Plus size={20} />
//     </button>
//   )
// }
// ✅ **SidebarItem (Now Defined)**
// function SidebarItem({ title }) {
//   return (
//     <div className="flex items-center gap-2 text-sm text-pink-300 hover:text-pink-100 cursor-pointer">
//       <div className="w-4 h-0.5 bg-pink-500"></div>
//       <span>{title}</span>
//     </div>
//   )
// }

