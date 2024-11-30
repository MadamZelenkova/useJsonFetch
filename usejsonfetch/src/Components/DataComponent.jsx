import useJsonFetch from "../hooks/UseJsonFetch";

export default function DataComponent() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>Data:{JSON.stringify(data, null, 2)}</div>;
}
