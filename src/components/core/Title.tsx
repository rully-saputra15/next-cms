import React from 'react';

type Props = {
  text: string;
};

function Title({ text }: Props) {
  return <h1 className="text-2xl font-bold">{text}</h1>;
}

export default React.memo(Title);
