export default async function Page({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  return <h1>Single Service</h1>;
}
