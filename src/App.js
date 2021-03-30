import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './components/Main';
import Game from './components/game/Game';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/game/:id" children={<Game />} />
      </Switch>
    </Router>
  );
}

export default App;
