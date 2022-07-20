import './App.css';
import SkillsContainer from './Components/SkillsContainer/SkillsContainer';
import { Route, Routes, useLocation } from 'react-router';
import ProjectsContainer from './Components/ProjectsContainer/ProjectsContainer';
import Header from './Components/Header/Header';
import Contacts from './Components/Contacts/Contacts';
import Main from './Components/Main/Main';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Header />
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames='fade' timeout={300}>
          <Routes location={location}>
          <Route path={'/'} element={<Main />} />
            <Route path={'/skills'} element={<SkillsContainer />} />
            <Route path={'/projects'} element={<ProjectsContainer />} />
            <Route path={'/contacts'} element={<Contacts />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

    </div>
  );
}

export default App;
