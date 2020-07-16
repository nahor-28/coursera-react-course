import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



    function renderDish(dish) {
  
        if (dish != null)
            return(
                <Card key={dish.id}>
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
 
    };
    function renderComments(dish) {
        if (dish != null){
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {
                            dish.comments.map((item) => {
                            return (                                           
                                    <li key={item.id}>
                                        <p>{item.comment}</p>
                                        <p>--{item.author}, 
                                        {new Intl.DateTimeFormat(
                                            'en-US', 
                                            { 
                                                year: 'numeric', 
                                                month: 'short', 
                                                day: '2-digit'
                                            }).format(new Date(Date.parse(item.date)))
                                        }
                                        </p>
                                    </li>    
                                    )
                                })
                        }
                    </ul>
                </div>               
            );
        }            
        else
            return(
                <div></div>
            );
    };
  
const DishDetail = (props) => {
    return(
        <div className="container">
           
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {renderDish(props.dish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {renderComments(props.dish)}
                </div>
            </div>
        </div>
    );
}
        
export default DishDetail;