import { EventCard } from './EventCard';
import { Event } from '@/types';

interface EventListProps {
    events: Event[];
}

export const EventList = ({ events }: EventListProps) => {
    return (
        <div className="grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-5">
            {events.map((event) => (
                <div key={event.id}>
                    <EventCard event={event} />
                </div>
            ))}
        </div>
    );
};
