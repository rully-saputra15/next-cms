import InsightSection from './blocks/InsightSection';
import TableSection from './blocks/TableSection';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card';
import TopUsersComponent from './blocks/TopUsersComponent';
import { Input } from '../ui/input';

const HomePage = () => {
  return (
    <main className="p-5 space-y-5">
      <section className="flex flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Input className="max-w-sm" placeholder="Search" />
      </section>
      <InsightSection />
      <section className="flex flex-row items-stretch justify-between gap-3 flex-wrap">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Top Articles</CardTitle>
            <CardDescription>Lorem ipsum dor selamet</CardDescription>
          </CardHeader>
          <CardContent>
            <TableSection />
          </CardContent>
        </Card>
        <Card className="flex-2">
          <CardHeader>
            <CardTitle>Top Users</CardTitle>
            <CardDescription>Lorem ipsum dor selamet</CardDescription>
          </CardHeader>
          <CardContent>
            <TopUsersComponent />
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default HomePage;
