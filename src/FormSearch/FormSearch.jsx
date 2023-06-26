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
    const handleClickDuo = () => {

        let animationFormSearch = document.getElementById("FormSearch");

        if (affichageComposant == "Duo") {

            setNomInvocateur(actual => nomInvocateur);
            setBoutonRecherche(actual => "valider");
        }
        else {

            if (affichageComposant == "Solo") {                
                animationFormSearch.className = " animate__bounceOut";
            }

            setNomInvocateur(actual => nomInvocateur);


            const timer = setTimeout(() => {
                setBoutonRecherche(actual => "valider");
                setAffichageComposant(actual => "Duo");
            }, 550);
            return () => clearTimeout(timer);

        }
    }






    const handleClickChampion = () => {



        const timer = setTimeout(() => {
            setAffichageComposant(actual => "Champion");
        }, 550);
        return () => clearTimeout(timer);
    }


    
    const handleClickClassementChampion = () => {



        const timer = setTimeout(() => {
            setAffichageComposant(actual => "Classement");
        }, 550);
        return () => clearTimeout(timer);
    }



    // Reset de la saisi dans la barre de recherche
    useEffect(() => {

        setNomInvocateur(actual => "");
        // setBoutonRecherche(actual => "");

    }, [boutonRecherche])



    return (
        <div id='FormSearch' className="">


            <form className='d-flex formSearch rounded-pill' onSubmit={handleSubmit}>
                <div className="dropdown rounded-start-pill rounded-end-0 dropdown-formSearch text-reset">
                    <button className="btn dropdown-toggle btn-dropdown rounded-start-pill rounded-end-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu
                    </button>
                    <ul className="dropdown-menu dropdown-menu-formSearch">
                        <li><div className="dropdown-item" onClick={handleClickChampion}>Champion</div></li>
                        <li><div className="dropdown-item" onClick={handleClickClassementChampion}  >Classement</div></li>
                    </ul>
                </div>
                <input className='form-control rounded-end-0 rounded-start-0 input-formSearch' value={nomInvocateur} onChange={handleChangenomInvocateur} type="text" placeholder="Nom D'invocateur" />
                <button onClick={handleClickDuo} type="submit" className="btn btn-formSearch rounded-start-0 rounded-end-pill">WAY?</button>
            </form>


        </div>
    );

}

export default FormSearch