import { Navigate, Route, Routes } from "react-router-dom"

import { Navbar } from "../ui"
import { LoginPage } from "../auth"
import { DCPage, HeroesRoutes, MarvelPage } from "../heroes"
import { PrivateRoute } from "../heroes/routes/PrivateRoute"
import { PublicRoute } from "../heroes/routes/PublicRoute"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
          
          // Si el usuario ya esta logeado, lo redirecciona a la pagina principal
          // en el caso que quiera ir a /login, para ir a /login, debe deslogearse
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        <Route path="/*" element={

          //  Si el usuario no esta logeado, lo redirecciona a la pagina de login
          //  No le permitira acceder a ninguna otra pagina
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />

      </Routes>
    </>
  )
}
