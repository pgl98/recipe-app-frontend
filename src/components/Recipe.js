import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const Recipe = () => {
    const [ recipeInfo, setRecipeInfo ] = useState('')
    const { recipeId } = useParams()

    useEffect(() => {
        const getRecipe = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
            setRecipeInfo(response.data.meals[0])
        }
        getRecipe()
    }, [recipeId])

    const name = recipeInfo.strMeal
    const category = recipeInfo.strCategory
    const tags = recipeInfo.strTags
    const instructions = recipeInfo.strInstructions
    const thumbnail = recipeInfo.strMealThumb
    const youtube = recipeInfo.strYoutube
    // https://www.youtube.com/watch?v={embedId}}
    const ytEmbedId = youtube ? youtube.substring(32): null
    console.log(`https:www.youtube.com/watch?v=${ytEmbedId}`)
    let ingredients = []

    for(let i = 1; i < 21; i++) {
        if(recipeInfo[`strIngredient${i}`]) ingredients[i] = recipeInfo[`strIngredient${i}`] + " " + recipeInfo[`strMeasure${i}`]
    }

    return (
        <div>
            <h2>{name}</h2>
            <h3>{tags}</h3>
            <h4>{category}</h4>
            <img src={thumbnail} alt="final product" width="100" />
            <ul>{ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul>
            <p>{instructions}</p>
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
        </div>
    )
}

export default Recipe