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
          bezeichnung="Clean Tackles"
          bild="https://www.oefb.at/oefb2/images/1278650591628556536_1b38761830cdaa66c994-1,0-320x320.png"
        />

        <Card
          name="Berke Arziman"
          mannschaft="Austria Lustenau Juniors"
          position="Flügel"
          bezeichnung="Crashouts"
          bild="https://www.oefb.at/oefb2/images/1278650591628556536_702a90af128354194944-1,0-320x320.png"
        />

        <Card
          name="Noyan Hakli"
          mannschaft="FC Hard KM"
          position="Stürmer"
          bezeichnung="Freshe Cuts verpasst"
          bild="https://www.hchard.at/wp-content/uploads/2026/08/13_Hakli_Noyan-1920x1080.jpg"
        />

        <Card
          name="Bedirhan Kocyigit"
          mannschaft="Carborspor Lindau"
          position="Torwart"
          bezeichnung="Organe geklaut"
          bild="https://i.ibb.co/M5MFjwvZ/Whats-App-Image-2026-11-09-at-16-12-06.jpg"
        />

        <Card
          name="Kaan Yagdi"
          mannschaft="SC Austria Lustenau U18"
          position="Außerhalb des Kaders"
          bezeichnung="Flaschen gefüllt"
          bild="https://www.oefb.at/oefb2/images/1278650591628556536_b07105a1ab991ec5ddc3-1,0-320x320.png"
        />

        <Card
          name="Can Temiz"
          mannschaft="SC Austria Lustenau KM"
          position="Baba Forvet"
          bezeichnung="Erfolgreiche Schwalben"
          bild="https://www.oefb.at/oefb2/images/1278650591628556536_a9b0fb8308092d950ffd-1,0-320x320.png"
        />

      </div>
    </>
  )
}

export default App