import { Calendar, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type EventStatus = "upcoming" | "ongoing" | "past";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: EventStatus;
  type: string;
}

const statusStyles: Record<EventStatus, { bg: string; text: string; label: string }> = {
  upcoming: {
    bg: "bg-primary/10 border-primary/30",
    text: "text-primary",
    label: "Upcoming",
  },
  ongoing: {
    bg: "bg-green-500/10 border-green-500/30",
    text: "text-green-400",
    label: "Live Now",
  },
  past: {
    bg: "bg-muted border-border",
    text: "text-muted-foreground",
    label: "Completed",
  },
};

const EventCard = ({ title, date, time, location, description, status, type }: EventCardProps) => {
  const styles = statusStyles[status];

  return (
    <div
      className={cn(
        "group relative p-6 rounded-2xl border transition-all duration-300",
        "bg-card hover:bg-card/80",
        status === "past" ? "opacity-70 hover:opacity-100" : "card-glow"
      )}
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {type}
        </span>
        <span
          className={cn(
            "px-3 py-1 rounded-full text-xs font-medium border",
            styles.bg,
            styles.text
          )}
        >
          {status === "ongoing" && (
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
          )}
          {styles.label}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>

      {/* Meta Info */}
      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary/70" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary/70" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary/70" />
          <span>{location}</span>
        </div>
      </div>

      {/* Hover Arrow */}
      {status !== "past" && (
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-5 h-5 text-primary" />
        </div>
      )}
    </div>
  );
};

export default EventCard;
