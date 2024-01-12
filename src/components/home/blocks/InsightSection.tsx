import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../ui/card';

type CardProps = {
  title: string;
  description: string;
  content: string;
  note: string;
};
const ContentCard = ({ title, description, content, note }: CardProps) => (
  <Card className="flex-1">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-xl font-bold">{content}</p>
      <p className="text-sm text-muted-foreground">{note}</p>
    </CardContent>
  </Card>
);
const InsightSection = () => {
  return (
    <section className="flex flex-row items-center justify-start gap-5">
      <ContentCard
        title="Title 1"
        description="Description 1"
        content="$45,231.89"
        note="+20% growth"
      />
      <ContentCard
        title="Title 2"
        description="Description 2"
        content="+2350"
        note="-10% growth"
      />
      <ContentCard
        title="Title 3"
        description="Description 3"
        content="+12,234"
        note="+200% get new subcribers"
      />
    </section>
  );
};

export default InsightSection;
