import dynamic from 'next/dynamic';

const ContentPage = dynamic(
  () => import('@/components/ContentPage/ContentPage'),
);

export default function Articles() {
  return <ContentPage />;
}
