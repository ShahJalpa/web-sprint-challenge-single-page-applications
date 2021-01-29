//<---STEP 2 Import react and necessary hooks--->
import React from 'react';
import {Link} from 'react-router-dom';

const OrderForm = (props) =>{
    //<---STEP 5  ADD PRPS AND EVENT LISTENER--->STEP 4 IN A APP.JS
    const {values, submit, change, disabled, errors} = props;

    //prevent page to reload from the browser.
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const onChange = (event) => {
        const{name, value, type, checked} = event.target;
        const valueToChange = type === "checkbox"? checked : value; //if else condition statement for checkbox
        change(name, valueToChange); //change the value in the form when it triggered to onChange
    }

    return (
        //<---STEP 3 LINK TO HOME PAGE--->
        <div>
            <div className='home'>
                <Link to={'/'}> 
                    Lambda Eats
                </Link>
            </div>
        {/* <---STEP 6 CREATE A FORM---> */}
            <div className="header">
                <h2> Build Your Own Pizza</h2>
                <div className="inputName">
                    <label>Name: </label>
                    <input 
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                    />
                </div>
                <div className="inputSize">
                    <label>

                    </label>
                </div>
            </div>
        </div>
    )

}

export default OrderForm;