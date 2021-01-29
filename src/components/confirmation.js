//<---STEP 2 Import react and necessary hooks--->
import React from 'react';
import {Link} from 'react-router-dom';

const Confirmation = () => {

    return(
       //<---STEP 3 LINK TO HOME PAGE--->
       <div>
       <div className='home'>
           <Link to={'/'}> 
               Lambda Eats
           </Link>
       </div>
   </div>
    )

}

export default Confirmation;