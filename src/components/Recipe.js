import { useState, useEffect } from 'react'
import axios from 'axios'

const Recipe = ({ recipeId }) => {
    const [ recipeInfo, setRecipeInfo ] = useState('')

    useEffect(() => {
        const getRecipe = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
            setRecipeInfo(response.data.meals[0])
        }
        getRecipe()
    }, [recipeId])

    const name = recipeInfo.strMeal
    const category = recipeInfo.strCategory
    const instructions = recipeInfo.strInstructions
    const thumbnail = recipeInfo.strMealThumb
    const youtube = recipeInfo.strYoutube
    let ingredients = []

    for(let i = 0; i< 20; i++) {
        if(recipeInfo[`strIngredient${i}`]) ingredients[i] = recipeInfo[`strIngredient${i}`] + " " + recipeInfo[`strMeasure${i}`]
    }

    console.log(recipeInfo)
    console.log(recipeInfo.strMeal)
    console.log(ingredients)

    return (
        <div>
            <h2>{name}</h2>
            <h3>{category}</h3>
            <img src={thumbnail} alt="final product" />
            <ul>{ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul>
            <p>{instructions}</p>
        </div>
    )
}

export default Recipe