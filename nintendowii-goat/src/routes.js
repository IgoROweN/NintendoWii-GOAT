import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Jogos from './pages/Jogos';

import Header from './Components/Header';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/jogos/:id' element={ <Jogos /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;