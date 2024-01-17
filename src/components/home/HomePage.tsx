import InsightSection from './blocks/InsightSection';
import TableSection from './blocks/TableSection';
import TopUsersComponent from './blocks/TopUsersComponent';
import { Input } from '../ui/input';
import ChartSection from './blocks/ChartSection';
import { InformationCard } from '../core';

const HomePage = () => {
  return (
    <main className="p-5 space-y-5">
      <section className="flex flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Input className="max-w-sm" placeholder="Search" />
      </section>
      <InsightSection />

      <section className="flex flex-row items-stretch justify-between gap-3 flex-wrap">
        <InformationCard
          title="Top Articles"
          description="Lorem ipsum dor selamet"
          containerClassName="flex-1"
        >
          <TableSection />
        </InformationCard>
        <InformationCard
          title="Top Users"
          description="Lorem ipsum dor selamet"
          containerClassName="flex-2"
        >
          <TopUsersComponent />
        </InformationCard>
      </section>
      <ChartSection />
    </main>
  );
};

export default HomePage;
