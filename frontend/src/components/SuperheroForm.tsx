import { useForm } from "react-hook-form";
import { api } from "../services/api";
import { Superhero } from "../types/superhero";

export default function SuperheroForm({ onAdd }: { onAdd: () => void }) {
  const { register, handleSubmit, reset } = useForm<Superhero>();

  const onSubmit = async (data: Superhero) => {
    await api.post("/superheroes", data);
    reset();
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("name", { required: true })} placeholder="Name" className="border p-2 w-full" />
      <input {...register("superpower", { required: true })} placeholder="Superpower" className="border p-2 w-full" />
      <input {...register("humilityScore", { required: true, min: 1, max: 10 })} type="number" placeholder="Humility Score (1-10)" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Superhero</button>
    </form>
  );
}
