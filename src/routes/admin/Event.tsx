import { AdminLayout } from '@/layout/AdminLayout';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export const AdminEvents = () => {
    return (
        <AdminLayout title="Event">
            <div className="flex">
                <div>
                    <Dialog>
                        <DialogTrigger>
                            <Button variant="default">Add Event</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-center">
                                    Create a new Event?
                                </DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your
                                    account and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]"># No</TableHead>
                        <TableHead>Name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">01</TableCell>
                        <TableCell>Art Event</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </AdminLayout>
    );
};
