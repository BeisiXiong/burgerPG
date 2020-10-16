import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
// state in Burgerbuilder is an object,
// but here we expect "props"
// transform it into arr
// keys() returns us an arr
const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {   //igKey == ingredientKey
            return [...Array(props.ingredients[igKey])].map((_, i) => { // an arr with two elements
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el );
        }, [])

    ;  //it's just a way to transform an object
             // of key value pairs into an array of burger ingredients where
             // the value of that object is important for me to decide how many ingredients
             // I need and the keys important for which type of ingredient I need.
    if (transformedIngredients.length === 0 ){
        transformedIngredients = <p>Please Start Adding Ingredients</p>
    }




     return (
         <div className={classes.Burger}>
             <BurgerIngredient type="bread-top" />
             {transformedIngredients}
             <BurgerIngredient type="bread-bottom" />

         </div>
     );
};

export default burger;