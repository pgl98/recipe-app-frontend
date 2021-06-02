import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const baseURL = 'https://www.themealdb.com/api/json/v1/1'

  const [ filter, setFilter ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const FilteredRecipes = ({ filter }) => {
    const [ recipes, setRecipes ] = useState([])

    useEffect(() => {
      axios.get(`${baseURL}/search.php?s=${filter}`)
        .then(response => {
          if (response.data.meals) setRecipes(response.data.meals)
          else setRecipes([])
        })
        .catch(setRecipes([]))
    }, [filter])

    if (filter === '') return (<>Search for recipes</>)

    if(recipes.length > 100) return (
      <>
        Too many results...
      </>
    )

    return(
      <>
        {recipes.map(recipe => <p key={recipe.idMeal}>{recipe.strMeal}</p>)}
      </>
    )
  }

  return (
    <>
      <h1>recipe-app</h1>
      <form>
        Search by name: <input type='text' value={filter} onChange={handleFilterChange} />
      </form>
      <FilteredRecipes filter={filter} />
    </>
  );
}

export default App;
