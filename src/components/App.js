import { useState, useEffect } from 'react'
import axios from 'axios'

import NameSearch from './NameSearch'
import Recipe from './Recipe'

function App() {
  return (
    <>
      <NameSearch />
      <Recipe recipeId={'52772'} />
    </>
  );
}

export default App;
