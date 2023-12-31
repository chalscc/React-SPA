
import { DCPage, MarvelPage, SearchPage, HeroPage } from '../pages'
import { Navbar } from '../../ui'

import { Navigate, Route, Routes } from 'react-router-dom'
import React from 'react'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DCPage />} />

                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />


                {/* Cuando no encuentre la ruta, redirecciona a marvel */}
                <Route path="/*" element={<Navigate to="marvel" />} />
            </Routes>
        </div>
    </>
  )
}