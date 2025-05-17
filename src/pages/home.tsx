import { StyleH3 } from '@/components/typography'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

function Home() {
    return (
        <main id="containers" className="max-w-screen-xl mx-auto">
            <StyleH3 className="mb-4">Hello, $user</StyleH3>
            <div
                id="pageContent"
                className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
            >
                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Start Game</CardTitle>
                        <CardDescription>
                            $status_text (varies when game is detected or not)
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
                        <CardTitle>Server Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Placeholder content for card 2.</p>
                    </CardContent>
                </Card>
                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>ModLoader Info</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Placeholder content for card 3.</p>
                    </CardContent>
                </Card>
                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Content Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Placeholder content for card 4.</p>
                    </CardContent>
                </Card>
                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Game Info</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Placeholder content for card 5.</p>
                    </CardContent>
                </Card>
                <Card className="break-inside-avoid">
                    <CardHeader>
                        <CardTitle>Card 6</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Placeholder content for card 6.</p>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

export default Home
