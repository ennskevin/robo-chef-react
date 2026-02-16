import type { JSX } from "react";

type Props = {
    ingredients: string[];
    toggleRecipeShown: () => void;
}

export default function IngredientsList({ ingredients, toggleRecipeShown}: Props) {
    const ingredientsListItems = ingredients.map(ingredient => {
        return <li className="ingredient-item" key={ingredient}>{ingredient}</li>
    })

    return (
        <>
            {ingredients.length ?
                <section>
                    <h1 className="ingredients-header">Ingredients on hand:</h1>
                    <ul className="ingredient-list">{ingredientsListItems}</ul>
                    {ingredients.length > 3 ?
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={toggleRecipeShown}>Get a recipe</button>
                        </div>
                        : null
                    }
                </section>
                : null
            }
        </>
    )
}