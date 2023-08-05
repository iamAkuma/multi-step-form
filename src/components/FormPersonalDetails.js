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

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledModal>
        <StyledCard>
          <CardContent>
            <Title variant="h5">Enter Personal Details</Title>
            <StyledTextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              fullWidth
            />
            <StyledTextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              fullWidth
            />
            <StyledTextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              fullWidth
            />
            <StyledButton variant="contained" color="secondary" onClick={back}>
              Back
            </StyledButton>
            <StyledButton variant="contained" color="primary" onClick={continueStep}>
              Continue
            </StyledButton>
          </CardContent>
        </StyledCard>
      </StyledModal>
    </ThemeProvider>
  );
};

export default FormPersonalDetails;
