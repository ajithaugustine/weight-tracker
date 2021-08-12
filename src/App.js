import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Signin} exact/> 
        <Route path='/home' component={Home} exact/> 
        <Route path='/signup' component={Signup} exact/> 
      </Router>
    </div>
  );
}

export default App;
