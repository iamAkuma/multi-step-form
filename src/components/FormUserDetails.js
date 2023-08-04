import React from 'react';
import styled from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const theme = createTheme();

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 15px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const FormUserDetails = ({ values, handleChange, nextStep }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledModal>
        <Title>Enter User Details</Title>
        <StyledTextField
          placeholder="Enter Your First Name"
          label="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          fullWidth
        />
        <StyledTextField
          placeholder="Enter Your Last Name"
          label="Last Name"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
          fullWidth
        />
        <StyledTextField
          placeholder="Enter Your Email"
          label="Email"
          onChange={handleChange('email')}
          defaultValue={values.email}
          fullWidth
        />
        <StyledButton color="primary" variant="contained" onClick={continueStep}>
          Continue
        </StyledButton>
      </StyledModal>
    </ThemeProvider>
  );
};

export default FormUserDetails;
