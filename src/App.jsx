import './App.css';
import { EntryProvider } from './context/EntryContext';
import Login from './views/Auth/Login';
import Home from './views/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <EntryProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </EntryProvider>
    </div>
  );
}

export default App;
