import { Label } from '../ui/label';
import { Event } from '@/types';

interface EventCardProps {
    event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
    return (
        <div className="flex w-full flex-col space-y-4 rounded bg-card shadow">
            <section className="flex flex-col p-4">
                <h3 className="font-semibold">{event.name}</h3>
                <Label className="text-xs font-light">Created at: {event.created_at}</Label>
            </section>
        </div>
    );
};
