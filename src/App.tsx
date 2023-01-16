import './assets/styles/main.scss';
import SearchBar from './components/SearchBar';
import Sliders from './components/Sliders';
import FetchData from './configs/api/FetchData';
import ProjectContext from './configs/context/ProjectContext';
import TargetUserContext from './configs/context/TargetUserContext';
import './main.css';

function App() {
  return (
    <div className="App fixed">
      <ProjectContext>
        <TargetUserContext>
          <FetchData>
            <SearchBar />
            <Sliders />
          </FetchData>
        </TargetUserContext>
      </ProjectContext>
    </div>
  );
}

export default App;
