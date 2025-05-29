import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import CardLauncher from "@/pages/home/content/card-launcher.tsx";
import CardStatus from "@/pages/home/content/card-status.tsx";
import CardInfo, {InfoItem} from "@/pages/home/content/card-info.tsx";

const mockInfoItems: InfoItem[] = [
    {
        title: "Modloader Version",
        content: "$modloader_ver",
        description: "just a quick ways to check the loader."
    }
]

function CardArea() {
    return (
        <div
            id="pageContent"
            className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
        >
            <CardLauncher/>
            <CardInfo infoItems={mockInfoItems}/>
            <Card className="break-inside-avoid">
                <CardHeader>
                    <CardDescription>Modloader Version</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                        $modloader_version
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="break-inside-avoid">
                <CardHeader>
                    <CardDescription>Game Version</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                        $game_version
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="break-inside-avoid">
                <CardHeader>
                    <CardDescription>Mod Installed</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                        $mod_count
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="break-inside-avoid">
                <CardHeader>
                    <CardDescription>Songs Count</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                        $songs_count
                        <span className="text-sm font-light">
                                    ($loaded_est)
                                </span>
                    </CardTitle>
                </CardHeader>
            </Card>
            <CardStatus/>
        </div>
    )
}

export default CardArea;