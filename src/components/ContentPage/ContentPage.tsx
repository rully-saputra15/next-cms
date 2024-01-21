'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { IoMdMenu } from 'react-icons/io';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarItem,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { Article, DialogType } from '@/lib/types';
import { useDialog, useDebounce } from '@/hooks';
import { url } from '@/config/api';

import { LoadingSkeleton, Title } from '../core';

const ItemTable = dynamic(() => import('./blocks/ItemTable'));

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Label } from '../ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../ui/select';

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
        name: 'Fantasy',
      },
      {
        id: 'CAT-002',
        name: 'Adventure',
      },
    ],
    title: 'Lorem Ipsum dor Selamet 1',
  },
  {
    id: '002',
    publishedDate: '2021-09-01',
    status: 'Draft',
    categories: [
      {
        id: 'CAT-001',
        name: 'Fantasy',
      },
      {
        id: 'CAT-002',
        name: 'Adventure',
      },
    ],
    totalViews: '10.000',
    title: 'Lorem Ipsum dor Selamet 2',
  },
  {
    id: '003',
    publishedDate: '2021-09-01',
    status: 'Published',
    categories: [
      {
        id: 'CAT-003',
        name: 'Horror',
      },
    ],
    totalViews: '30.000',
    title: 'Lorem Ipsum dor Selamet 3',
  },
];

function Modal({ isOpen, selectedArticle, onClose }: ModalProps) {
  return (
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
}

function ContentPage() {
  const [data, setData] = React.useState<Article[]>([]);
  const [query, setQuery] = React.useState<string>('');
  const [selectedArticle, setSelectedArticle] = React.useState<Article>({
    id: '',
    publishedDate: '',
    status: '',
    totalViews: '',
    categories: [],
    title: '',
  });

  const { isOpen, onOpen, onClose } = useDialog();

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${url}/data`);
    const data = await response.json();
    setData(data);
  };
  const handleOpenDialog = (article: Article, dialogType: DialogType) => {
    setSelectedArticle(article);
    onOpen();
  };

  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setQuery(value);
    handleSearch(value);
  };

  const handleSearch = useDebounce((value: string) => {
    const loweredValue = value.toLowerCase();

    const data = dummyData.filter((item) => {
      if (loweredValue) {
        return item.title.toLowerCase().includes(loweredValue);
      } else {
        return item;
      }
    });

    setData(data);
  }, 500);

  return (
    <main className="p-5 space-y-5">
      <section className="flex flex-row flex-1 justify-between items-center">
        <Title text="Content" />
        <div className="flex flex-row gap-2 w-72">
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

      <Suspense fallback={<LoadingSkeleton />}>
        <ItemTable data={data} handleOpenDialog={handleOpenDialog} />
      </Suspense>
      <Modal
        isOpen={isOpen}
        selectedArticle={selectedArticle}
        onClose={onClose}
      />
    </main>
  );
}

export default ContentPage;
