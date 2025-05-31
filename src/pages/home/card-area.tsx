import CardLauncher from '@/pages/home/content/card-launcher.tsx';
import CardStatus from '@/pages/home/content/card-status.tsx';
import CardInfo, { InfoItem } from '@/pages/home/content/card-info.tsx';

const mockInfoItems: InfoItem[] = [
    {
        title: 'Modloader Version',
        content: '$modloader_ver',
        description: 'just a quick ways to check the loader.',
    },
    {
        title: 'Game Version',
        content: '$game_version',
        description: undefined,
    },
    {
        title: 'Mods',
        content: '$mod_count',
        description: undefined,
    },
    {
        title: 'Songs',
        content: '$song_count',
        description: undefined,
    },
];

function CardArea() {
    return (
        <div
            id="pageContent"
            className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3"
        >
            <CardLauncher />
            <CardInfo infoItems={mockInfoItems} />
            <CardStatus />
        </div>
    );
}

export default CardArea;
