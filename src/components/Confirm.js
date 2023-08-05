import React from 'react';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { List, ListItem, ListItemText } from '@mui/material/';
import Button from '@mui/material/Button';

const theme = createTheme();

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const StyledButton = styled(Button)`
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }
`;

const Confirm = ({ values, nextStep, prevStep }) => {
  const continueStep = (e) => {
    e.preventDefault();
    // PROCESS FORM //
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
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={values.firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={values.lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={values.email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={values.occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={values.city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={values.bio} />
            </ListItem>
          </List>
          <StyledButton variant="contained" color="secondary" onClick={back}>
            Back
          </StyledButton>
          <StyledButton variant="contained" color="primary" onClick={continueStep}>
            Confirm & Continue
          </StyledButton>
        </StyledCard>
      </StyledModal>
    </ThemeProvider>
  );
};

export default Confirm;
