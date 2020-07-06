import React, { Component } from 'react';
import { Media } from 'reactstrap';

import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

  constructor(props) {
      super(props);

      this.state = {
          selectedDish: null
      }
  }

  onDishSelect(d) {
      this.setState({ selectedDish: d});
  }

  renderDish(dish) {
      if (dish != null)
          return(
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }

  render() {
      const menu = this.props.dishes.map((d) => {
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={d.id}
                onClick={() => this.onDishSelect(d)}>
                <CardImg width="100%" src={d.image} alt={d.name} />
                <CardImgOverlay>
                    <CardTitle>{d.name}</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
      });

      return (
          <div className="container">
              <div className="row">
                  {menu}
              </div>
              <div className="row">
                <div  className="col-12 col-md-5 m-1">
                  {this.renderDish(this.state.selectedDish)}
                </div>
              </div>
          </div>
      );
  };
};
export default Menu;