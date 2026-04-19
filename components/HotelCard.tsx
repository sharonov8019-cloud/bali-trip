import type { Hotel } from "@/lib/types";

const providerStyle: Record<string, string> = {
  Booking: "bg-[#003580] text-white",  // фирменный синий Booking
  Airbnb:  "bg-[#FF5A5F] text-white",  // фирменный красный Airbnb
};

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="bg-white rounded-xl p-3 shadow-card">
      <div className="flex items-start gap-2">
        <span className="text-2xl leading-none">🏨</span>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-ink leading-tight">{hotel.name}</div>
          {hotel.nights && (
            <div className="text-[11px] text-ink2 mt-0.5">{hotel.nights}</div>
          )}
        </div>
      </div>
      <div className="flex gap-2 mt-2.5">
        <a
          href={hotel.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-xs font-semibold py-2 bg-ocean/10 text-ocean rounded-lg text-center"
        >
          📍 На карте
        </a>
        <a
          href={hotel.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className={`flex-1 text-xs font-semibold py-2 rounded-lg text-center ${providerStyle[hotel.bookingProvider]}`}
        >
          {hotel.bookingProvider === "Booking" ? "🔑 Бронь Booking" : "🔑 Бронь Airbnb"}
        </a>
      </div>
    </div>
  );
}
