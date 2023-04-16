
export function useRegexLoginAdmin(input) {
    let regex = /^[A-Za-z0-9]*$/;
    return regex.test(input);
}













export const userKey = 'user';
export const userEmpty = 'empty';
export const roleElite = 'elite';



export const getUserFromLocalStorage = () => {
    const userJson = localStorage.getItem(userKey);
    return JSON.parse(userJson);
};

export const authHeader = () => {
    const user = getUserFromLocalStorage();
    if(user && user.token){
        return { Authorization: 'Bearer ' + user.token };
    } 
    else {
        return {};
    }
};