import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Layout from "./layouts/Layout";
import { lazy, Suspense } from "react";
const FavoritesPages = lazy(() => import("./pages/FavoritesPages"));
const GenerateAI = lazy(() => import("./pages/GenerateAI"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route
            path="/favorites"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <FavoritesPages />
              </Suspense>
            }
          />
          <Route
            path="/generate"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <GenerateAI />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
