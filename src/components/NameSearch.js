import { useState } from 'react'
import FilteredRecipes from './FilteredRecipes'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

import useStyles from '../styles/styles'

const NameSearch = () => {
  const [ filter, setFilter ] = useState('')
  const classes = useStyles()

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className={classes.searchBar}>
      <Grid container>
        <Grid item xs={12} style={{textAlign: "center"}} md ={12}>
          <form>
            <TextField
              id="search bar"
              label="Search for recipes"
              type="search"
              variant="filled"
              value={filter}
              onChange={handleFilterChange} 
            />
          </form>
        </Grid>
        <FilteredRecipes filter={filter} searchType={'/search.php?s'}/>
      </Grid>
    </div>
  )
}

export default NameSearch