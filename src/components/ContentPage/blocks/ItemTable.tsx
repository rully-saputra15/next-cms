import React from 'react';
import { HeaderGroup, Table, flexRender } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
import {
  Table as TableComponent,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@/components/ui/table';
import { Article, ArticleCategory } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { NotFound } from '@/components/core';

type Props = {
  table: Table<Article>;
};

type TableTopHeaderProps = {
  headerGroups: HeaderGroup<Article>[];
};

const renderCategories = (itemId: string, categories: ArticleCategory[]) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  categories.map((category) => (
    <Badge variant="secondary" key={`${itemId} ${category.id}`}>
      {category.name}
    </Badge>
  ));

function TableTopHeader({ headerGroups }: TableTopHeaderProps) {
  return (
    <TableHeader>
      {headerGroups.map((item) => (
        <TableRow key={item.id}>
          {item.headers.map((header) => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
}

function ItemTable({ table }: Props) {
  const renderTableBody = () => {
    return table.getRowModel().rows?.map((row) => (
      <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <Card>
      {table?.getRowModel()?.rows?.length > 0 ? (
        <CardContent>
          <TableComponent>
            <TableTopHeader headerGroups={table.getHeaderGroups()} />
            <TableBody>{renderTableBody()}</TableBody>
          </TableComponent>
        </CardContent>
      ) : (
        <NotFound />
      )}
    </Card>
  );
}

export default ItemTable;
