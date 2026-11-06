import './App.css'
import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'

function App() {
  return (
    <>
      <h1>Meine Interessen</h1>

      <div className="card-container">
        <Card
          title="Gaming"
          image="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600"
          description="Gaming, spannende Matches und neue Herausforderungen."
        />

        <Card
          title="Fußball"
          image="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600"
          description="Training, Teamgeist und das nächste Spiel."
        />

        <Card
          title="Reisen"
          image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600"
          description="Neue Orte entdecken und Abenteuer erleben."
        />

        <Card2
          title="Musik"
          image="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600"
          description="Musik hören und neue Künstler entdecken."
        />

        <Card3
          title="Technik"
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
          description="Neue Technologien und Programmieren."
        />
      </div>
    </>
  )
}

export default App