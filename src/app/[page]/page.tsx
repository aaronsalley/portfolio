export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  return <h1>Page</h1>;
}
