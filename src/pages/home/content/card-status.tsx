import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card.tsx';
import NotifyItems, { Notification } from '@/components/notify-items.tsx';

const serverStatusNotifications: Notification[] = [
    {
        status: 'working',
        title: "MDMC's Headquarter",
        description: 'checking...',
    },
    { status: 'error', title: 'Discord Login', description: 'checking...' },
    { status: 'info', title: 'Gitee Updater', description: 'checking...' },
    {
        status: 'success',
        title: 'GitHub DataSource',
        description: 'checking...',
    },
];

function CardStatus() {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <CardTitle>Server Status</CardTitle>
                <CardDescription>
                    a neat place to check our server's status.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <NotifyItems notifications={serverStatusNotifications} />
            </CardContent>
        </Card>
    );
}

export default CardStatus;
