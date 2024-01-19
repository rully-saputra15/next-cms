import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {
  title: string;
  description: string;
  containerClassName?: string;
  children: React.ReactNode;
};

function InformationCard({
  title,
  description,
  containerClassName,
  children,
}: Props) {
  return (
    <Card className={containerClassName}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

InformationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  containerClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

InformationCard.defaultProps = {
  containerClassName: '',
};

export default React.memo(InformationCard);
