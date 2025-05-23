import { DataTable } from '@/components/data-table';
import { StyleH4 } from '@/components/typography';
import { columns } from './tables/columns';
import { mockModData } from '@/types/mods';

function AllMods() {
    // for further developing
    // const modData = await getData()

    return (
        <div>
            <StyleH4>All Mods</StyleH4>
            <DataTable columns={columns} data={mockModData} />
        </div>
    );
}

export default AllMods;
