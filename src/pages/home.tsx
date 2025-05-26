import { StyleH3 } from '@/components/typography';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import NotifyItems, { Notification } from '@/components/notify-items';
import BannerArea from "@/pages/home/banner-area.tsx";
import CardArea from "@/pages/home/card-area.tsx";

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

function Home() {
    return (
        <>
            <main id="containers">
                <StyleH3 className="mb-4">Hello, $user</StyleH3>
                <BannerArea />
                <CardArea />
            </main>
        </>
    );
}

export default Home;
