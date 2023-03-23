import axios from "axios";

export const url = "/api/"
export const urlMastery = "/mastery/"

const apiKey = import.meta.env.VITE_REACT_APP_RIOT_TOKEN_KEY;
const apiValue = import.meta.env.VITE_REACT_APP_RIOT_TOKEN_VALUE;

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