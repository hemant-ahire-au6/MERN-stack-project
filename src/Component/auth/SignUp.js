import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import NavBar from '../view/NavBar';
import { InputLabel, Select, MenuItem, FormControl} from "@material-ui/core"




const useStyles = makeStyles((theme) => ({
  paper: {
    margin:"auto",
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: "1px solid black",
    padding:"40px",
    width:"400px"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: "auto",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height:"50px"
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <>
    <NavBar/>
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <Paper elevation={10} className={classes.paper}>
      <div >
       
       <Typography component="h1" variant="h5" className="h1-tag" style={{marginBottom:"20px"}}>
         Sign up
       </Typography>
       <form className={classes.form} noValidate>
         <Grid container spacing={2}>
           <Grid item xs={12}>
             <TextField
               autoComplete="fname"
               name="firstName"
               variant="outlined"
               required
               fullWidth
               id="firstName"
               label="Name"
               autoFocus
             />
           </Grid>
          
           <Grid item xs={12}>
             <TextField
               variant="outlined"
               required
               fullWidth
               id="email"
               label="Email Address"
               name="email"
               autoComplete="email"
             />
           </Grid>
           <Grid item xs={12}>
             <TextField
               variant="outlined"
               required
               fullWidth
               name="password"
               label="Password"
               type="password"
               id="password"
               autoComplete="current-password"
             />
           </Grid>

           <Grid item xs={12}>
             <TextField
               autoComplete="fname"
               name="firstName"
               variant="outlined"
               required
               fullWidth
               id="firstName"
               label="Address"
               autoFocus
             />
           </Grid>

           <Grid item xs={12}>
             <TextField
               autoComplete="fname"
               name="firstName"
               variant="outlined"
               required
               fullWidth
               id="firstName"
               label="Phone"
               autoFocus
             />
           </Grid>
           <Grid item xs={12}>
              
           <FormControl style={{ width: "100%" }} >
            <InputLabel id="demo-simple-select-label">Type of user</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem value={10}>Mentor</MenuItem>
              <MenuItem value={20}>Employee</MenuItem>
             
            </Select>
          </FormControl>
           </Grid>
 
         </Grid>
         <Button
           type="submit"
           fullWidth
           variant="contained"
           color="primary"
           className={classes.submit}
         >
           Sign Up
         </Button>
         <Grid container justifyContent="flex-end">
           <Grid item>
             <Link href="/login" variant="body2">
               Already have an account? Sign in
             </Link>
           </Grid>
         </Grid>
       </form>
     </div>
   
      </Paper>
    
    </Container>
    </>
  );
}