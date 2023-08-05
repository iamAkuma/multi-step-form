import React from 'react';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

const SuccessMessage = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Success = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledModal>
        <StyledCard>
          <AppBar title="Success" />
          <Title>Thank You For Your Submission</Title>
          <p>You will get an email with further instructions.</p>
        </StyledCard>
      </StyledModal>
    </ThemeProvider>
  );
};

export default Success;
