import React, { useEffect } from 'react'
import './FormSearch.css'


const FormSearch = ({ affichageComposant, setAffichageComposant, nomInvocateur, setNomInvocateur, boutonRecherche, setBoutonRecherche }) => {





    // Empeche l'envoie du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
    };


    // Sauvagarde la saisie du pseudo
    const handleChangenomInvocateur = (e) => {
        setNomInvocateur(e.target.value)
    }


    // Quand l'utilisateur clique sur le bouton
    // On obtient l'element html de FormSearch par l'id
    // Si le menu est en Duo
    // On obtient le pseudo et la validation du bouton
    // Sinon 
    // l'animation se lance
    // On obtient le pseudo et la validation du bouton
    const handleClick = () => {

        let animationFormSearch = document.getElementById("FormSearch");

        if (affichageComposant == "Duo") {

            setNomInvocateur(actual => nomInvocateur);
            setBoutonRecherche(actual => "valider");
        }
        else {

            animationFormSearch.className = animationFormSearch.className + " animate__bounceOut";

            setNomInvocateur(actual => nomInvocateur);


            const timer = setTimeout(() => {
                setBoutonRecherche(actual => "valider");
                setAffichageComposant(actual => "Duo");
            }, 550);
            return () => clearTimeout(timer);

        }
    }



    // Reset de la saisi dans la barre de recherche
    useEffect(() => {

        setNomInvocateur(actual => "");
        // setBoutonRecherche(actual => "");

    }, [boutonRecherche])



    return (
        <div id='FormSearch' className="col align-self-center d-flex justify-content-center">


            <form className='d-flex formSearch rounded-pill' onSubmit={handleSubmit}>
                <input className='form-control rounded-end-0 rounded-start-pill input-formSearch ps-4' value={nomInvocateur} onChange={handleChangenomInvocateur} type="text" placeholder="Nom D'invocateur" autoFocus />
                <button onClick={handleClick} type="submit" className="btn btn-formSearch border-0 rounded-start-0 rounded-end-pill">WAY?</button>
            </form>


        </div>
    );

}

export default FormSearch