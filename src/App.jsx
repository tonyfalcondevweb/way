import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import GestionChampions from './Admin/GestionChampions/GestionChampions';
import HomeAdmin from './Admin/HomeAdmin/HomeAdmin';


function App() {






  return (
    <BrowserRouter>
      <div className="App">
      {import.meta.env.VITE_REACT_APP_RIOT_TOKEN_VALUE}


                <Routes>
                  <Route exact path='/' element={<Home />} />
                  {/* <Route exact path='/admin' element={<HomeAdmin />} /> */}
                  <Route exact path='/:path' element={<NotFound/>} />
                </Routes>



        
      </div>
    </BrowserRouter>
  )
}

export default App
