import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useAppStore } from "../stores/useAppStore";
import type { Recipe } from "../types";

export default function Modal() {
  const {
    modal,
    closeModal,
    selectedRecipe,
    handleClickFavorite,
    favoriteExists,
  } = useAppStore();

  const renderIngredients = () => {
    const ingredients: React.JSX.Element[] = [];
    for (let i = 1; i <= 6; i++) {
      const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe];
      const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe];
      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className="text-sm ml-6">
            {`${ingredient} - ${measure}`}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <>
      <Dialog
        open={modal}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur-xs bg-black/30">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-2xl"
            >
              <DialogTitle
                as="h3"
                className="text-lg text-center mb-2 font-semibold"
              >
                {selectedRecipe.strDrink}
              </DialogTitle>
              <img
                src={selectedRecipe.strDrinkThumb}
                alt={`Imagen de coctail ${selectedRecipe.strDrink}`}
                className="mx-auto h-72 object-cover shadow-custom"
              />
              <DialogTitle as="h4" className="mt-4 text-md font-semibold">
                Ingredientes y Cantidades
              </DialogTitle>
              <p className="mt-2 text-sm">{renderIngredients()}</p>
              <DialogTitle as="h4" className="mt-2 text-md font-semibold">
                Instrucciones
              </DialogTitle>
              <p className="mt-2 text-sm">{selectedRecipe.strInstructions}</p>
              <div className="mt-4 flex gap-2">
                <Button
                  className="text-white items-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold shadow-custom shadow-whit focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 w-full uppercase cursor-pointer"
                  onClick={closeModal}
                >
                  cerrar
                </Button>
                <Button
                  className="text-white items-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold shadow-inner shadow-white data-hover:bg-orange-800 data-open:bg-orange-600 w-full uppercase cursor-pointer"
                  onClick={() => {
                    handleClickFavorite(selectedRecipe);
                    closeModal();
                  }}
                >
                  {favoriteExists(selectedRecipe.idDrink)
                    ? "Eliminar de favoritos"
                    : "guardar en favoritos"}
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
