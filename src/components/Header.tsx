import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
  });
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const { categories, fetchCategories, searchRecipes } = useAppStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(searchFilters).includes("")) {
      console.log("Faltan");
      return;
    }
    // Consultar recetas
    searchRecipes(searchFilters);
  };

  return (
    <header
      className={
        isHome ? "bg-[url(/bg.jpg)] bg-center bg-cover" : "bg-slate-800"
      }
    >
      <div className="container mx-auto px-5 py-12">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>

          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form
            className="md:w-1/2 lg:w-1/3 bg-orange-400 mt-15 p-5 rounded-lg
            shadow-lg space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-3">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o Ingredientes
              </label>
              <input
                id="ingredient"
                type="text"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none bg-white"
                placeholder="Nombre o ingrediente... Ej. Vodka, Tquila, Café"
                value={searchFilters.ingredient}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-3">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoría
              </label>
              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none bg-white"
                value={searchFilters.category}
                onChange={handleChange}
              >
                <option value="">-- Seleccione --</option>
                {categories.drinks.map((category) => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Buscar Recetas"
              className="cursor-pointer bg-orange-700 hover:bg-orange-800 w-full p-3 text-white font-bold uppercase rounded-lg transition-colors"
            />
          </form>
        )}
      </div>
    </header>
  );
}
