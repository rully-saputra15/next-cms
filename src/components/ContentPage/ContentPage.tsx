'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Article } from '@/lib/types';

import { LoadingSkeleton } from '../core';

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
import useContentPage from './useContentPage';
import HeaderPage from './blocks/HeaderPage';
import FooterPage from './blocks/FooterPage';

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
  const { query, isOpen, selectedArticle, onClose, handleInput, table } =
    useContentPage();

  return (
    <main className="p-5 space-y-5">
      <HeaderPage query={query} table={table} handleInput={handleInput} />
      <Suspense fallback={<LoadingSkeleton />}>
        <ItemTable table={table} />
      </Suspense>
      <FooterPage table={table} />
      <Modal
        isOpen={isOpen}
        selectedArticle={selectedArticle}
        onClose={onClose}
      />
    </main>
  );
}

export default ContentPage;
