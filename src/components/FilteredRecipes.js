import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import { CardContent } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

const RecipeCard = ({ recipe }) => {
  const thumbnail = recipe.strMealThumb
  const name = recipe.strMeal
  const category = recipe.strCategory

  return (
    <Card component={Link} to={`/recipes/${recipe.idMeal}`} style={{ textDecoration: 'none' }}>
      <CardActionArea>
        {thumbnail ? (
          <CardMedia
              component="img"
                src={thumbnail}
              title={name}
          />) : (<CircularProgress />)}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
)}

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

    if (filter === '') return (<></>)

    if(recipes.length > 100) return (
      <>
        Too many results...
      </>
    )

    return(
      <div>
        <Grid container spacing={2}>
          {recipes.map(recipe => 
            <Grid item xs={6} ms={3} key={recipe.idMeal}>
              <RecipeCard recipe={recipe} />
            </Grid> )}
        </Grid>
      </div>
    )
}

//<Link to={`/recipes/${recipe.idMeal}`}>
  //              {recipe.strMeal}
    //          </Link>

export default FilteredRecipes