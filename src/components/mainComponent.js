import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          food: DISHES,
          comments: COMMENTS,
          leaders: LEADERS,
          promotions: PROMOTIONS
        };
}

    render() {    

        const HomePage = () => {
            return(
                <Home 
                    dish={this.state.food.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.state.food.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };
       
        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={ HomePage } />
                    <Route exact path='/menu' component={ () => <Menu dishes={ this.state.food } /> } />
                    <Route path='/menu/:dishId' component={ DishWithId } />
                    <Route exact path='/contactus' component={ Contact } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;