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
};
const ContentCard = ({ title, description, content }: CardProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <p>Card footer</p>
      <p>Card footer</p>
    </CardFooter>
  </Card>
);
const InsightSection = () => {
  return (
    <section className="flex flex-row items-center justify-center gap-5">
      <ContentCard
        title="Title 1"
        description="Description 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis efficitur eros, vel fermentum nisl efficitur vitae. Ut non tellus orci. Proin molestie sed quam at imperdiet. Nulla pellentesque at quam et pulvinar. "
      />
      <ContentCard
        title="Title 2"
        description="Description 2"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis efficitur eros, vel fermentum nisl efficitur vitae. Ut non tellus orci. Proin molestie sed quam at imperdiet. Nulla pellentesque at quam et pulvinar. "
      />
      <ContentCard
        title="Title 3"
        description="Description 3"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis efficitur eros, vel fermentum nisl efficitur vitae. Ut non tellus orci. Proin molestie sed quam at imperdiet. Nulla pellentesque at quam et pulvinar. "
      />
    </section>
  );
};

export default InsightSection;
