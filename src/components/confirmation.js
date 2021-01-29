//<---STEP 2 Import react and necessary hooks--->
import React from 'react';
import {Link} from 'react-router-dom';

const Confirmation = (props) => {
    const {order} = props;
    return(
       //<---STEP 3 LINK TO HOME PAGE--->
       <div>
       <div className='home'>
           <Link to={'/'}> 
               Lambda Eats
           </Link>
       </div>
       <div className="orderConfirmed">
           <h2>Order Confirmation</h2>
           <p>Name: {order.values.name}</p>
           <p>{order.values.size} Pizza</p>
           <p>{order.values.sauce} Sauce</p>
           <div>
                <h5>Your selected toppings</h5>
                <p>{order.values.pepperoni ? 'Pepperoni' : ''}</p>
                <p>{order.values.grilledChicken ? 'Grilled Chicken' : ''}</p>
                <p>{order.values.onion ? 'Onion' : ''}</p>
                <p>{order.values.greenPepper ? 'Green Pepper' : ''}</p>
                <p>{order.values.blackOlives ? 'Black Olives' : ''}</p>
                <p>{order.values.pineapple ? 'Pineapplei' : ''}</p>
                <p>{order.values.extraCheeze ? 'Extra Cheeze' : ''}</p>
                <p>{order.values.roastedGarlic ? 'Roasted Garlic' : ''}</p>
                <p className="gluten">{order.values.glutenFree ? 'Gluten free crust selected' : ''}</p>
           </div>
           <p>Additional Instruction: {order.values.instructions}</p>
           <p> Thank you for your order. Your order will be ready in 30 minutes.</p>
           
       </div>
   </div>
    )

}

export default Confirmation;