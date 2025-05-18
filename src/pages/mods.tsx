import { StyleH3 } from "@/components/typography"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AllMods from "./mods/all-mods"
import InstalledMods from "./mods/installed-mods"

function Mods() {
    return (
        <main>
            <StyleH3>Mods</StyleH3>
            <p>This is the first example page.</p>
            <Tabs defaultValue="all" className="mt-4">
                <TabsList className="grid w-full grid-cols-2 px-1">
                    <TabsTrigger value="all">Mod Lists</TabsTrigger>
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
    )
}

export default Mods
