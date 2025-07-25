//import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const title = 'Welcome to the new blog guys';
  const likes = 20;
  const link = "http://www.google.com";


  return (
    <Router>
        <div className="App">
        <Navbar></Navbar>
        <div className="content">
        <Switch>

          <Route path= '/'>
          <Home/>

          </Route>
        </Switch>
         
        </div>
        </div>
    </Router>
  );
}

export default App;
