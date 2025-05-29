import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";

function CardLauncher() {
    return (
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
    )
}

export default CardLauncher;