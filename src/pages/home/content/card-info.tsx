import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card.tsx';

export interface InfoItem {
    title: string;
    description: string | undefined;
    content: string;
}

interface InfoItems {
    infoItems: InfoItem[];
}

function CardInfos({ infoItems }: InfoItems) {
    return (
        <>
            {infoItems.map((item: InfoItem) => (
                <Card className="break-inside-avoid">
                    <CardHeader>
                        <div>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>
                                {item.description}
                            </CardDescription>
                        </div>
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                            {item.content}
                        </CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </>
    );
}

export default CardInfos;
