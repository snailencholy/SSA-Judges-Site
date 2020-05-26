import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import { BroswerRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';
import Header from '../components/ui/Header';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
