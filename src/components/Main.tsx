import { useEffect, useState } from "react"

import IngredientsList from "./IngredientsList"
import Recipe from "./Recipe"

export default function Main() {

    const [ingredients, setIngredients] = useState<string[]>([])

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

    const [recipeShown, setRecipeShown] = useState(false)

    function toggleRecipeShown() {
        setRecipeShown(prev => !prev)
    }

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
                            toggleRecipeShown={toggleRecipeShown}
                        /> 
                        : null
                    }

                    {recipeShown ? 
                        <Recipe />
                        : null
                    }

                </div>
            </main>
        </>
    )
}