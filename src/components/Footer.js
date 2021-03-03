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
    backgroundImage: 'linear-gradient(to right, #1F1C2C 0%, #565175  51%, #1F1C2C  100%)',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: 'white',
    fontSize: '18px',
    boxShadow: '0 0 10px #616161',
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
        <Fade left>
          <HashLink smooth to='/resume#'>
            <Button className={classes.button} variant="contained" color="primary" >
              My Resume
            </Button>
          </HashLink>
        </Fade>
        <Fade right>
          <HashLink smooth to='/music#'>
            <Button className={classes.button} variant="contained" color="secondary" >
              My Music
            </Button>
          </HashLink>
        </Fade>
      </div>
      <Fade bottom cascade><h3 id='footer'>© 2021 Anson He</h3></Fade>
    </div>
  )
}