import AppSidebar from '@/components/app-sidebar'
import { SidebarProvider } from '../components/ui/sidebar'
import { ScrollArea } from '@/components/ui/scroll-area'

interface SidebarWrapperProps {
    children: React.ReactNode
}

function SidebarWrapper({ children }: SidebarWrapperProps) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <ScrollArea className="px-6 h-screen w-full flex flex-row flex-wrap justify-center items-center overflow-x-clip">
                {children}
            </ScrollArea>
        </SidebarProvider>
    )
}

export default SidebarWrapper
