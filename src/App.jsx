import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';


function App() {





  return (
    <BrowserRouter>
      <div className="App">
        <div className="container-app">



                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/:path' element={<NotFound/>} />
                </Routes>



        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
