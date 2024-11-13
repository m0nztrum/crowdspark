import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { supabase } from '@/services/supabase';

export const EventForm = () => {
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();
    const [name, setName] = useState<string>();
    const [saveInProgress, setSaveInProgress] = useState(false);

    const handleOnSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            name,
            start_date: startDate?.toISOString(),
            end_date: endDate?.toISOString(),
        };
        const { error } = await supabase.from('events').insert(payload);
        if (!error) {
            setSaveInProgress(true);
            console.log('Event Created');
        }
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="mt-4">
                <Label className="mb-2 block">Email</Label>
                <Input
                    type="text"
                    placeholder="Enter Event Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <Label className="mb-2 block">Start Date</Label>
                <div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={'outline'}
                                className={cn(
                                    'w-full justify-start text-left font-normal',
                                    !startDate && 'text-muted-foreground',
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {startDate ? format(startDate, 'PPP') : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={startDate}
                                onSelect={setStartDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className="mt-4">
                <Label className="mb-2 block">End Date</Label>
                <div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={'outline'}
                                className={cn(
                                    'w-full justify-start text-left font-normal',
                                    !endDate && 'text-muted-foreground',
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {endDate ? format(endDate, 'PPP') : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={endDate}
                                onSelect={setEndDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className="mt-4">
                <Button type="submit">{saveInProgress ? 'Saving...' : 'Save'}</Button>
            </div>
        </form>
    );
};
