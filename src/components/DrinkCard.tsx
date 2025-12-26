import { useAppStore } from "../stores/useAppStore";
import type { Drink } from "../types";

type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  const { selectIdRecipe } = useAppStore();

  return (
    <div className="shadow-custom hover:shadow-2xl hover:scale-125 transition-shadow transform duration-300 rounded-lg overflow-hidden bg-white">
      <div className="p-4">
        <img
          src={drink.strDrinkThumb}
          alt={`imagen del coctail ${drink.strDrink}`}
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-32">
        <h2 className="text-xl text-center font-semibold">{drink.strDrink}</h2>
        <button
          type="button"
          className="bg-orange-400 w-full uppercase text-white font-semibold hover:bg-orange-600 p-1 rounded-md transition-colors cursor-pointer"
          onClick={() => selectIdRecipe(drink.idDrink)}
        >
          ver receta
        </button>
      </div>
    </div>
  );
}
