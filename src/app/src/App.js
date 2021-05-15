import React, { useState } from 'react';
import logo from './marshmallow.png';
import './App.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[100],
  },
}));

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function App() {
  const [state, setState] = useState({
    spin: false,
    fire: false,
  });
  const [time, setTime] = useState(5);
  const [pwm, setPwm] = useState(20)
  const [submit, setSubmit] = useState(false);

  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(state);
  };

  const handleChangeTime = (event) => {
    setTime(event.target.value);
    // console.log(time);
  };

  const handleChangePwm = (event, newValue) => {
    setPwm(newValue);
  };

  const handleSubmit = () => {
    setSubmit(true);
    console.log(parseInt(time));
    console.log(parseInt(pwm))
    if(state.fire){
      let route = 'fire/'+time
      console.log(route);
      fetch(route);
    }
    if(state.spin){
      let route = 'pwm/'+pwm+'/'+time
      console.log(route);
      fetch(route);
    }
    
  };
  
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Marshmallow Roaster</h2>
      </div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<IOSSwitch checked={state.spin} onChange={handleChange} name="spin" />}
              label="Spinning"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<IOSSwitch checked={state.fire} onChange={handleChange} name="fire" />}
              label="Fire"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs />
          <Grid item xs={4}>
            <Slider value={pwm} onChange={handleChangePwm} aria-labelledby="continuous-slider" />
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Seconds" variant="outlined" value={time} onChange={handleChangeTime}/>
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
      <div>
        <Button onClick={handleSubmit}>Start roasting!</Button>
      </div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={8}>
            <img src={'stream'} width="600" height="600"/>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
      <footer className={classes.footer}>
        <Typography variant="body2">
          {'Copyright © '}
          <Link color="inherit" href="">
            大肆老人吃飯糰
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        <Typography variant="body2" >
          <Link color="inherit" href="https://make.ntuee.org/">
            2021 MakeNTU
          </Link>
        </Typography>
      </footer>
    </div>
  );
  
}

export default App;
