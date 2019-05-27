import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();
//const proxyUrl = 'https://cors-anywhere.herokuapp.com/',

/*export function getUsers(){
    return get('users');
}

export function deleteUser(id) {
    return del(`users/${id}`);
}

export function postData(a, b, c, d){
    return post('data', a, b, c, d);
}

export function postData(){
    return post('data');
}*/

export function getData(a,b,c,d){
     var qstring = 'data?viet_sk='+a+'&e_obj_sk='+b+'&k_obj_sk='+c+'&n_obj_sk='+d;
    return get(qstring);
}

function get(url){
    return fetch(baseUrl + url).then(onSuccess, onError);
}

/*function post(url){
    var request = new Request(baseUrl + url, {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin":"*",
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            apiCall: {
                viet_sk: 100,
                e_obj_sk: 100,
                k_obj_sk: 10,
                n_obj_sk: 15
            }
        })
    });
    return fetch(request).then(onSuccess, onError);
}*/

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
