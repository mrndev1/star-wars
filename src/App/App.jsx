import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// components=
import Home from './pages/Home/Home';
import FilmSection from './components/FilmSection/FilmSection';
import CharacterSection from './components/CharacterSection copy/CharacterSection';
import PlanetSection from './components/PlanetSection/PlanetSection';


export default function App() {
    return routes;
};

const routes = (
    <Routes>
        <Route exact path='/' element={<Home/>}>
            <Route path='/films' element={<FilmSection/>}/>
            <Route path='/characters' element={<CharacterSection/>}/>
            <Route path='/planets' element={<PlanetSection/>}/>
        </Route>
    </Routes>
);