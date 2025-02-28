import { useState } from "react"
import {
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
import bitCoin from "../assets/bitcoin-01.png"
import profileIcon from "../assets/Ellipse 1.png"

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
    <div className="min-h-screen bg-gradient-to-br from-[#010002] via-[#280F3C] to-[#60218B] text-white relative">
      {/* 🌟 Top Navigation */}
      <header className="flex justify-between items-center p-4 border-b border-[#D960B6]">
        <div className="flex items-center">
          {/* 🍔 Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 text-pink-300 hover:text-pink-100">
            <Menu size={24} />
          </button>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r  flex items-center justify-center">
            <span className="text-2xl font-bold"><img src={bitCoin}/></span>
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
            <div className="w-10 h-10 rounded-full bg-gradient-to-r  flex items-center justify-center overflow-hidden">
              <img
                src={profileIcon}
                alt="Profile"
                className="object-cover h-24"
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
          className={`fixed inset-y-0 left-0  lg:relative lg:w-[220px] border-r border-pink-500/20 transition-transform duration-300 z-50 ${
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


