
import './App.css';
import Header from './components/Header'
import Menu from './components/Menu'
import PokemonAPI from './components/PokemonAPI'
import Pokeball from './components/Pokeball'
import About from './components/About'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}>
            <Route path='/' element={<PokemonAPI />} />
            <Route path='/*' element={<PokemonAPI />} />
            <Route path='about' element={<About />} />
            <Route path='pokeball' element={<Pokeball />} />
            {/* <Route path='*' element={<Navigate replace to='/' />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <PokemonList />  */}
    </div>
  );
}

export default App;
{/* <a target="_blank" href="https://icons8.com/icon/45674/pokeball">Pokeball</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */ }
