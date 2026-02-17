import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
    recipe: string;
}

export default function Recipe({ recipe }: Props) {

    return (
        <section className="recipe" aria-live="polite">
            <div className="container">
                <h2>Our dearest Robo Chef recommends:</h2>
                <ReactMarkdown children={recipe} remarkPlugins={[remarkGfm]} />
            </div>
        </section>
    )
}