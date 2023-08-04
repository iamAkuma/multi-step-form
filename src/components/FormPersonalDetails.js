import * as React from 'react';
import { Dialog, AppBar, ThemeProvider, createTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const theme = createTheme();

const StyledModal = styled(Dialog)`
  .MuiDialog-paper {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 20px;
`;

export default function FormPersonalDetails(props) {
  const { values, handleChange } = props;

  const continueStep = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <StyledModal open fullWidth maxWidth="sm">
          <AppBar title="Enter Personal Details" />
          <FormContainer>
            <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />
          </FormContainer>
          <ButtonsContainer>
            <Button color="secondary" variant="contained" onClick={back}>
              Back
            </Button>
            <Button color="primary" variant="contained" onClick={continueStep}>
              Continue
            </Button>
          </ButtonsContainer>
        </StyledModal>
      </>
    </ThemeProvider>
  );
}
