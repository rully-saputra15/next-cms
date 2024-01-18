'use client';
import React from 'react';
import { Input } from '@/components/ui/input';

import { Title } from '../core';
import ItemTable from './blocks/ItemTable';
import { Article, DialogType } from '@/lib/types';
import useDialog from '@/hooks/useDialog';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '../ui/dialog';
import { Label } from '../ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '../ui/select';
import { Button } from '../ui/button';

type ModalProps = {
  isOpen: boolean;
  selectedArticle: Article;
  onClose: () => void;
};

const dummyData: Article[] = [
  {
    id: '001',
    publishedDate: '2021-09-01',
    status: 'Published',
    totalViews: '20.000',
    categories: [
      {
        id: 'CAT-001',
        name: 'Fantasy'
      },
      {
        id: 'CAT-002',
        name: 'Adventure'
      }
    ],
    title: 'Lorem Ipsum dor Selamet 1'
  },
  {
    id: '002',
    publishedDate: '2021-09-01',
    status: 'Draft',
    categories: [
      {
        id: 'CAT-001',
        name: 'Fantasy'
      },
      {
        id: 'CAT-002',
        name: 'Adventure'
      }
    ],
    totalViews: '10.000',
    title: 'Lorem Ipsum dor Selamet 2'
  },
  {
    id: '003',
    publishedDate: '2021-09-01',
    status: 'Published',
    categories: [
      {
        id: 'CAT-003',
        name: 'Horror'
      }
    ],
    totalViews: '30.000',
    title: 'Lorem Ipsum dor Selamet 3'
  }
];

const Modal = ({ isOpen, selectedArticle, onClose }: ModalProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Edit Article</DialogTitle>
        <DialogDescription>
          Lorem ipsum dor selamet lorem ipsum dor selamet lorem ipsum dor
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-row justify-between items-center space-x-2">
        <div className="flex flex-col justify-start items-start flex-1 gap-2">
          <Label htmlFor="id">ID</Label>
          <Input id="id" defaultValue={selectedArticle.id} readOnly />
        </div>
        <div className="flex flex-col justify-start items-start flex-1 gap-2">
          <Label htmlFor="status">Status</Label>
          <Select value={selectedArticle.status.toLowerCase()}>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start flex-1 gap-2">
        <Label htmlFor="id">Title</Label>
        <Input id="title" placeholder="Title" value={selectedArticle.title} />
      </div>
      <DialogFooter className="sm:justify-start">
        <Button type="submit">Save Changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

const ContentPage = () => {
  const [data, setData] = React.useState<Article[]>(dummyData);
  const [selectedArticle, setSelectedArticle] = React.useState<Article>({
    id: '',
    publishedDate: '',
    status: '',
    totalViews: '',
    categories: [],
    title: ''
  });
  const { isOpen, onOpen, onClose } = useDialog();

  const handleOpenDialog = (article: Article, dialogType: DialogType) => {
    setSelectedArticle(article);
    onOpen();
  };
  return (
    <main className="p-5 space-y-5">
      <section className="flex flex flex-row justify-between items-center">
        <Title text="Content" />
        <Input className="max-w-sm" placeholder="Search" />
      </section>

      <ItemTable data={data} handleOpenDialog={handleOpenDialog} />
      <Modal
        isOpen={isOpen}
        selectedArticle={selectedArticle}
        onClose={onClose}
      />
    </main>
  );
};

export default ContentPage;
