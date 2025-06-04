import { StyleH3 } from '@/components/typography';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AllMods from './mods/all-mods';
import InstalledMods from './mods/installed-mods';
import {Button} from "@/components/ui/button.tsx";

function Mods() {
    return (
        <main>
            <div className="flex flex-warp flex-row justify-between align-bottom">
                <div className="flex flex-col">
                    <StyleH3>Mods</StyleH3>
                    <p>$number installed, $number active, $number outdated.</p>
                </div>
                <div className="flex flex-row flex-warp items-end">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">Modloader</Button>
                        </PopoverTrigger>
                        <PopoverContent className="mx-6 w-64">
                            helloworld
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <Tabs defaultValue="all" className="mt-4">
                <TabsList className="grid w-full grid-cols-2 px-1">
                    <TabsTrigger value="all">All Mods</TabsTrigger>
                    <TabsTrigger value="installed">Installed Mods</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <AllMods />
                </TabsContent>
                <TabsContent value="installed">
                    <InstalledMods />
                </TabsContent>
            </Tabs>
        </main>
    );
}

export default Mods;
