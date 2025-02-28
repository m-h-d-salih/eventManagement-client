import { Eye } from "lucide-react";
import bgArrow from "../assets/Arrow.png";

function EventTable({ eventRequests }) {
  return (
    <div className="bg-black/20 rounded-lg overflow-hidden border border-[#D960B6] relative">
      {/* Scrollable wrapper for mobile screens */}
      <div className="overflow-x-auto relative">
        <table className="min-w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-[#D960B6] text-white">
            <tr>
              {/* Sticky Event Name Column */}
              <th className="py-3 px-4 text-left sticky left-0 bg-[#D960B6] min-w-[200px] z-10">
                Event Name
              </th>

              <th className="py-3 px-4 text-left min-w-[120px]">
                <div className="flex items-center gap-2">
                  <span>Event Start</span>
                  <img src={bgArrow} className="w-4 h-4" alt="Arrow" />
                </div>
              </th>

              <th className="py-3 px-4 text-left min-w-[120px]">
                <div className="flex items-center gap-2">
                  <span>Event End</span>
                  <img src={bgArrow} className="w-4 h-4 rotate-180" alt="Arrow" />
                </div>
              </th>
              <th className="py-3 px-4 text-left min-w-[150px]">
                <div className="flex items-center gap-2">
                  <span>Client Name</span>
                  <img src={bgArrow} className="w-4 h-4" alt="Arrow" />
                </div>
              </th>
              <th className="py-3 px-4 text-left min-w-[150px]">Contact Info</th>
              <th className="py-3 px-4 text-left min-w-[150px]">Venue</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {eventRequests.map((event) => (
              <tr key={event.id} className="border-t border-[#D960B6] hover:bg-pink-500/5 relative">
                {/* Sticky Event Name Column */}
                <td className="py-3 px-4 sticky  left-0 min-w-[200px] z-10  backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Eye size={16} className="text-gray-400" />
                    <span>{event.name}</span>
                  </div>
                </td>

                <td className="py-3 px-4">{event.startDate}</td>
                <td className="py-3 px-4">{event.endDate}</td>
                <td className="py-3 px-4">{event.clientName}</td>
                <td className="py-3 px-4">{event.contactInfo}</td>
                <td className="py-3 px-4">{event.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventTable;
