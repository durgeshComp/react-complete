import './App.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login';
import Landing from './components/landing/Landing';


function App() {
  const token = localStorage.getItem('user_token')

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
