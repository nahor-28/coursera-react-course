import React from 'react';

import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({d, onClick}) {
  return(
    <Card>
          <CardImg width="100%" src={ d.image } alt={ d.name } />
          <CardImgOverlay>
              <CardTitle>{ d.name }</CardTitle>
          </CardImgOverlay>
    </Card>
  );
}

const Menu = (props) => {
    const menu = props.dishes.map(  dish  => {
      return (
        <div  className="col-12 col-md-5 m-1" key={dish.id}>
          <RenderMenuItem d={dish} onClick={props.onClick} />
        </div>
      );
  });

  return (
    <div className="container">
      <div className="row">
          { menu }
      </div>      
    </div>
    
  );
} 

      


export default Menu;