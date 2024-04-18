import React from 'react'
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const MenuItem = ({ dish, onSelectDish }) => {
  return (
    <div>
    <Card inverse style={{padding:10, margin:10, cursor:'pointer'}} onClick={() => onSelectDish(dish)}>
      <CardImg
        alt= {dish.name}
        src= {dish.image}
        style={{
        
          opacity: 0.75,
        }}
        width="100%"
      />
      <CardImgOverlay>
        <CardTitle tag="h5" style={{fontSize:25, fontweight: 'bold', color: '#000'}}> { dish.name } </CardTitle>
      
      </CardImgOverlay>
    </Card>
  </div>
  );
}

export default MenuItem;
