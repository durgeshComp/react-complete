import './App.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login';
import Landing from './components/landing/Landing';
import { useHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/landing" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Home} />
        </Switch>
      </Router>

    </Provider>

  );
}

export default App;
