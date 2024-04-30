import { fetchArticles } from "@/data/fetch";

export default async function TestPage() {
  const data1 = await fetchArticles("no", 1);
  const data2 = await fetchArticles("en", 1);

  return (
    <main>
        <h2>Test data 1</h2>
        <code>
          {JSON.stringify(data1, null, 2)}
        </code>
        <h2>Test data 2</h2>
        <code>
          {JSON.stringify(data2, null, 2)}
        </code>
    </main>
  );
}
