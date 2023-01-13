import './assets/styles/main.scss';
import SearchBar from './components/SearchBar';
import FetchData from './configs/api/FetchData';
import './main.css';

function App() {
  return (
    <div className="App">
      <FetchData>
        <SearchBar />
      </FetchData>
    </div>
  );
}

export default App;
