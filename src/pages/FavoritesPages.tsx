import { useMemo } from "react";
import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export default function FavoritesPages() {
  const { favorites } = useAppStore();

  const hasFavorites = useMemo(() => favorites.length, [favorites]);

  return (
    <>
      <h1 className="text-4xl font-extrabold px-4">Favoritos</h1>
      {hasFavorites ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {favorites.map((fav) => (
            <DrinkCard key={fav.idDrink} drink={fav} />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          No hay ningún favorito guardado aún
        </p>
      )}
    </>
  );
}
