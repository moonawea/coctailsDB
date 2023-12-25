import React from 'react';
import IngredientPage from "./Pages/IngredientPage/IngredientPage";
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import CoctailPage from "./Pages/CoctailPage/CoctailPage";


const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/cocktail/:idDrink" element={<CoctailPage/>}/>
                <Route path="/ingredient/:name" element={<IngredientPage/>}/>
            </Routes>
        </>
    );
};

export default App;