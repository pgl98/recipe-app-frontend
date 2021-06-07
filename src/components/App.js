import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import NameSearch from './NameSearch'
import Recipe from './Recipe'
import NavBar from './NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <h1>hello</h1>
        </Route>
        <Route path='/search'>
          <NameSearch />
        </Route>
        <Route path='/recipes/:recipeId'>
          <Recipe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
