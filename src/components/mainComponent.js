import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          food: DISHES,
          selectedDish: null
        };
}

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {    
        return(
            <div>
                <Header />
                <Menu dishes={ this.state.food } onClick={(dishId) => this.onDishSelect(dishId) } />
                <DishDetail dish={ this.state.food.filter((dish) => dish.id === this.state.selectedDish)[0] } />
                <Footer />
            </div>
        )
    }
}

export default Main;