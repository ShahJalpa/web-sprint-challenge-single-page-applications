//<---STEP 2 Import react and necessary hooks--->
import React from 'react';
import {Link} from 'react-router-dom';

const OrderForm = (props) =>{
    //<---STEP 5  ADD PRPS AND EVENT LISTENER--->STEP 4 IN A APP.JS
    const {values, submit, change, buttonDissabled, errors} = props;

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
        {/* <---STEP 10 CREATE A FORM---> */}
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
                    <label>Size: </label>
                    <select onChange={onChange} value={values.size} name="size">
                        <option value="">Select your pizza size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="extra-large">Extra Large</option>
                    </select> 
                </div>
                {/* //RADIO BUTTONS */}
                <div className="Sauce">
                    <h3>Choose your favorite sauce</h3>
                    <div className="inputSauce">
                        <label> Original Red
                            <input 
                                type="radio"
                                name="sauce"
                                value="originalRed"
                                checked={values.sauce === "originalRed"}
                                onChange={onChange}
                            />
                        </label>
                        <label> Garlic Ranch
                            <input 
                                type="radio"
                                name="sauce"
                                value="garlicRanch"
                                checked={values.sauce === "garlicRanch"}
                                onChange={onChange}
                            />
                        </label>
                        <label> BBQ Sauce
                            <input 
                                type="radio"
                                name="sauce"
                                value="bbqSauce"
                                checked={values.sauce === "bbqSauce"}
                                onChange={onChange}
                            />
                        </label>
                        <label> Spinech Alfredo
                            <input 
                                type="radio"
                                name="sauce"
                                value="spinechAlfredo"
                                checked={values.sauce === "spinechAlfredo"}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                </div>
                {/* //CHECK BOXES */}
                <div className="toppings">
                    <h3>Add ypur toppings</h3>
                    <p>Choose up to 4</p>
                    <div className="inputToppings>">
                        <label>
                            Pepperoni
                            <input
                                type="checkbox"
                                name="pepperoni"
                                checked={values.pepperoni}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Grilled Chicken
                            <input
                                type="checkbox"
                                name="grilledChicken"
                                checked={values.grilledChicken}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Onion
                            <input
                                type="checkbox"
                                name="onion"
                                checked={values.onion}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Green Pepper
                            <input
                                type="checkbox"
                                name="greenPepper"
                                checked={values.greenPepper}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Black Olives
                            <input
                                type="checkbox"
                                name="blackOlives"
                                checked={values.blackOlives}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Pineapple
                            <input
                                type="checkbox"
                                name="pineapple"
                                checked={values.pineapple}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Extra Cheeze
                            <input
                                type="checkbox"
                                name="extraCheeze"
                                checked={values.extraCheeze}
                                onChange={onChange}
                            />
                        </label>
                        <label>
                            Roasted Garlic
                            <input
                                type="checkbox"
                                name="roastedGarlic"
                                checked={values.roastedGarlic}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="inputGlutenFree">
                    <h3>Coice of Substitute</h3>
                    <label>
                        Gluten Free Crust
                            <input
                                type="checkbox"
                                name="glutenFree"
                                checked={values.glutenFree}
                                onChange={onChange}
                            />
                    </label>
                </div>
                <div className="inputInstruction">
                    <h3>Special Instruction</h3>
                        <input 
                            name="instructions"
                            type="text"
                            value={values.instructions}
                            onChange={onChange}
                        />
                </div>
                <div className="submitButton">
                    <button disabled={buttonDissabled}>Submit Your Order!</button>
                </div>
            </div>
        </div>
    )

}

export default OrderForm;