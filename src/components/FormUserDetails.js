import React from 'react';
import styled from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const theme = createTheme();

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
`;

const Title = styled(Typography)`
  margin-bottom: 20px;
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
        <StyledCard>
          <CardContent>
            <Title variant="h5">Enter User Details</Title>
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
          </CardContent>
        </StyledCard>
      </StyledModal>
    </ThemeProvider>
  );
};

export default FormUserDetails;
