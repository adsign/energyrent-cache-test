import { fetchArticles } from "@/data/fetch";

export default async function Home({ params }: { params: { lang: string; } }) {
  const data1 = await fetchArticles("no", 10);
  const data2 = await fetchArticles("en", 10);

  return (
    <main>
        <h2>From route: locale {params.lang}</h2>
        <h3>data1</h3>
        <code>
          {data1.length}
        </code>
        <h3>data2</h3>
        <code>
          {data2.length}
        </code>
    </main>
  );
}
