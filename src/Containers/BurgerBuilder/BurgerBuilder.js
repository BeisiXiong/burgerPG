import React, {Component, Fragment} from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

//global constance, all letters in capital

class BurgerBuilder extends Component {
    /*constructor(props) {
        super(props);
        this.state = {...}
    }*/
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        /*const ingredients = {
            ...this.state.ingredients
        }; //turn it into arr again*/
        const sum = Object.keys(ingredients) //create an arr of string salad, bacon, cheese...but we need the amount.
            .map(igKey => {
               return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el; //el is the value of the ingredint
            },0); // turn it into a single nu, the sum of all ingredients
        this.setState({purchasable: sum > 0}) // either true or false

    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {
             ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if( oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler =()=> {
        this.setState({purchasing: true})

    }

    purchaseCancelHandler =()=> {
        this.setState({purchasing: false})

    }

    purchaseContinueHandler =()=> {
        alert('You Continue');
    }

    render() {
            const disabledInfo =  {
              ...this.state.ingredients
            }; //create a new obj where I distribute the properties of this state ingredients
               //bascially copied the ingredients in the state in a mutable way
            for(let key in disabledInfo){ //loop thru all keys in disableInfo
                disabledInfo[key] = disabledInfo[key] <= 0 //this returns true or false if true should be disabled
            } //check if this is 0 or less
            // update the disableInfo[key], no salad:0, .. but simply wehther it should be disable or not
            // e.g. {salad: true, meat: false} .....
         return (
             <Fragment>
                 <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   <OrderSummary ingredients={this.state.ingredients}
                                 price={this.state.totalPrice}
                                 purchaseCanceled={this.purchaseCancelHandler}
                                 purchaseContinue={this.purchaseContinueHandler}
                   />
                 </Modal>
                <Burger ingredients={this.state.ingredients}  />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}  //set a disabled property and pass disabledInfo to it
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                />
             </Fragment>
         );
    }
}

export default BurgerBuilder;