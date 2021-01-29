//<---STEP 2 Import react and necessary hooks--->
import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

    return (
        //<---STEP 3 LINK TO HOME AND ORDER FORM--> STEP 4 WILL BE ON APP>JS
        <div>
            <div className='home'>
                <Link to={'/'}> 
                    Lambda Eats
                </Link>
            </div>
            <div className='orderPizza'>
                <Link to={'/pizza'}>
                    Order Your Pizza Now!
                </Link>
            </div>
        </div>
    )
}

export default Home;