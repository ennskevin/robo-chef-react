import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
    recipe: string;
}

export default function Recipe({ recipe }: Props) {

    return (
        <section className="recipe" aria-live="polite">
            <div className="container">
                <h3>Robo Chef Recommends:</h3>
                <ReactMarkdown children={recipe} remarkPlugins={[remarkGfm]} />
            </div>
        </section>
    )
}