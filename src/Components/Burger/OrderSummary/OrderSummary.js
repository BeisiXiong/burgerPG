import React, {Component, Fragment} from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    //this could be a functional component, does not have to be a class component
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[OrderSum will update]');
    }

    //componentWillUpdate is not required. just for a demo for improvements

    render(){

        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
            </li>
        });

        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>a delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Fragment>
        )
    }
   };

export default OrderSummary;