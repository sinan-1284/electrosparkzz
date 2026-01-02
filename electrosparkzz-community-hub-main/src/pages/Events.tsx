import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventCard, { EventStatus } from "@/components/EventCard";
import { cn } from "@/lib/utils";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: EventStatus;
  type: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "AI & Machine Learning Workshop",
    date: "January 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Virtual Event",
    description: "Dive deep into the world of AI and machine learning. Learn to build your first neural network from scratch with hands-on exercises.",
    status: "ongoing",
    type: "Workshop",
  },
  {
    id: 2,
    title: "TechSpark Hackathon 2026",
    date: "January 25-26, 2026",
    time: "48 Hours",
    location: "Tech Innovation Hub",
    description: "Join us for an intense 48-hour hackathon where teams compete to build innovative solutions for real-world problems.",
    status: "upcoming",
    type: "Hackathon",
  },
  {
    id: 3,
    title: "Web3 & Blockchain Tech Talk",
    date: "February 5, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Virtual Event",
    description: "Explore the future of decentralized technologies with industry experts. Learn about smart contracts, DeFi, and NFTs.",
    status: "upcoming",
    type: "Tech Talk",
  },
  {
    id: 4,
    title: "Community Meetup: Networking Night",
    date: "February 12, 2026",
    time: "7:00 PM - 10:00 PM",
    location: "Downtown Lounge",
    description: "Connect with fellow tech enthusiasts, share ideas, and build lasting professional relationships in a relaxed setting.",
    status: "upcoming",
    type: "Meetup",
  },
  {
    id: 5,
    title: "Cloud Architecture Workshop",
    date: "December 10, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual Event",
    description: "Master cloud architecture patterns with AWS, Azure, and GCP. Build scalable and resilient applications.",
    status: "past",
    type: "Workshop",
  },
  {
    id: 6,
    title: "Open Source Contribution Day",
    date: "November 28, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Community Center",
    description: "Learn how to contribute to open source projects. Mentors guided participants through their first pull requests.",
    status: "past",
    type: "Workshop",
  },
];

const filters: { label: string; value: EventStatus | "all" }[] = [
  { label: "All Events", value: "all" },
  { label: "Ongoing", value: "ongoing" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Past", value: "past" },
];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState<EventStatus | "all">("all");

  const filteredEvents = events.filter(
    (event) => activeFilter === "all" || event.status === activeFilter
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-in">
              Our <span className="gradient-text">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Discover hackathons, workshops, tech talks, and meetups designed to 
              ignite your passion for technology.
            </p>
          </div>

          {/* Filters */}
          <div 
            className="flex flex-wrap items-center justify-center gap-2 mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  activeFilter === filter.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 3)}s` }}
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No events found for this filter.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
