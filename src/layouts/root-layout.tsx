import AppSidebar from '@/components/app-sidebar'
import {
    SidebarProvider,
} from '../components/ui/sidebar'
import { ScrollArea } from '@/components/ui/scroll-area'

interface SidebarWrapperProps {
    children: React.ReactNode
}

function SidebarWrapper({ children }: SidebarWrapperProps) {

    return (
        <SidebarProvider>
            <AppSidebar />
            <ScrollArea className="p-4">
            {children}
            </ScrollArea>
        </SidebarProvider>
    )
}

export default SidebarWrapper
