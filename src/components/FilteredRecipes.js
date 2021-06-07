import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/*
    searchType: '/search.php?s={name}' to filter meal by name
                '/filter.php?i={ingredients}' to filter by ingredients
*/
const FilteredRecipes = ({ filter, searchType }) => {
    const baseURL = 'https://www.themealdb.com/api/json/v1/1'
    const [ recipes, setRecipes ] = useState([])

    useEffect(() => {
      axios.get(`${baseURL}/${searchType}=${filter}`)
        .then(response => {
          if (response.data.meals) setRecipes(response.data.meals)
          else setRecipes([])
        })
        .catch(error => console.error(error.message))
    }, [filter, searchType])

    if(searchType !== '/filter.php?i' && searchType !== '/search.php?s') 
        console.error('Search type must be either "/filter.php?i" or "/search.php?s".')

    if (filter === '') return (<>Search for recipes</>)

    if(recipes.length > 100) return (
      <>
        Too many results...
      </>
    )

    return(
      <div>
        {recipes.map(recipe => 
          <p key={recipe.idMeal}>
            <Link to={`/recipes/${recipe.idMeal}`}>
              {recipe.strMeal}
            </Link>
          </p>
        )}
      </div>
    )
}

export default FilteredRecipes