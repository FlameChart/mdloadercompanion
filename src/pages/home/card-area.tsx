import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import NotifyItems from "@/components/notify-items.tsx";

function CardArea() {
    return(
        <div
            id="pageContent"
            className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
        >
            <Card className="break-inside-avoid">
                <CardHeader>
                    <CardTitle>Start Game</CardTitle>
                    <CardDescription>
                        $status_text (varies when game is detected or
                        not)
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="default" className="w-full">
                        Start Game via Steam
                    </Button>
                    <Button variant="secondary" className="w-full">
                        Start Game without Mods
                    </Button>
                </CardContent>
            </Card>
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
            <Card className="break-inside-avoid">
                <CardHeader>
                    <CardTitle>Server Status</CardTitle>
                    <CardDescription>
                        a neat place to check our server's status.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <NotifyItems
                        notifications={serverStatusNotifications}
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default CardArea;