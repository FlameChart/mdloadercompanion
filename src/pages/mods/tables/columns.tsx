"use client";

import { ColumnDef } from "@tanstack/react-table";

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
    accessorKey: "select",
    header: "",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "info",
    header: "",
  },
  {
    accessorKey: "action",
    header: "",
  },
];
