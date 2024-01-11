"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import InsightSection from "./blocks/InsightSection";

const HomePage = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };
  return (
    <main>
      <InsightSection />
      <Button onClick={() => handleNavigate("/articles")}>Click Me</Button>
    </main>
  );
};

export default HomePage;
