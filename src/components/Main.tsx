import { useEffect, useState } from "react"

export default function Main() {

    const [ingredients, setIngredients] = useState<string []>([])

    const ingredientsHeader = ingredients.length
        ? <h1 className="ingredients-header">Ingredients on hand:</h1>
        : <></>

    function addIngredient(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("Form submitted!")
        
        const formData = new FormData(event.currentTarget)
        const ingredient = formData.get("ingredient")
        
        if (typeof ingredient === "string") {
            setIngredients(prev => {
                return [...prev, ingredient]
            })
            event.currentTarget.reset()
        }
        
    }

    useEffect(() => {
        console.log(ingredients)
    }, [ingredients])
    
    const ingredientsListItems = ingredients.map((ingredient) => {
        return <li className="ingredient-item" key={ingredient}>{ingredient}</li>
    })

    return (
        <>
            <main>
                <div className="container">

                    <form onSubmit={addIngredient} className="add-ingredient-form">
                        <input
                            type="text"
                            placeholder="e.g. oregano"
                            aria-label="Add ingredient"
                            name="ingredient"
                            autoComplete="off"
                        />
                        <button>add ingredient</button>
                    </form>

                    {ingredientsHeader}

                    <ul className="ingredient-list">
                        {ingredientsListItems}
                    </ul>

                </div>
            </main>
        </>
    )
}