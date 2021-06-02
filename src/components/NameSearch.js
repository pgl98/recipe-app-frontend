import { useState } from 'react'
import FilteredRecipes from './FilteredRecipes'

const NameSearch = () => {
  const [ filter, setFilter ] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
        <h1>recipe-app</h1>
        <form>
        Search by name: <input type='text' value={filter} onChange={handleFilterChange} />
        </form>
        <FilteredRecipes filter={filter} searchType={'/search.php?s'}/>
    </>
  )
}

export default NameSearch