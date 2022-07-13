import { HashRouter } from 'react-router-dom';
import './App.css';
import SkillsContainer from './Components/SkillsContainer/SkillsContainer';
import { Route, Routes } from 'react-router';
import ProjectsContainer from './Components/ProjectsContainer/ProjectsContainer';
import Header from './Components/Header/Header';
import Contacts from './Components/Contacts/Contacts';
import Main from './Components/Main/Main';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/skills'} element={<SkillsContainer />} />
          <Route path={'/projects'} element={<ProjectsContainer />} />
          <Route path={'/contacts'} element={<Contacts />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
