type Props = {
    ingredients: string[];
    getRecipe: () => void;
    recipeSection: any
}

export default function IngredientsList({ ingredients, getRecipe, recipeSection}: Props) {
    const ingredientsListItems = ingredients.map(ingredient => {
        return <li className="ingredient-item" key={ingredient}>{ingredient}</li>
    })

    return (
        <>
            {ingredients.length ?
                <section className="ingredients-component">
                    <h1 className="ingredients-header">Ingredients on hand:</h1>
                    <ul className="ingredient-list">{ingredientsListItems}</ul>
                    {ingredients.length > 3 ?
                        <div className="get-recipe-container scroll-target" ref={recipeSection}>
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={getRecipe}>request a recipe</button>
                        </div>
                        : null
                    }
                </section>
                : null
            }
        </>
    )
}