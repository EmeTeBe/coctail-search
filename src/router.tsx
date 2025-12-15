import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import FavoritesPages from "./pages/FavoritesPages";
import Layout from "./layouts/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favorites" element={<FavoritesPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
