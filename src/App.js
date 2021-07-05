import React,{useContext} from 'react';
// import './App.css';
// import RegistrationForm from '../src/component';
// import CustomizedDialogs from '../src/component/dialog'; 
import Sidebar from './component/Sidebar'
// import './component/Sidebar.css' 
//import Drawerleft  from './Drawerleft';
import FirstStep from './component/FirstStep';
 import TemporaryDrawer from './TemporaryDrawer' 
 import SecondStep from './component/SecondStep'; 
 import ThirdStep from './component/ThirdStep'; 
 import {Stepper, StepLabel, Step} from '@material-ui/core';
import { multiStepContext } from './StepContext';  
import DisplayData from './component/DisplayData';


function App() {  
  const{currentStep,finalData}= useContext(multiStepContext);
  function showStep(step){
    switch(step){
      case 1:
        return <FirstStep/>
        case 2 :
          return <SecondStep/>
          case 3: 
          return<ThirdStep/>
    }
  }
  return ( 
    <>    
    {/* <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div> */}
   {/* ? <Drawerleft/> */}
    {/* <Sidebar/>  */}
    {/* <div className='app'>
    </div>  */}
     {/* <TemporaryDrawer/>  */}
        {/* <CustomizedDialogs title="Register Here">
      <RegistrationForm />
        </CustomizedDialogs>  
     {/* /* 
         </TemporaryDrawer> */}  
         
         
         <div className='App'> 
         <header className='App-header'>
         <h3 style ={{color:'red',textDecoration:'underline'}}>Multi Step Form</h3>
         <Stepper style={{width:'18%'}} activeStep={currentStep-1} orientation="horizontal">
         <Step>
           <StepLabel></StepLabel>
         </Step> 
         <Step>
           <StepLabel></StepLabel>
         </Step> 
         <Step>
           <StepLabel></StepLabel>
         </Step>
         </Stepper>
          
         </header> 
         {showStep(currentStep)}  
         <br/>
         {finalData.length > 0 ? <DisplayData/>:''}
         </div> 
    </>
    
  ); 
}

export default App;