import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts'; 
import Examples from './components/Examples';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples />
      </main>
    </div>
  );
}

export default App;
