import React, { PropsWithChildren } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={lightTheme}>
        <Box sx={{ minHeight: '100vh', bgcolor: 'rgb(231, 235, 240)', padding: '8px' }}>{children}</Box>
      </ThemeProvider>
    </>
  );
};

export default Layout;
