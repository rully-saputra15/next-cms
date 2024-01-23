import dynamic from 'next/dynamic';

const InsightPage = dynamic(
  () => import('@/components/InsightPage/InsightPage'),
);

export default function Insight() {
  return <InsightPage />;
}
