import AppSidebar from '@/components/app-sidebar';
import { SidebarProvider } from '../components/ui/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarWrapperProps {
    children: React.ReactNode;
}

function SidebarWrapper({ children }: SidebarWrapperProps) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <ScrollArea className="flex h-screen w-full flex-row flex-wrap items-center justify-center overflow-x-clip px-6">
                <div className="mx-auto max-w-screen-xl pb-4">{children}</div>
            </ScrollArea>
        </SidebarProvider>
    );
}

export default SidebarWrapper;
