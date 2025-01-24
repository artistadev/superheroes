
import './style.css';
import './App.css'

import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigation/navigation-bar';
import AboutUs from './components/about-us/about-us';
import Characters from './components/characters/characters';
import NoMatch from './components/errors/no-match';
import CharacterDetails from './components/characters/character';

function App() {

  return (
    <>
      <NavigationBar />

      <Routes>
        <Route index element={<Characters />} />
        <Route path="/characters" element={<Characters />}>
          <Route path=":id" element={<CharacterDetails />} />
        </Route>
        <Route path="/about" element={<AboutUs />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
