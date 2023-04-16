import './App.css'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import LoginAdmin from './Admin/LoginAdmin/LoginAdmin';
import GestionChampions from './Admin/GestionChampions/GestionChampions';
import { useEffect, useState } from 'react';
import { getUserFromLocalStorage, roleElite, userEmpty, userKey } from './util/util';
import Loading from './Loading/Loading';


function App() {


  const [user, setUser] = useState(null);
  const [load, setLoad] = useState("load")



  useEffect(() => {
    const userInStorage = getUserFromLocalStorage();
    if (userInStorage) {
      setUser(actual => userInStorage);
    }
    else {
      setUser(actual => userEmpty);
    }

    setLoad("ok")
  }, []);


  


  if (load == "load") {
    return (
      <div>
        <Loading />
      </div>
    )

  }

  else if (load == "ok") {

    return (
      <BrowserRouter>
        <div className="App">

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/admin' element={<LoginAdmin setUser={setUser} user={user} />} />
            <Route exact path='/gestion_champions' element={user && user.role === roleElite ? <GestionChampions setUser={setUser} /> : <NotFound />} />
            <Route exact path='/:path' element={<NotFound />} />
          </Routes>


        </div>
      </BrowserRouter>
    )

  }
}

export default App
