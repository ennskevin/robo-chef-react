export async function getRecipeFromBackend(
    ingredientsArr: string[]
): Promise<string | undefined> 
{
    try {
        const response = await fetch("https://2f3a1cole1.execute-api.us-east-2.amazonaws.com/default/getRecipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ingredients: ingredientsArr })
        })

        const data = await response.json()

        return data.recipe
    }
    catch (err: any) {
        console.error(err.message)
    }
}
