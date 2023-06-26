import React, { useEffect, useRef, useState } from 'react'
import './LoginAdmin.css'
import { postLoginAdmin } from '../../apiYag/apiYag';
import { useRegexLoginAdmin, userEmpty, userKey } from '../../util/util';
import Loading from '../../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = ({ setUser, user }) => {


  let navigate = useNavigate();

  const [load, setLoad] = useState("load");

  const [erreur, setErreur] = useState(null)

  const nom = useRef(null);
  const interneKey = useRef(null);



  useEffect(() => {

    if (user == userEmpty) {

      setLoad("ok");

    }
    else if (user !== null) {
      navigate("/gestion_champions");
    }

  }, [user])
  


  useEffect(() => {

    if (erreur !== null) {
      const timer = setTimeout(() => {
        setErreur(null);
      }, 3000);
    }
  }, [erreur])




  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const handleClickLoginAdmin = () => {

    // inputs saisie par l'utilisateur qui vont être envoyé dans la requête
    const inputs = { nom: nom.current.value, interneKey: interneKey.current.value };

    // fonction qui test les saisies, un boolean est retourné
    const regexTestNom = useRegexLoginAdmin(inputs.nom);
    const regexTestMdp = useRegexLoginAdmin(inputs.interneKey);


    // si les saisies sont correctes la requête est lancé et si la requête est valide l'admin est connecté
    // sinon un message d'erreur s'affiche
    if ((regexTestNom && regexTestMdp) === true) {
      postLoginAdmin(inputs)
        .then(response => {

          // récuperation des données de la réponse de la requête
          const data = response.data;

          // enregistrement de l'identifiant dans le localStorage
          localStorage.setItem(userKey, JSON.stringify(data));
          setUser(actual => data);

        }).catch(error => {
          console.log(error.response.data.message);


          setErreur("Mot de passe invalide");
        });
    }
    else{
      setErreur("Mot de passe invalide");
    }
  }












  if (load == "load") {
    return (
      <div className='gestion-champions'>

        <div className='container-load'>

          <Loading />

        </div>
      </div>
    )
  }

  else if (load == "ok") {  
    return (

      <div className='container-login'>

        <div className='erreur-login text-danger'>
          {erreur}
        </div>
        <div className="container-form">
          <form className='rounded form-login' onSubmit={handleSubmit}>

            <div className="input-label-form">
              <label className="label-form" >Nom :</label>
              <input type="text" ref={nom} className='form-control rounded input-formSearch input-login' />
            </div>

            <div className="input-label-form">
              <label className="label-form" >Key :</label>
              <input type="password" ref={interneKey} className='form-control rounded input-formSearch input-login' />
            </div>

            <button onClick={handleClickLoginAdmin} className='btn btn-formSearch rounded-pill'>Valider</button>

          </form>
        </div>
      </div>
    )
  } 
}

export default LoginAdmin
