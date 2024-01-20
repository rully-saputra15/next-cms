import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { FaRegTrashCan } from 'react-icons/fa6';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@/components/ui/table';
import { Article, ArticleCategory, DialogType } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { NotFound } from '@/components/core';

type Props = {
  data: Article[];
  handleOpenDialog: (item: Article, dialogType: DialogType) => void;
};

const renderCategories = (itemId: string, categories: ArticleCategory[]) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  categories.map((category) => (
    <Badge variant="secondary" key={`${itemId} ${category.id}`}>
      {category.name}
    </Badge>
  ));

function TableTopHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>No</TableHead>
        <TableHead>ID</TableHead>
        <TableHead>Title</TableHead>
        <TableHead>Categories</TableHead>
        <TableHead>Published Date</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Total Views</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
}

function ItemTable({ data, handleOpenDialog }: Props) {
  const renderTableBody = (data: Article[]) => {
    return data.map((item, index) => (
      <TableRow key={item.id}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.title}</TableCell>
        <TableCell className="space-x-2">
          {renderCategories(item.id, item.categories)}
        </TableCell>
        <TableCell>{item.publishedDate}</TableCell>
        <TableCell>
          <Badge
            variant={item.status === 'Published' ? 'default' : 'destructive'}
          >
            {item.status}
          </Badge>
        </TableCell>
        <TableCell className="font-bold">{item.totalViews}</TableCell>
        <TableCell className="space-x-2">
          <Button
            variant="outline"
            onClick={() => handleOpenDialog(item, 'edit')}
          >
            <FiEdit3 />
          </Button>
          <Button
            variant="destructive"
            onClick={() => handleOpenDialog(item, 'delete')}
          >
            <FaRegTrashCan />
          </Button>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <Card>
      {data.length > 0 ? (
        <CardContent>
          <Table>
            <TableTopHeader />
            <TableBody>{renderTableBody(data)}</TableBody>
          </Table>
        </CardContent>
      ) : (
        <NotFound />
      )}
    </Card>
  );
}

export default ItemTable;
