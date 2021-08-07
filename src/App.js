import'./App.css';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Home from './component/Home';
import {
  BrowserRouter as Router, Switch,
  Route,
  Link
} from "react-router-dom";



export const App = () => {
  return(
    <div className="App">
      <div className='text-center'>
          <div className='children'>
            <Router>
              <div className="App">
              <nav>

                <Link to="/">Home</Link>
                <Link to= "/about">About</Link>
                <Link to= "/contact">Contact</Link>
                <Link to= "/login">Login</Link>
                </nav>

                <Switch>
                
                <Route path= "/about" component={About} />
                <Route path= "/contact" component={Contact} />
                <Route path= "/login" component={Login} />
                <Route exact path= "/" component={Home} />
                </Switch>
              </div>
            </Router>
  
            </div>
    
        </div>
      </div>
    );}
    export default App;
