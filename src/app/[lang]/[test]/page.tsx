import { fetchArticles } from "@/data/fetch";
import { notFound } from "next/navigation";

export default async function TestPage({ params }: { params: { lang: string; test: string; } }) {
  const data1 = await fetchArticles("no", 10);
  const data2 = await fetchArticles("en", 10);

  if (params.test === 'notfound') {
    return notFound();
  }

  return (
    <main>
        <h2>From route: locale {params.lang} slug {params.test}</h2>
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
