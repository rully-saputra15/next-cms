'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import InsightSection from './blocks/InsightSection';
import TableSection from './blocks/TableSection';

const HomePage = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };
  return (
    <main className="p-5 space-y-5">
      <InsightSection />
      <section>
        <h1 className="text-3xl font-bold">Articles</h1>
        <TableSection />
      </section>
      <Button
        className="self-center"
        onClick={() => handleNavigate('/articles')}
      >
        Click Me
      </Button>
    </main>
  );
};

export default HomePage;
