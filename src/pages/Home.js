// import React from 'react'; 
// import {Link} from 'react-router-dom'



// function Home() {
//   return (
//     <div className='btn-group'>
//      <button><Link to ='/'> Booker </Link>   </button>
      
//      <button><Link to ='/distributer'> Distributer </Link>   </button>
//       <button><Link to ='/products'> products </Link>   </button>
      
//     </div>
//   );
// }

// export default Home; 
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom' 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupOrientation() {
  const classes = useStyles();

  return ( 
    
    <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button><Link to ='/'> Booker</Link></Button>
        <Button><Link to ='/distributer'> Distributer </Link> </Button>
        <Button><Link to ='/products'> Products </Link></Button>
      </ButtonGroup>  
     
      
      </div>
  );
}