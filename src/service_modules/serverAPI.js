import {SERVER_ADDRESS} from '../constants/server'

export async function isUserAuthentificated(){
    let response = await fetch(`${SERVER_ADDRESS}/login`, {
        method: 'GET',
        credentials: 'include'
    });
    let {isAuthentificated} = await response.json();
    
    return isAuthentificated;
}

export async function authenteficateUser(user){
    let response = await fetch(`${SERVER_ADDRESS}/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    return response.json()
}