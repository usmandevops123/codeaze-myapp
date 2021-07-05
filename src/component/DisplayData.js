import React, { useContext ,useState} from 'react'
import { Box,TableContainer,TableHead,TableBody,TableCell,TableRow,Table } from '@material-ui/core'
import { multiStepContext } from '../StepContext'; 
// import { useTable,usePagination } from 'react-table'; 
// import Pagination from "@material-ui/lab/Pagination"; 
import Pagination from './Pagination'; 

export default function DisplayData(){

    const{finalData}=useContext(multiStepContext); 
    // const [page, setPage] = useState(1);
      const [currentTable,setCurrentTable]=useState(1)
      const[entryPerPage]=useState(2)   

     const indexOfLastTable= currentTable*entryPerPage;
     const indexOfFirstTable=indexOfLastTable-entryPerPage;
  
     const newData=finalData.slice(indexOfFirstTable,indexOfLastTable) 
     
     const paginate = (number)=>setCurrentTable(number)
    return(
        <> 
 
            <TableContainer style={{display:'flex',justifyContent:'center'}}>
            <Table border='1' style={{width:'70%',justifyContent:'center'}} size='small' aria-label='caption table'> 
            <TableHead>
                <TableRow style={{backgroundColor:'burlywood',color:'aliceblue'}}>
                    <TableCell>First Name </TableCell>
                    <TableCell>Last Name </TableCell>
                    <TableCell>Contact Name </TableCell>
                    <TableCell>Email Address </TableCell>
                    <TableCell>Country </TableCell>
                    <TableCell>District </TableCell>
                    <TableCell>City </TableCell>
                    <TableCell>Landmark </TableCell>
                    <TableCell>Postal Code </TableCell> 
    {/* //edit the item 
    // When user click on edit button 

    // 1: get the id and name of the data which user clicked to edit 
    // 2: set the toggle mode to submit button into edit button 
    // 3: Now update the value of input with the new updated value to edit.  
    // 4: To pass the current element Id to new state value for the reference.             */}
                
                </TableRow>
            </TableHead> 
            <TableBody>
                {newData.map((data) =>(
                    <TableRow key ={data.email}>
                    <TableCell>{data.firstname}</TableCell>
                    <TableCell>{data.lastname}</TableCell>
                    <TableCell>{data.contact}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.country}</TableCell>
                    <TableCell>{data.district}</TableCell>
                    <TableCell>{data.city}</TableCell>
                    <TableCell>{data.landmark}</TableCell>
                    <TableCell>{data.postalcode}</TableCell>
                    

                    </TableRow> 
                ))}
                <TableRow>
                  <TableCell variant='footer'>
                    <Pagination totalEntry={finalData.length}
                      entryPerPage={entryPerPage} 
                      paginate={paginate}
                    />
                  </TableCell>
                </TableRow>
            </TableBody>
            </Table>  
          
            </TableContainer> 

        {/* </div> 
        {/* <div>  */}
            {/* <button onClick={()=>previousPage()}>Previous</button> 
            <button onClick={()=>nextPage()}>Next</button> */}
         {/* </div>  */}
         {/* <Box py={3} display="flex" justifyContent="center">
          <Pagination
            count={10}
            color="secondary"
            variant="outlined"
            onChange={(e, value) => setPage(value)}
          />
        </Box> */}
        </>
    )
}