import './App.css';
import TopBar from './components/topBar/TopBar';
import Footer from './components/footer/Footer';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <TopBar title="Pryzkladowy tekst" />
      <Footer title="Zajebista firma" />
      <Counter />
    </div>
  );
}

export default App;
