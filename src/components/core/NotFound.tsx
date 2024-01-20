import React from 'react';
import { CgSmileSad } from 'react-icons/cg';

function NotFound() {
  return (
    <div className="flex flex-1 flex-col gap-3 justify-center items-center w-full h-full p-10">
      <CgSmileSad className="text-5xl text-muted-foreground" />
      <h1 className="text-xl text-muted-foreground">{`Sorry, We couldn't find it`}</h1>
    </div>
  );
}

export default NotFound;
