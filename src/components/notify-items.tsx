interface Notification {
    title: string;
    description: string;
    status: 'success' | 'error' | 'working' | 'info';
}

interface NotifyItemsProps {
    notifications: Notification[];
}

function NotifyItems({ notifications }: NotifyItemsProps) {
    const getStatusColor = (status: Notification['status']) => {
        switch (status) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            case 'working':
                return 'bg-yellow-500';
            case 'info':
            default:
                return 'bg-sky-500';
        }
    };

    return (
        <>
            {notifications.map((notification, index) => (
                <div
                    key={index}
                    className="mb-1 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                    <span
                        className={`flex h-2 w-2 translate-y-1 rounded-full ${getStatusColor(
                            notification.status,
                        )}`}
                    />
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {notification.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {notification.description}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default NotifyItems;
