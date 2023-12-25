import React from 'react';

const CoctailItem = ({coctail}) => {
    return (
        <div>
            <img className='cocktail__img' src={cocktail.strDrinkThumb} alt="" />
            <h4 className='cocktail__title'>{cocktail.strDrink}</h4>
        </div>
    );
};

export default CoctailItem;