export default async function Page({
  params,
}: {
  params: Promise<{ category: string; insight: string }>;
}) {
  return <h1>Single Insight</h1>;
}
