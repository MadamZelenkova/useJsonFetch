import useJsonFetch from "../hooks/UseJsonFetch";

export default function LoadingComponent() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>Loading:{JSON.stringify(data, null, 2)}</div>;
}
