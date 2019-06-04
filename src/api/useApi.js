import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getData(a,b,c,d){
     var qstring = 'data?viet_sk='+a+'&e_obj_sk='+b+'&k_obj_sk='+c+'&n_obj_sk='+d;
    return get(qstring);
}

function get(url){
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response){
    return response.json();
    //return response;
}

function onError(error){
    console.log(error); // eslint-disable-line no-console
}
