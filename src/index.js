import './index.css';
//import numeral from "numeral";
//import {getUsers, deleteUser, getData} from './api/userApi.js';
//import {getData} from './api/userApi.js';
import {postData} from './api/userApi.js';
import * as Sentry from '@sentry/browser';

Sentry.init({ dsn: 'https://07fc76f907ab453390ea6e39d1cf32e8@sentry.io/1414822' });

window.runAPI =  function() {
    //var viet_sk = document.getElementById("viet_sk").value;
    //var e_obj_sk = document.getElementById("e_obj_sk").value;
    //var k_obj_sk = document.getElementById("k_obj_sk").value;
    //var n_obj_sk = document.getElementById("n_obj_sk").value;
    //console.log(viet_sk);
    //postData(viet_sk, e_obj_sk, k_obj_sk, n_obj_sk).then(function(result){
    postData().then(function(result){
        var data  = JSON.stringify(result);
        global.document.getElementById('data').innerHTML = data;
    });
};

/* getData().then(function(result){
    var data  = JSON.stringify(result);
    global.document.getElementById('data2').innerHTML = data;
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



