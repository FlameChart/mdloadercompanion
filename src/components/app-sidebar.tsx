import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarSeparator,
    SidebarFooter,
    SidebarGroupLabel,
    SidebarMenuItem,
    SidebarMenuButton,
} from '@/components/ui/sidebar'
import { Home } from 'lucide-react'

function SidebarWrapper() {
    const navigate = useNavigate()

    return (
        <Sidebar className="h-screen" collapsible="none">
            <SidebarHeader>
                <SidebarGroup>
                    <p>MuseDash Loader Companion</p>
                </SidebarGroup>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenuItem key="Home">
                        <SidebarMenuButton asChild>
                            <a href="/">
                                <Home />
                                <span>Home</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarGroupLabel>

                    </SidebarGroupLabel>
                    <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => navigate('/page1')}
                    >
                        Page 1
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => navigate('/page2')}
                    >
                        Page 2
                    </Button>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <ModeToggle />
            </SidebarFooter>
        </Sidebar>
    )
}

export default SidebarWrapper
