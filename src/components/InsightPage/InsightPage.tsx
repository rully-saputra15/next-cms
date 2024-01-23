import { Title } from '../core';
import ArtileInsightSection from './blocks/ArticleInsightSection';

export default function InsightPage() {
  return (
    <main className="p-5 space-y-5">
      <Title text="Insight" />
      <ArtileInsightSection />
    </main>
  );
}
