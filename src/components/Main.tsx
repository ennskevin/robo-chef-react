import { useEffect, useState, useRef } from "react"

import IngredientsList from "./IngredientsList"
import Recipe from "./Recipe"
import { getRecipeFromBackend } from "../ai"

export default function Main() {

    const [ingredients, setIngredients] = useState<string[]>([])
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef<HTMLDivElement>(null)
    console.log(recipeSection)

    function addIngredient(formData: FormData) {
        console.log("Form submitted")
        console.log(ingredients.length)

        const ingredient = formData.get("ingredient")
        if (!ingredient || typeof ingredient !== "string") return
        setIngredients(prev => [...prev, ingredient])

        console.log(Object.fromEntries(formData))
    }

    useEffect(() => {
        console.log(ingredients)
    }, [ingredients])

    async function getRecipe() {
        const response = await getRecipeFromBackend(ingredients)
        if (!response || typeof response !== "string") return
        setRecipe(response)
    }

    useEffect(() => {
        if (!recipe && !recipeSection) return
        recipeSection.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, [recipe])

    return (
        <>
            <main>
                <div className="container">

                    <form action={addIngredient} className="add-ingredient-form">
                        <input
                            type="text"
                            name="ingredient"
                            placeholder="e.g. oregano"
                            aria-label="Add ingredient"
                            autoComplete="off"
                        />
                        <button>add ingredient</button>
                    </form>

                    {ingredients.length ? 
                        <IngredientsList 
                            ingredients={ingredients}
                            getRecipe={getRecipe}
                            recipeSection={recipeSection}
                        /> 
                        : null
                    }

                    {recipe ? 
                        <Recipe recipe={recipe} />
                        : null
                    }

                </div>
            </main>


        </>
    )
}