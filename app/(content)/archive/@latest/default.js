import { NewsList } from "@/components";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest News Page</h2>
      <NewsList news={latestNews} />
    </>
  );
}
