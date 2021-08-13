import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import Signin from './Components/Signin/Signin';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Signin} exact/> 
        <Route path='/home' component={Home} exact/> 
   
      </Router>
    </div>
  );
}

export default App;
