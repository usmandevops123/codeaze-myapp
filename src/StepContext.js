import React , {useState} from 'react'; 
import App from './App';

const initialState=[
    {
      firstname:'Muhammad ',
      lastname:'Usman',
      contact:'2222',
      email:'usman@gamil.com',
      country:'jsajkjsks',
      district:'east',
      city:'nmss',
      landmark:'nsmshj',
      postalcode:'222'

    }, 
    {
        firstname:'Muhammad ',
        lastname:'Usman',
        contact:'2222',
        email:'usman@gamil.com',
        country:'jsajkjsks',
        district:'east',
        city:'nmss',
        landmark:'nsmshj',
        postalcode:'222'
  
      },
      {
        firstname:'Muhammad ',
        lastname:'Usman',
        contact:'2222',
        email:'usman@gamil.com',
        country:'jsajkjsks',
        district:'east',
        city:'nmss',
        landmark:'nsmshj',
        postalcode:'222'
  
      }, 
      {
        firstname:'Muhammad ',
        lastname:'Usman',
        contact:'2222',
        email:'usman@gamil.com',
        country:'jsajkjsks',
        district:'east',
        city:'nmss',
        landmark:'nsmshj',
        postalcode:'222'
  
      },{
        firstname:'Muhammad11 ',
        lastname:'abdyyyuu',
        contact:'2222',
        email:'usman@gamil.com',
        country:'jsajkjsks',
        district:'east',
        city:'nmss',
        landmark:'nsmshj',
        postalcode:'222'
  
      },{
        firstname:'Muneev',
        lastname:'Usman',
        contact:'2222',
        email:'usman@gamil.com',
        country:'jsajkjsks',
        district:'east',
        city:'nmss',
        landmark:'nsmshj',
        postalcode:'222'
  
      },{
        firstname:'abdullah',
        lastname:'Usman',
        contact:'2222',
        email:'usman@gamil.com',
        country:'jsajkjsks',
        district:'east',
        city:'nmss',
        landmark:'nsmshj',
        postalcode:'222'
  
      }, 
      {
        firstname:'ehaan ',
        lastname:'Usman',
        contact:'2222',
        email:'usman@gamil.com',
        country:'jsajkjsks',
        district:'east',
        city:'nmss',
        landmark:'nsmshj',
        postalcode:'222'
  
      },
]
export const multiStepContext = React.createContext();
 const StepContext = () =>{
    const[currentStep,setStep]=useState(1);
    const[userData,setUserData]=useState([]);
    const[finalData,setFinalData]=useState(initialState);
    
    function submitData(){
        setFinalData(finalData=>[...finalData,userData]);
        setUserData('');
        setStep(1);
    }
    return(
        <div>
            <multiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData}}>
            <App/>
            </multiStepContext.Provider>
        </div> 

    )
} 
export default StepContext;