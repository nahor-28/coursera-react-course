import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import DishDetail from './DishDetailComponent';

class Menu extends Component {

 

  render() {
      const menu = this.props.dishes.map((d) => {
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={d.id} onClick={() => this.props.onClick(d.id)}>
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
        </div>
         
      );
  };
};
export default Menu;