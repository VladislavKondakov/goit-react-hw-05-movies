import { Routes, Route } from "react-router-dom";
import { lazy } from "react";



import { Layout } from "./layout";
import { Reviews } from "./Reviews";
import { Cast } from "./Cast";
import Searchfilms from "pages/searchfilms";

const Home = lazy(() => import('../pages/home'))
const Cards = lazy(() => import('../pages/filter'))
const FilmGallery = lazy(() => import('../pages/filmsgallery') )

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route>
        <Route index element={<Home />} />
          <Route index element={<Searchfilms/>} />
        </Route>

        <Route path="/movie" element={<FilmGallery />} />
        <Route path="/movie/:id" element={<Cards />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Route>
    </Routes>
  );
};
