import React from 'react' 
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
       
            <div className="btn-group"> 
            
  <Link to='/'><button>Booker</button></Link> 
  <Link to='/distributer'><button>Distributer</button></Link>
  <Link to='/product'><button>Product</button></Link>
  <button>Distributer</button>
  <button>Products</button>
</div>
        
    )
}

export default Navbar
