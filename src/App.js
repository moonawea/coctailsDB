import React from 'react';
import IngredientPage from "./Pages/IngredientPage/IngredientPage";
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import CoctailsPage from "./Pages/CoctailsPage/CoctailsPage";


const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/cocktail/:idDrink" element={<CoctailsPage/>}/>
                <Route path="/ingredient/:name" element={<IngredientPage/>}/>
            </Routes>
        </>
    );
};

export default App;