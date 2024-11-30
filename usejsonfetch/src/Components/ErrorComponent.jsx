import useJsonFetch from "../hooks/UseJsonFetch";

export default function ErrorComponent() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/error");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>Error:{JSON.stringify(data, null, 2)}</div>;
}
