import axios from "axios";

export const url = "/api/"
export const urlMastery = "/mastery/"

const apiKey = riotToken;

export const summonerRequest = (inputs) => {
    const config = { headers : {        
        "X-Riot-Token": apiKey
    } };
    return axios.get( url + inputs, config);
}

export const masteryRequest = (inputs) => {
    const config = { headers : {        
        "X-Riot-Token": apiKey
    } };
    return axios.get( urlMastery + inputs + "/top?count=5", config);
}