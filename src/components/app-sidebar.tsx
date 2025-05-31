import { ModeToggle } from '@/components/mode-toggle';
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarFooter,
    SidebarGroupLabel,
    SidebarMenuButton,
    SidebarGroupContent,
} from '@/components/ui/sidebar';
import { FileCog, Home, Music, Settings } from 'lucide-react';
import { Button } from './ui/button';

const sidebarItems = [
    {
        groupName: 'Navigation',
        items: [{ name: 'Home', icon: <Home />, path: '/' }],
    },
    {
        groupName: 'Content Management',
        items: [
            { name: 'Mods', icon: <FileCog />, path: '/mods' },
            { name: 'Songs', icon: <Music />, path: '/songs' },
        ],
    },
    {
        groupName: 'Tools',
        items: [
            {
                name: 'Loader Logs',
                icon: <FileCog />,
                path: '/tools/loader-logs',
            },
            { name: 'All Tools', icon: <Music />, path: '/tools' },
        ],
    },
];

function SidebarWrapper() {
    return (
        <Sidebar className="h-screen" collapsible="none">
            <SidebarHeader>
                <SidebarGroup>
                    <span className="text-lg font-bold">
                        MuseDash <br /> Loader Companion
                    </span>
                </SidebarGroup>
            </SidebarHeader>
            <SidebarContent>
                {sidebarItems.map((group) => (
                    <SidebarGroup>
                        <SidebarGroupLabel>
                            <span>{group.groupName}</span>
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            {group.items.map((group) => (
                                <SidebarMenuButton asChild>
                                    <a href={group.path}>
                                        {group.icon}
                                        <span>{group.name}</span>
                                    </a>
                                </SidebarMenuButton>
                            ))}
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter className="flex flex-row flex-wrap justify-between">
                <Button asChild variant="ghost">
                    <a href="/settings">
                        <Settings />
                        <span>Settings</span>
                    </a>
                </Button>
                <ModeToggle />
            </SidebarFooter>
        </Sidebar>
    );
}

export default SidebarWrapper;
