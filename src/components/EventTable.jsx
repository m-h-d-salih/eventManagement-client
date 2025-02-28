import { Eye } from "lucide-react";
import bgArrow from "../assets/Arrow.png"
function EventTable({ eventRequests }) {
  const obj={
    eventName:'Event Name',
    startDate:`Event Start`,
    endDate:`Event End`,
    clientName:'Cleint Name',
    contactInfo:'Contact Info',
    venue:'Venue'
  }
    return (
      <div className="bg-black/20   rounded-lg overflow-hidden border border-[#D960B6]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-3 px-4 bg-[#D960B6] hover:bg-[#b769a1] border border-[#D960B6]">

        <div className="flex items-center gap-2">
          <span>{obj.startDate}</span>
          <img src={bgArrow} className="w-4 h-4" alt="Arrow" />
        </div>
        <div>{obj.eventName}</div>
        <div className="flex items-center gap-2">
          <span>{obj.endDate}</span>
          <img src={bgArrow} className="w-4 h-4  rotate-180" alt="Arrow" />
        </div>
        <div className="flex items-center gap-2">
          <span>{obj.clientName}</span>
          <img src={bgArrow} className="w-4 h-4" alt="Arrow" />
        </div>
            <div>{obj.contactInfo}</div>
            <div>{obj.venue}</div>
        </div>
        {eventRequests.map((event) => (
          <div key={event.id} className="grid grid-cols-1 md:grid-cols-6 gap-4 py-3 px-4 hover:bg-pink-500/5 border border-[#D960B6]">
            <div className="flex items-center gap-2">
              <Eye size={16} className="text-gray-400" />
              <span>{event.name}</span>
            </div>
            <div>{event.startDate}</div>
            <div>{event.endDate}</div>
            <div>{event.clientName}</div>
            <div>{event.contactInfo}</div>
            <div>{event.venue}</div>
          </div>
        ))}
      </div>
    )
  }
  export default EventTable;