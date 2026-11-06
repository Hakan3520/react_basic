type Props = {
    title: string
    image: string
    description: string
}

export default function Card3({ title, image, description }: Props) {
    return (
        <div className="card">
            <img src={image} alt={title} />

            <h2>{title}</h2>

            <p>{description}</p>

            <button>Mehr erfahren</button>
        </div>
    )
}