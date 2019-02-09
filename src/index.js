import './index.css';
import numeral from "numeral";

const appValue = numeral(1000).format('0,0.00');
//debugger;
console.log(`I would pay ${appValue} Eur. for this awesome app!`); // eslint-disable-line no-console
