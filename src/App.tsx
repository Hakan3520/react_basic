import './App.css'
import Card from './Card'

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
      </div>
    </>
  )
}

export default App