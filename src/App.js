import './App.css';
import TopBar from './components/topBar/TopBar';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <TopBar title="Pryzkladowy tekst" />
      <Footer title="Zajebista firma" />
    </div>
  );
}

export default App;
