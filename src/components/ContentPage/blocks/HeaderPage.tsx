import { Table } from '@tanstack/react-table';
import { IoMdMenu } from 'react-icons/io';
import { LuSettings2 } from 'react-icons/lu';
import { IoMdAddCircleOutline } from 'react-icons/io';

import { Article } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarItem,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Title } from '@/components/core';

type Props = {
  query: string;
  table: Table<Article>;
  handleInput: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onSheetOpen: () => void;
};

export default function HeaderPage({
  query,
  table,
  handleInput,
  onSheetOpen,
}: Props) {
  return (
    <section className="flex flex-row flex-1 justify-between items-center">
      <Title text="Content" />
      <div className="flex flex-row gap-2 w-96">
        <Button variant="outline" onClick={onSheetOpen}>
          <IoMdAddCircleOutline />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <LuSettings2 />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <IoMdMenu />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Bulk Delete</MenubarItem>
              <MenubarItem>Bulk Publish</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Input
          placeholder="Search"
          value={query}
          onChange={(ev) => handleInput(ev)}
        />
      </div>
    </section>
  );
}
