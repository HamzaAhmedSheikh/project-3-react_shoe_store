import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

import { Link }  from "react-router-dom";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,    
  },
  menuButton: {
    marginRight: theme.spacing(2),    
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    marginLeft: 44,  
    fontSize: '24px',
    color: 'black'
  },
  nav: {
    color: "white",
    textDecoration: "none",
    fontSize: 18,   
  },
  logo: {
    textDecoration: "none",
    color: 'white',
    fontSize: 32,    
 },
 cart: {
    //  marginLeft: 25,
    //  marginRight: 25,     
 },
      
}));

export default function Navbar() {
  const classes = useStyles();

  return (
   
    <div className={classes.root}>
      <AppBar position="static" color='secondary'>
        <Toolbar>          
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.logo}>
              <strong >
                 NIKE
              </strong>  
            </Link> 
          </Typography>
          <Button color="inherit">
            <Link to="/"  className={classes.nav}> Home </Link> </Button>
         <Button color="inherit">
             <Link to="/shoes" className={classes.nav}> Shoes </Link>  </Button>
          <Button color="inherit">
            <Link to="/login" className={classes.nav}> Login / Register  </Link>  </Button>
            <ShoppingCartSharpIcon className={classes.cart} />
        </Toolbar>
      </AppBar>
     
    </div>

       
  );
}