import { Eye } from "lucide-react";

function EventTable({ eventRequests }) {
    return (
      <div className="bg-black/20 rounded-lg overflow-hidden border border-pink-500/20">
        {eventRequests.map((event) => (
          <div key={event.id} className="grid grid-cols-1 md:grid-cols-6 gap-4 py-3 px-4 hover:bg-pink-500/5">
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