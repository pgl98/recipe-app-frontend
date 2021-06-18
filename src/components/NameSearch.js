import { useState } from 'react'
import FilteredRecipes from './FilteredRecipes'

import TextField from '@material-ui/core/TextField'

import useStyles from '../styles/styles'

const NameSearch = () => {
  const [ filter, setFilter ] = useState('')
  const classes = useStyles()

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className={classes.searchBar}>
      <form>
        <TextField
          id="search-bar"
          label="Search for recipes"
          type="search"
          variant="filled"
          fullWidth
          value={filter}
          onChange={handleFilterChange} 
        />
      </form>
      <FilteredRecipes filter={filter} searchType={'/search.php?s'}/>
    </div>
  )
}

export default NameSearch