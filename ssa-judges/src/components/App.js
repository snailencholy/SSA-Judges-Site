import React, { useState } from "react";
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import LandingPage from "./LandingPage";


function App() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
         value={value}
         setValue={setValue}
         selectedIndex={selectedIndex}
         setSelectedIndex={setSelectedIndex} 
        />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/disability" component={() => <div>disability form</div>} />
            <Route exact path="/about" component={() => <div>About Us</div>} />
          </Switch> 
          <Footer
           value={value}
           setValue={setValue}
           selectedIndex={selectedIndex}
           setSelectedIndex={setSelectedIndex}
          />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
