import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// components=
import Home from './pages/Home/Home';
import FilmSection from './components/FilmSection/FilmSection';
import CharacterSection from './components/CharacterSection copy/CharacterSection';
import PlanetSection from './components/PlanetSection/PlanetSection';
import LandingPage from './pages/LandingPage/LandingPage';

export default function App() {
    return routes;
};

const routes = (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route exact path='/home' element={<Home/>}>
            <Route path='/home/films' element={<FilmSection/>}/>
            <Route path='/home/characters' element={<CharacterSection/>}/>
            <Route path='/home/planets' element={<PlanetSection/>}/>
        </Route>
    </Routes>
);