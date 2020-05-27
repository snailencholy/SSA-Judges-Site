import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';
import Header from '../components/ui/Header';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route exact path="/about" component={() => <div>About Us</div>} />
            <Route exact path="/contact" component={() => <div>Contact Us</div>} />
          </Switch> 
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
