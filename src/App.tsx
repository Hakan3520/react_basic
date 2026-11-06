import './App.css'
import Card from './Card'

function App() {
  return (
    <>
      <h1>Spielerübersicht</h1>

      <div className="card-container">

        <Card
          name="Hakan Arziman"
          mannschaft="SC Austria Lustenau II"
          position="Außenverteidiger"
        />

        <Card
          name="Berke Arziman"
          mannschaft="Austria Lustenau Juniors"
          position="Flügel"
        />

        <Card
          name="Noyan Hakli"
          mannschaft="FC Hard KM"
          position="Stürmer"
        />

        <Card
          name="Bedirhan Kocyigit"
          mannschaft="Carborspor Lindau"
          position="Torwart"
        />

        <Card
          name="Kaan Yagdi"
          mannschaft="SC Austria Lustenau U18"
          position="Rechte Ersatzbank"
        />

        <Card
          name="Can Temiz"
          mannschaft="SC Austria Lustenau KM"
          position="Baba Forvet"
        />

      </div>
    </>
  )
}

export default App