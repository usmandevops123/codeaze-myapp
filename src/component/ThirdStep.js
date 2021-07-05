import React,{useContext} from 'react' 
import {Button,TextField} from '@material-ui/core'
import { multiStepContext } from '../StepContext'

export default function ThirdStep() { 
    const {setStep,userData,setUserData,submitData}=useContext(multiStepContext);
    return (
        <div>
            <div>
        <TextField label='city ' value={userData['city']}onChange={(e)=>setUserData({...userData,"city":e.target.value})} margin='normal' variant='outlined' color='secondary'/>  
        </div> 
        <div>
        <TextField label='Landmark' value={userData['landmark']}onChange={(e)=>setUserData({...userData,"landmark":e.target.value})} margin='normal' variant='outlined' color='secondary'/> 
        </div> 
        <div>
        <TextField label='Postal Code' value={userData['postalcode']}onChange={(e)=>setUserData({...userData,"postalcode":e.target.value})} margin='normal' variant='outlined' color='secondary'/>  
        </div> 
        <Button  variant ='contained' onClick={()=>setStep(2)} color ='primary'>Back</Button>
         <Button  variant ='contained' onClick={submitData} color ='primary'>Submit</Button>


        </div>
    )
}
