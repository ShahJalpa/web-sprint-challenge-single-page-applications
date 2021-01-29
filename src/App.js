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
const initialDisabled = true;

//import App 
const App = () => {

  //STEP 8 STATE HOOK
  const [orderFormVales, setOrderFormValues] = useState(initialOrderFormValues);
  const [fromErrors, setFormErrors] = useState(initialFormErrors);
  const [finalOrder, setFinalOrder] = useState(initialFinalOrder);
  const [disabled, setButtonDisabled] = useState(initialDisabled);
  const history = useHistory();

   //STEP 9 WHEN USER HIT THE SUBMIT BUTTON //STEP 10 IN FORM.JS
  const submitForm = () => {
    //updating the new order
    const newOrder = {
      name: orderFormVales.name.trim(),
      size: orderFormVales.size,
      sauce: orderFormVales.sauce,

      toppings: ["pepperoni", "grilledChicken", "onion", "greenPepper", "blackOlives", "pineapple", "extraCheeze", "roastedGarlic"].filter(
        (topping) => orderFormVales[topping]
      ),
      // pepperoni: orderFormVales.pepperoni,
      // grilledChicken: orderFormVales.grilledChicken,
      // onion: orderFormVales.onion,
      // greenPepper: orderFormVales.greenPepper,

      // blackOlives: orderFormVales.blackOlives,
      // pineapple: orderFormVales.pineapple,
      // extraCheeze: orderFormVales.extraCheeze,
      // roastedGarlic: orderFormVales.roastedGarlic,

      // glutenFree: orderFormVales.glutenFree,

      instructions: orderFormVales.instructions.trim()
    }
    //post the new order into data (storing data)
    postNewOrder(newOrder)
  }

  //STEP 11 POST NEW ORDER IN TO DATA STORAGE //STEP 12 in in formSchema.js
  const postNewOrder = (newOrder) => {
    axios
    .post('https://reqres.in/api/users', newOrder)
    .then((response) => {
      setFinalOrder(response.data)
      console.log(response)
    })
    .catch((error) => {
      console.log('Oh O! you are misiing somthing in order form', error)
    })
    .finally(() => {
      setOrderFormValues(initialOrderFormValues) //this will make the form clear after the order has been sent
      history.push('/confirmation')
    })
  }

   //STEP 13 form validation
   const inputChange = (name, value) => {
     yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...fromErrors, [name]: "",
        })
      })
      .catch((error) => {
        setFormErrors({
          ...fromErrors,[name]: error.errors[0],
        })
      });

      setOrderFormValues({
        ...orderFormVales, [name]:value
      })

   }

   //STEP 14 SUBMIT BUTTON DISABLED FUNCTIONALITY
   useEffect(() => {
     schema
      .isValid(orderFormVales)
      .then((valid) => {
        setButtonDisabled(!valid)
      }, [orderFormVales])
   })

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
            change = {inputChange}
            subbmit = {submitForm}
            disabled = {disabled}
            errors = {fromErrors}
          />
        </Route>
      </Switch>
      <Route path='/orderConfirmation'>
        <Confirmation order = {finalOrder}/>
      </Route>
    </div>
  
  );
};
export default App;
