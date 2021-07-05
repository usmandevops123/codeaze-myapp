import React from 'react';
import { makeStyles } from "@material-ui/core/styles" 
import RegistrationForm from '../src/component';
 import CustomizedDialogs from '../src/component/dialog';  
 import Distributer from './pages/Distributer'
 import { Signup } from '../src/component/Signup';  
 import { DistributerForm } from '../src/component/DistributerForm';
 import { ProductForm } from './component/ProductForm';
 import rocketImg from './assets/rocket.png'; 
 import '../src/component/Form.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))






function Drawerleft() {
    const classes = useStyles();
    return (
      <Router>
        <div style={{ display: 'flex' }}>
          <Drawer
            style={{ width: '220px' }}
            variant="persistent"
            anchor="left"
            open={true}
            classes={{ paper: classes.drawerPaper }}
          >
            <List>
              <Link to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Booker"} />
                </ListItem>
              </Link>
              <Link to="/distributer" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Distributer"} />
                </ListItem>
              </Link> 
              <Link to="/product" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Product"} />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <Switch>  
            <Route exact path="/" 
             component={Distributer}
            >
              <Container>
               <CustomizedDialogs  title="Register Here"> 
               <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
      {/* <RegistrationForm /> */}
        </CustomizedDialogs>   
              </Container>
            </Route>
            <Route exact path="/distributer">
              <Container> 
               <CustomizedDialogs  title="Register Here"> 
               <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <DistributerForm />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>

        </CustomizedDialogs>  
                
              </Container>
            </Route> 
            <Route exact path="/product">
              <Container> 
               <CustomizedDialogs  title="Register Here"> 
               <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <ProductForm />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>

        </CustomizedDialogs>  
                
              </Container>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default Drawerleft;