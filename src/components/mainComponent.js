import React, { Component } from 'react';
import Menu from './menuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './dishDetailComponent';
import { Navbar, NavbarBrand } from 'reactstrap';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          food: DISHES,
          selectedDish: null
        };
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
      }
    render() {
        
        return(
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">
                        Ristorante Con Fusion
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.food} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.food.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>

        )

    }
}

export default Main;