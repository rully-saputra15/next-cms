import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-7 w-full items-center p-5">
      <div className="flex w-full flex-row gap-5 justify-between items-center">
        <Skeleton className="flex-1 h-20" />
        <Skeleton className="flex-1 h-20" />
        <Skeleton className="flex-1 h-20" />
        <Skeleton className="flex-1 h-20" />
      </div>
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
    </div>
  );
}

export default React.memo(LoadingSkeleton);
