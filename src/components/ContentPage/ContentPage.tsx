'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Article, PopupProps } from '@/lib/types';

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
  SelectLabel,
} from '../ui/select';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';

import usePresenterContentPage from './usePresenterContentPage';
import HeaderPage from './blocks/HeaderPage';
import FooterPage from './blocks/FooterPage';
import { SelectGroup } from '@radix-ui/react-select';

type ModalProps = PopupProps & {
  selectedArticle: Article;
};

type NewArticleSheetProps = PopupProps;

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

function NewArticleSheet({ isOpen, onClose }: NewArticleSheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New Article</SheetTitle>
          <SheetDescription>
            Lorem ipsum dor selamet lorem ipsum dor selamet
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="ex: lorem ipsuim dor sleamet" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Categories</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Categories" />
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Article Categories</SelectLabel>
                    <SelectItem value="horror">Horror</SelectItem>
                    <SelectItem value="fantasy">Fantasy</SelectItem>
                    <SelectItem value="adventure">Adventure</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </SelectTrigger>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea placeholder="ex: lorem ipsum" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Submit</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function ContentPage() {
  const {
    query,
    isOpen,
    isNewArticleSheetOpen,
    selectedArticle,
    onNewArticleSheetOpen,
    onClose,
    onNewArticleSheetClose,
    handleInput,
    table,
  } = usePresenterContentPage();

  return (
    <main className="p-5 space-y-5">
      <HeaderPage
        query={query}
        table={table}
        handleInput={handleInput}
        onSheetOpen={onNewArticleSheetOpen}
      />
      <Suspense fallback={<LoadingSkeleton />}>
        <ItemTable table={table} />
      </Suspense>
      <FooterPage table={table} />
      <Modal
        isOpen={isOpen}
        selectedArticle={selectedArticle}
        onClose={onClose}
      />
      <NewArticleSheet
        isOpen={isNewArticleSheetOpen}
        onClose={onNewArticleSheetClose}
      />
    </main>
  );
}

export default ContentPage;
