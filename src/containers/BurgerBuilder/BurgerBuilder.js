import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.6,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPirce: 4,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCounted;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPirce;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPirce: newPrice,
      ingredients: updatedIngredients,
    });
  };

  removeIngredientHandler = (type) => {};

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientsAdded={this.addIngredientHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
