import React from 'react'

function Pagination({totalEntry,entryPerPage,paginate}) { 
    const pageNumber=[];
    for(let i=1;i<=Math.ceil((totalEntry/entryPerPage));i++){
        pageNumber.push(i) 
        console.log(pageNumber)
    }

    return (
        <nav>
            <ul className='pagination'> 
            {pageNumber.map(number=>(
                <li style={{margin:3,backgroundColor:'lightgrey'}} key={number}>
                    <button onClick={()=>paginate(number)} > {number}</button>
                </li>
            ))}
                
            </ul>
        </nav>
    )
}

export default Pagination
