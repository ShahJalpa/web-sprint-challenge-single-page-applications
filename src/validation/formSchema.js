//STEP 12
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
          .string ()
          .required("Name is required")
          .min(3, "Name must be atleast 3 character long"),
    size: yup
          .string()
          .required("Please select your pizza size")
          .oneOf(["small", "medium", "large", "extra-large"]),
    sauce: yup
           .string()
           .required("Please select your faorite sauce")
           .oneOf(["originalRed", "garlicRanch", "bbqSauce", "spinechAlfredo"]),
    pepperoni: yup
           .boolean(),  
    grilledChicken: yup
           .boolean(),
    onion: yup
           .boolean(), 
    greenPeeper: yup
           .boolean(), 
    blackOlives: yup
           .boolean(), 
    pineapple: yup
           .boolean(), 
    extraCheeze: yup
           .boolean(), 
    roastedGarlic: yup
           .boolean(), 
    gluterFree: yup
           .boolean(), 
    instructions: yup
           .string()
          
})

export default formSchema