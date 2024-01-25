'use client';

import React from 'react';
import { DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';

import ArtileInsightSection from './blocks/ArticleInsightSection';
import HeaderPage from './blocks/HeaderPage';

export default function AnalyticsPage() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 1, 10),
    to: addDays(new Date(2023, 1, 10), 7),
  });

  return (
    <main className="p-5 space-y-5">
      <HeaderPage date={date} setDate={setDate} />
      <ArtileInsightSection />
    </main>
  );
}
