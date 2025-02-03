import { useState } from "react";
import SuperheroForm from "./components/SuperheroForm";
import SuperheroList from "./components/SuperheroList";

export default function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Humble Superhero API</h1>
      <SuperheroForm onAdd={() => setRefresh((prev) => prev + 1)} />
      <SuperheroList refresh={refresh} />
    </div>
  );
}
