import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/components/HomePage/HomePage'));
export default function Home() {
  return <HomePage />;
}
