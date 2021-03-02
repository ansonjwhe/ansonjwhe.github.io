import React from 'react'
import { HashLink } from 'react-router-hash-link';
import Fade from 'react-reveal'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './Footer.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    backgroundImage: 'linear-gradient(to right, #1F1C2C 0%, #928DAB  51%, #1F1C2C  100%)',
    margin: '10px 50px',
    padding: '15px 45px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: 'white',
    boxShadow: '0 0 10px #eee',
    borderRadius: '30px',
    display: 'block',
    cursor: 'pointer',

    "&:hover": {
      backgroundPosition: 'right center',
      color: '#fff',
      textDecoration: 'none'
    }
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div id='footer-container'>
      <div id='button-container' className={classes.root}>
        <HashLink smooth to='/resume#'>
          <Button className={classes.button} variant="contained" color="primary" >
            My Resume
          </Button>
        </HashLink>
        <HashLink smooth to='/music#'>
          <Button className={classes.button} variant="contained" color="secondary" >
            My Music
          </Button>
        </HashLink>
      </div>
      <Fade bottom cascade><h3 id='footer'>© 2021 Anson He</h3></Fade>
    </div>
  )
}