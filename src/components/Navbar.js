import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    textAlign: 'center',
  },
  title: {
    flexGrow: 1,
  }, 
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color='transparent'>
        <Toolbar className={classes.center}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit"> <Link to='/'> Home </Link> </Button>
          <Button color="inherit"> <Link to='products'> Men' Shoes </Link> </Button>
          <Button color="inherit"> <Link to='products'> All Shoes </Link> </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}