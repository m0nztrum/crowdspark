import { AdminLayout } from '@/layout/AdminLayout';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { EventForm } from '@/components/Event/EventForm';
import { EventList } from '@/components/Event/EventList';
import { Event } from '@/types';
import { useState, useCallback, useEffect } from 'react';
import { supabase } from '@/services/supabase';

export const AdminEvents = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [events, setEvents] = useState<Event[]>([]);
    const toggleDialog = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

    useEffect(() => {
        const fetchEvents = async () => {
            const { data, error } = await supabase.from('events').select('*');
            if (data && !error) {
                setEvents(data);
            }
        };
        fetchEvents();
    }, []);

    return (
        <AdminLayout title="Event">
            <div className="flex">
                <div>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger>
                            <Button onClick={toggleDialog} variant="default">
                                Add Event
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-center">
                                    Create a new Event?
                                </DialogTitle>
                                <DialogDescription>
                                    <EventForm />
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className="mt-4">
                <EventList events={events} />
            </div>
        </AdminLayout>
    );
};
