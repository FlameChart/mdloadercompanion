'use client';

import { ColumnDef } from '@tanstack/react-table';

import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type Mods = {
    id: string;
    name: string;
    version: string;
    developer: string;
    linkDownload: string;
    linkHomepage: string;
    configFile: string;
    gameVersion: string[];
    description: string;
    dependMods: string[];
    dependLibs: string[];
    conflictMods: string[];
    sha256: string;
};

export const columns: ColumnDef<Mods>[] = [
    {
        accessorKey: 'select',
        header: '',
    },
    {
        accessorKey: 'nameplate',
        header: () => <div className="font-bold">Mods</div>,
        cell: ({ row }) => {
            const rowData = row.original;
            const modDisplayName: String = rowData.name;
            const modID: String = rowData.id;

            return (
                <div id="mod-nameplate-container" className="h-12 mb-2">
                    <div className="text-2xl">{modDisplayName}</div>
                    <div className="text-sm">{modID}</div>
                </div>
            );
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const rowData = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    rowData.linkDownload,
                                )
                            }
                        >
                            Download
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Opens...</DropdownMenuLabel>
                        <DropdownMenuItem>Homepage</DropdownMenuItem>
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                        <DropdownMenuItem>
                            Downloads in Browser
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
