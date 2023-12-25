import {useEffect, useState} from "react";
import axios from "axios";
import CocktailList from "../../Components/CoctailList/CoctailList";


const HomePage=()=> {

    const[cocktails,setCocktails]=useState([])

    useEffect(() => {
        axios('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
            .then(({data})=> setCocktails(data.drinks))
    }, []);

    return (
        <>
            <div className={'container'}>
                <CocktailList cocktails={cocktails}/>
            </div>
        </>
    )
}

export default HomePage;