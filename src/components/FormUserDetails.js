import React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const theme = createTheme();

const FormUserDetails = ({ values, handleChange, nextStep }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar position="static" color="default">
            Enter User Details
          </AppBar>
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            margin="normal"
            fullWidth
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            onClick={continueStep}
          >
            Continue
          </Button>
        </Dialog>
      </>
    </ThemeProvider>
  );
};

export default FormUserDetails;
