import React from 'react' 
import {SidebarData} from './SidebarData' 
// import'../component/Sidebar.css';
import '../App.css';
function Sidebar() {
    return (
        <div className='Sidebar'>
        <ul className="SidebarList" >
            { SidebarData.map((val,key)=>{
                return(
                    <li
                        key={key}
                        className="row"
                        id={window.location.pathname === val.Link ? "active":""}
                        onClick={()=>{
                            window.location.pathname=val.Link;
                        }} 
                        >
                        <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                    </li>
                );
            })}
        </ul>
            
        </div>
    );
}

 
 export default Sidebar
