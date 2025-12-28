import { Navbar7 } from "./components/Navbar7";
import "./App.css";

// Haupt-App-Komponente
// Rendert die Navbar und den Hauptinhalt der Anwendung
function App() {
  return (
    <div className="App">
      {/* Navbar-Komponente von Relume */}
      <Navbar7 />
      
      {/* Hauptinhalt der Seite */}
      <main className="min-h-screen bg-background-primary">
        <div className="container mx-auto px-[5%] py-12">
          <h1 className="text-4xl font-bold mb-4">
            Willkommen bei SwapToLearn
          </h1>
          <p className="text-lg text-gray-600">
            Digitale Teilhabe für alle Menschen
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;

