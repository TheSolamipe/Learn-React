import React from 'react';
import Intro from './Components/Intro';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Header />
          <Switch>
          <Route path='/'exact component={Intro} />
          <Route path='/about' component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
   );
  }
}
export default App;
