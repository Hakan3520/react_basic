import { useState } from 'react'

type Props = {
    name: string
    mannschaft: string
    position: string
    bezeichnung?: string
}

export default function Card({ name, mannschaft, position, bezeichnung = 'Tore' }: Props) {

    const [anzahl, setAnzahl] = useState(0)

    return (
        <div className="card">
            <h2>{name}</h2>

            <p>Mannschaft: {mannschaft}</p>
            <p>Position: {position}</p>
            <p>{bezeichnung}: {anzahl}</p>

            <button onClick={() => setAnzahl(anzahl + 1)}>
                {bezeichnung} hinzufügen
            </button>
        </div>
    )
}