//<---STEP 2 IMPORT ALL NECESSARY HOOKS, COMPONENTS,VALIDATION, TESTING, CSS--->
import React, {useEffect, useState} from 'react'; //importing state and effect
import axios from 'axios'; //importing axios
import {Route, Switch, useHistory} from 'react-router-dom' //importing Route, Link, and History
import * as yup from 'yup'; //import everything as yup from yup

//<---Componenet-->
import Home from './components/Home'
import OrderForm from './components/Form'; 
import Confirmation from './components/confirmation'

//<--Validation-->
import schema from './validation/formSchema'; 

//<--CSS-->
import './App.css'; // importing App.css

//STEP 6 SET THE INITIAL VALUES AND ERRORS
const initialOrderFormValues = {
  name: "", //Text inputs string
  size: "", //dropdown string
  sauce:"", //radio button string

  //checkbox boolean values
  pepperoni: false,
  grilledChicken: false,
  onion: false,
  greenPepper: false,

  blackOlives: false,
  pineapple: false,
  extraCheeze: false,
  roastedGarlic: false,

  glutenFree: false,

  instructions:"" //text input string
}

const initialFormErrors ={
  name: "",
  size: "",
  sauce: "",
}

//STEP 7 SET THE INITIAL FINAL ORDER AS AN EMPTY ARRAY AND SUBMIT BUTTON DISABLE TRUE
const initialFinalOrder = [];
const initialButtonDisabled = true;

//import App 
const App = () => {

  //STEP 8 STATE HOOK
  const [orderFormVales, setOrderFormValues] = useState(initialOrderFormValues);
  const [fromErrors, setFormErrors] = useState(initialFormErrors);
  const [finalOrder, setFinalOrder] = useState(initialFinalOrder);
  const [buttonDissabled, setButtonDisabled] = useState(initialButtonDisabled);

  //STEP 9 WHEN USER HIT THE SUBMIT BUTTON //STEP 10 IN FORM.JS
  const submitForm = () => {
    //updating the new order
    const newOrder = {
      name: orderFormVales.name,
      size: orderFormVales.size,
      sauce: orderFormVales.sauce,

      pepperoni: orderFormVales.pepperoni,
      grilledChicken: orderFormVales.grilledChicken,
      onion: orderFormVales.onion,
      greenPepper: orderFormVales.greenPepper,

      blackOlives: orderFormVales.blackOlives,
      pineapple: orderFormVales.pineapple,
      extraCheeze: orderFormVales.extraCheeze,
      roastedGarlic: orderFormVales.roastedGarlic,

      glutenFree: orderFormVales.glutenFree,

      instructions: orderFormVales.instructions
    }
    //post the new order into data (storing data)
    //postNewOrder(newOrder)
  }

  //STEP 10 POST NEW ORDER IN TO DATA STORAGE
  // const postNewOrder = (newOrder) => {
  //   axios
  //   .post()
  // }

  //<---STEP 4 SWITCH AND ROUTES ADDED HERE---> //STEP 5 IN THE FORM>JS
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/pizza'>
          <OrderForm
            values = {orderFormVales}
          />
        </Route>
      </Switch>
      <Route path='/orderConfirmation'>
        <Confirmation />
      </Route>
    </div>
  
  );
};
export default App;
