//import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';

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

          <Route exact path= "/">
          <Home/>

          </Route>

           <Route path= "/create">
            <Create />

          </Route>

        </Switch>
         
        </div>
        </div>
    </Router>
  );
}

export default App;
