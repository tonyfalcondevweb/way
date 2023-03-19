import axios from "axios";

export const urlApiYag = "http://localhost:8080/yagAPI/";

export const urlGetAllCategorie = urlApiYag + "get/categorie";

export const urlGetAllChampion = urlApiYag + "get/champion";

export const urlPostCompte = urlApiYag +"post/compte";


export const getAllCategorie = () => {

    return axios.get(urlGetAllCategorie);
}

export const getAllChampion = () => {

    return axios.get(urlGetAllChampion);
}

export const saveCompte = (inputs) => {

    return axios.post(urlPostCompte,inputs);
}