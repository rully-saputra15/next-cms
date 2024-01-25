import dynamic from 'next/dynamic';

const AnalyticsPage = dynamic(
  () => import('@/components/AnalyticsPage/AnalyticsPage'),
);

export default function Insight() {
  return <AnalyticsPage />;
}
