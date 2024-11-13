import { Label } from '../ui/label';

export const EventCard = () => {
    return (
        <div className="flex w-full flex-col space-y-4 rounded bg-card shadow">
            <section className="flex flex-col p-4">
                <h3 className="font-semibold">Creative ArtsEvent</h3>
                <Label className="text-xs font-light">Created at: 30 min Ago</Label>
            </section>
        </div>
    );
};
