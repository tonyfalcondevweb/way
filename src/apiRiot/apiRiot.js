import axios from "axios";

export const url = "/api/"
export const urlMastery = "/mastery/"
export const urlReamls = "/realms"
export const urlChampList = "/champion/"

const apiValue = "RGAPI-80d16639-21f6-46af-8f1f-416d5bf9f2c1";


export const summonerRequest = (inputs) => {
    const config = { headers : {        
        "X-Riot-Token" : apiValue
    } };
    return axios.get( url + inputs, config);
}

export const masteryRequest = (inputs) => {
    const config = { headers : {        
        "X-Riot-Token" : apiValue
    } };
    return axios.get( urlMastery + inputs + "/top?count=5", config);
}



export const getRealms = () => {
    return axios.get(urlReamls);
}

export const getChampListRiot = (inputs) => {

    return axios.get(urlChampList + inputs + "/data/fr_FR/champion.json");
}