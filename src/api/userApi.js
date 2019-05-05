import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

/*export function getUsers(){
    return get('users');
}

export function deleteUser(id) {
    return del(`users/${id}`);
}*/

export function getData(){
    return get('data');
}

function get(url){
    return fetch(baseUrl + url).then(onSuccess, onError);
}

// fuction name "delete" is a reserved word
/*function del(url){
   const request = new Request(baseUrl + url, {
        method: 'DELETE'
    });

    return fetch(request).then(onSuccess, onError);
}*/

function onSuccess(response){
    return response.json();
    //return response;
}

function onError(error){
    console.log(error); // eslint-disable-line no-console
}
