type Props = {
    name: string
    mannschaft: string
    position: string
}

export default function Card({ name, mannschaft, position }: Props) {
    return (
        <div className="card">
            <h2>{name}</h2>

            <p>Mannschaft: {mannschaft}</p>
            <p>Position: {position}</p>
        </div>
    )
}