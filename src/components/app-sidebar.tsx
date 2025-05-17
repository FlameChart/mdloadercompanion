import { ModeToggle } from '@/components/mode-toggle'
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarFooter,
    SidebarGroupLabel,
    SidebarMenuButton,
    SidebarGroupContent,
} from '@/components/ui/sidebar'
import { FileCog, Home, Music } from 'lucide-react'

function SidebarWrapper() {
    return (
        <Sidebar className="h-screen" collapsible="none">
            <SidebarHeader>
                <SidebarGroup>
                    <span>MuseDash Loader Companion</span>
                </SidebarGroup>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <span>Navigation</span>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenuButton asChild>
                            <a href="/">
                                <Home />
                                <span>Home</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarGroupContent>
                    <SidebarGroupLabel>
                        <span>Custom Content Management</span>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenuButton asChild>
                            <a href="/mods">
                                <FileCog />
                                <span>Mods</span>
                            </a>
                        </SidebarMenuButton>
                        <SidebarMenuButton asChild>
                            <a href="/songs">
                                <Music />
                                <span>Songs</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarGroupContent>
                    <SidebarGroupLabel>Tools</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenuButton asChild>
                            <a href="/tools/loader-logs">
                                <FileCog />
                                <span>Loader Logs</span>
                            </a>
                        </SidebarMenuButton>
                        <SidebarMenuButton asChild>
                            <a href="/tools">
                                <Music />
                                <span>All Tools</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <ModeToggle />
            </SidebarFooter>
        </Sidebar>
    )
}

export default SidebarWrapper
