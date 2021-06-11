import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    media: {
        height: 500,
        width: "100%",
    }
}))

const Recipe = () => {
    const classes = useStyles()
    const [ recipeInfo, setRecipeInfo ] = useState('')
    const { recipeId } = useParams()

    useEffect(() => {
        const getRecipe = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
            setRecipeInfo(response.data.meals[0])
        }
        getRecipe()
    }, [recipeId])

    const youtube = recipeInfo.strYoutube
    // https://www.youtube.com/watch?v={embedId}}
    const ytEmbedId = youtube ? youtube.substring(32) : null
    let ingredients = []

    // Look at MealDB api to see why this loop starts with index 1
    for(let i = 1; i < 21; i++) {
        if(recipeInfo[`strIngredient${i}`]) ingredients[i] = recipeInfo[`strMeasure${i}`] + " " + recipeInfo[`strIngredient${i}`]
    }

    const RecipeCard = ({ name, category, thumbnail }) => {
        return (
            <Card className={classes.root}>
                <CardHeader
                    title={name}
                    subheader={category}
                />
                {thumbnail ? (
                    <CardMedia
                        className={classes.media}
                        component="img"
                         src={thumbnail}
                        title={name}
                />) : (<CircularProgress />)}
            </Card>
        )}

    const IngredientsList = ({ ingredients }) => {
        return (
            <>
                <Typography variant="h6">Ingredients:</Typography>
                <List dense className={classes.list}>
                    {ingredients.map((ingredient) => (
                        <ListItem key={ingredient}>
                            <ListItemText primary={ingredient}/>
                        </ListItem>
                    ))}
                </List>
            </>
        )}

    const Instructions = ({ instructions }) => {
        return (
            <>
                <Typography variant="h6">Instructions:</Typography>
                <Typography variant="body1">{instructions}</Typography>
            </>
        )}

    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <RecipeCard
                            name={recipeInfo.strMeal}
                            category={recipeInfo.strCategory}
                            thumbnail={recipeInfo.strMealThumb}
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <IngredientsList ingredients={ingredients} />
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <Instructions instructions={recipeInfo.strInstructions} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
/*
            <div>
                <iframe
                    width="853"
                    height="480"
                    src={`https:www.youtube.com/embed/${ytEmbedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title='Embedded youtube'
                ></iframe>
            </div>
*/

export default Recipe