import { DataTable } from '@/components/data-table';
import { columns } from './tables/columns';
import { mockModData } from '@/types/mods';

function AllMods() {
    // for further developing
    // const modData = await getData()

    return (
        <div>
            <DataTable columns={columns} data={mockModData} />
        </div>
    );
}

export default AllMods;
