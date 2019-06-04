import './index.css';
import {getData} from './api/useApi.js';
import * as Sentry from '@sentry/browser';

Sentry.init({ dsn: 'https://07fc76f907ab453390ea6e39d1cf32e8@sentry.io/1414822' });

window.runAPI =  function() {
    global.document.getElementById('clients').innerHTML = "Klientų skaičius: ";
    global.document.getElementById('time').innerHTML = "Skaičiavimo laikas (sek.): ";
    var viet_sk = document.getElementById("viet_sk").value;
    var e_obj_sk = document.getElementById("e_obj_sk").value;
    var k_obj_sk = document.getElementById("k_obj_sk").value;
    var n_obj_sk = document.getElementById("n_obj_sk").value;
    getData(viet_sk, e_obj_sk, k_obj_sk, n_obj_sk).then(function(result){
        var data  = JSON.stringify(result);
        var clients = result.klientai;
        var time = result.laikas;
        global.document.getElementById('clients').innerHTML += clients;
        global.document.getElementById('time').innerHTML += time;
        global.document.getElementById('data').innerHTML = data;
        var mapLayer = window.map.getLayer('sprendinys');
            if(typeof mapLayer !== 'undefined') {
             // Remove map layer & source.
             window.map.removeLayer('sprendinys').removeSource('sprendinys');
            }
        window.map.addLayer(result);
    });
};



