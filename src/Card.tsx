import { useState } from 'react'

type Props = {
    name: string
    mannschaft: string
    position: string
    bezeichnung?: string
    bild: string
}

export default function Card({ name, mannschaft, position, bezeichnung = 'Tore', bild }: Props) {

    const [anzahl, setAnzahl] = useState(0)
    const [farbe, setFarbe] = useState('white')

    function farbeAendern() {
        const farben = ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'purple']

        const zufallsfarbe = farben[Math.floor(Math.random() * farben.length)]

        setFarbe(zufallsfarbe)
    }

    function hinzufuegen() {
        setAnzahl(anzahl + 1)
        farbeAendern()
    }

    function verringern() {
        setAnzahl(anzahl - 1)
        farbeAendern()
    }

    return (
        <div className="card" style={{ backgroundColor: farbe }}>

            <img src={bild} alt={name} />

            <h2>{name}</h2>

            <p>Mannschaft: {mannschaft}</p>
            <p>Position: {position}</p>
            <p>{bezeichnung}: {anzahl}</p>

            <button onClick={hinzufuegen}>
                {bezeichnung} hinzufügen
            </button>

            <button onClick={verringern}>
                {bezeichnung} verringern
            </button>

        </div>
    )
}