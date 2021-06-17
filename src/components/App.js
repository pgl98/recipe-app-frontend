import {
  Switch,
  Route,
} from 'react-router-dom'

import NameSearch from './NameSearch'
import Recipe from './Recipe'
import NavBar from './NavBar'
import Container from '@material-ui/core/Container'

function App() {
  return (
    <Container>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <h1>hello</h1>
          <h1>hello</h1>
        </Route>
        <Route path='/search'>
          <NameSearch />
        </Route>
        <Route path='/recipes/:recipeId'>
          <Recipe />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
