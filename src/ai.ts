export async function getRecipeFromBackend(
    ingredientsArr: string[]
): Promise<string | undefined> 
{
    try {
        const response = await fetch("https://rtjqe1mus0.execute-api.us-east-2.amazonaws.com/default/robo-chef-api", {
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
