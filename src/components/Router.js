import Menu from './Menu'
import Pokemon from './Pokemon'
import Pokeball from './Pokeball'
import About from './About'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu />}>
                    <Route path='/' element={<Pokemon />} />
                    <Route path='about' element={<About />} />
                    <Route path='pokeball' element={<Pokeball />} />
                    <Route path='*' element={<Navigate replace to='/' />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
