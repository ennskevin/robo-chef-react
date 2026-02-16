import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
    recipe: string;
}

export default function Recipe({ recipe }: Props) {

    return (
        <section className="recipe">
            <div className="container">
                <ReactMarkdown children={recipe} remarkPlugins={[remarkGfm]} />
            </div>
        </section>
    )
}