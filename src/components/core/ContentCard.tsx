import PropTypes from 'prop-types';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type ContentCardProps = {
  title: string;
  description?: string;
  content: string;
  note: string;
  icon?: React.ReactNode;
};

export default function ContentCard({
  title,
  description,
  content,
  note,
  icon,
}: ContentCardProps) {
  return (
    <Card className="flex-1">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {icon}
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold">{content}</p>
        <p className="text-sm text-muted-foreground">{note}</p>
      </CardContent>
    </Card>
  );
}

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
};

ContentCard.defaultProps = {
  description: '',
  icon: null,
};
