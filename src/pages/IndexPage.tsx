import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

export default function IndexPage() {
  const { drinks } = useAppStore();

  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks]);

  return (
    <>
      <h1 className="text-4xl font-extrabold px-4">Recetas</h1>

      {hasDrinks ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {drinks.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          No hay recetas aún, utiliza el formulario de búsqueda para encontrar
          bebidas.
        </p>
      )}
    </>
  );
}
