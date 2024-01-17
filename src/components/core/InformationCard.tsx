import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

type Props = {
  title: string;
  description: string;
  containerClassName?: string;
  children: React.ReactNode;
};

const InformationCard = ({
  title,
  description,
  containerClassName,
  children
}: Props) => {
  return (
    <Card className={containerClassName}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default React.memo(InformationCard);
