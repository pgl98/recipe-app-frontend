import { useState, useEffect } from 'react'
import axios from 'axios'

/*
    searchType: 's' to filter meal by name
                'i' to filter by ingredients
*/
const FilteredRecipes = ({ filter, searchType }) => {
    const baseURL = 'https://www.themealdb.com/api/json/v1/1'
    const [ recipes, setRecipes ] = useState([])

    useEffect(() => {
      axios.get(`${baseURL}/search.php?${searchType}=${filter}`)
        .then(response => {
          if (response.data.meals) setRecipes(response.data.meals)
          else setRecipes([])
        })
        .catch(error => console.error(error.message))
    }, [filter, searchType])

    if(searchType !== 'i' && searchType !== 's') console.error('Search type must be either "i" or "s".')

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

export default FilteredRecipes