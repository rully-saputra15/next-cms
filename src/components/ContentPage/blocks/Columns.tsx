import { Article, ArticleCategory } from '@/lib/types';
import { ColumnDef } from '@tanstack/react-table';
import { RxCaretSort } from 'react-icons/rx';
import { FiEdit3 } from 'react-icons/fi';
import { FaRegTrashCan } from 'react-icons/fa6';

import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function useColumns(callback: Function) {
  const columns: ColumnDef<Article>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all rows"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'id',
      header: 'ID',
      cell: ({ row }) => <div className="capitalize">{row.getValue('id')}</div>,
    },
    {
      accessorKey: 'title',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="-ml-4"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Title
            <RxCaretSort className="ml-2" />
          </Button>
        );
      },
    },
    {
      accessorKey: 'categories',
      header: 'Categories',
      cell: ({ row }) => {
        const categories = row.getValue('categories') as ArticleCategory[];
        return (
          <div className="flex flex-row gap-2">
            {categories.map((category: ArticleCategory) => (
              <Badge
                key={`${row.getValue('id')} ${category.id}`}
                variant="secondary"
              >
                {category.name}
              </Badge>
            ))}
          </div>
        );
      },
    },
    {
      accessorKey: 'publishedDate',
      header: 'Published Date',
      cell: ({ row }) => <div>{row.getValue('publishedDate')}</div>,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.getValue('status') as string;
        return (
          <Badge variant={status === 'Published' ? 'default' : 'destructive'}>
            {status}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'totalViews',
      header: 'Total Views',
      cell: ({ row }) => <div>{row.getValue('totalViews')}</div>,
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const article = {
          id: row.getValue('id'),
          publishedDate: row.getValue('publishedDate'),
          status: row.getValue('status'),
          totalViews: row.getValue('totalViews'),
          categories: row.getValue('categories'),
          title: row.getValue('title'),
        };
        return (
          <div className="flex flex-row gap-2">
            <Button variant="outline" onClick={() => callback(article, 'edit')}>
              <FiEdit3 />
            </Button>
            <Button
              variant="destructive"
              onClick={() => callback(article, 'delete')}
            >
              <FaRegTrashCan />
            </Button>
          </div>
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
  ];
  return columns;
}
