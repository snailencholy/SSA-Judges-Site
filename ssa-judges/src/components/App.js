import React, { useState } from "react";
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import LandingPage from "./LandingPage";
import About from "./About";


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
            {/*<Route exact path="https://www.mobiledisabilitylawyer.com/social-security-disability-insurance/do-you-qualify-for-disability/" component={() => <div><a href="https://www.mobiledisabilitylawyer.com/social-security-disability-insurance/do-you-qualify-for-disability/"></a></div>}/>*/}
            <Route exact path="/about" component={About} />
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
