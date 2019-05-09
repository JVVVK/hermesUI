import './index.css';
//import numeral from "numeral";
//import {getUsers, deleteUser, getData} from './api/userApi.js';
import {getData} from './api/userApi.js';
//import {postData} from './api/userApi.js';
import * as Sentry from '@sentry/browser';

Sentry.init({ dsn: 'https://07fc76f907ab453390ea6e39d1cf32e8@sentry.io/1414822' });

window.runAPI =  function() {
    var viet_sk = document.getElementById("viet_sk").value;
    var e_obj_sk = document.getElementById("e_obj_sk").value;
    var k_obj_sk = document.getElementById("k_obj_sk").value;
    var n_obj_sk = document.getElementById("n_obj_sk").value;
    //console.log(viet_sk);
    getData(viet_sk, e_obj_sk, k_obj_sk, n_obj_sk).then(function(result){
    //getData().then(function(result){
        var data  = JSON.stringify(result);
        global.document.getElementById('data').innerHTML = data;
        //window.map.remove(result);
        //var layer = JSON.parse('{"id":"sprendinys","type":"symbol","source":{"type":"geojson","data":{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[54.683,25.317]},"properties":{"icon":"marker"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[54.9,23.9]},"properties":{"icon":"marker"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[55.717,21.117]},"properties":{"icon":"marker"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[54.95,25.067]},"properties":{"icon":"marker"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[55.733,24.35]},"properties":{"icon":"marker"}}]}},"layout":{"icon-image":"{icon}-15"},"klientai":521258,"laikas":0}');
        //window.map.addLayer(layer);
        //global.document.getElementById('mapFrame').reload();
        window.map.addLayer(result);
    });
};

/* getData().then(function(result){
    var data  = JSON.stringify(result);
    global.document.getElementById('data').innerHTML = data;
});

/* const appValue = numeral(1000).format('0,0.00');
//debugger;
console.log(`I would pay ${appValue} Eur. for this awesome app!`); // eslint-disable-line no-console

//Populate table of users via API call.
 getUsers().then(function(result){
    let usersBody = "";

    result.forEach(function(user){
        usersBody+= `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });

    global.document.getElementById('users').innerHTML = usersBody;

    const deleteLinks = global.document.getElementsByClassName('deleteUser');

    //Must use array.from to create a ream array form DOM collection
    //getElementsByClassName only returns an "array like" object

    Array.from(deleteLinks, function(link){
        link.onclick = function(event) {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes["data-id"].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });
}); */



