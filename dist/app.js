"use strict";
// const user: {
//     name: string;
//     [key: string]: string;
// } = {
//     name: 'Max',
//     lastname: 'Mustermann',
// }
// const func: Function = (e: MouseEvent): void => {
//     console.log(e);
// }
// const cb: (e: MouseEvent) => void = (e: MouseEvent): void => {
//     console.log(e);
// }
// const printId = (id: string | number): void => {
//     console.log(id.toString());
// }
// const compteur = document.getElementById('compteur') as HTMLButtonElement;
var compteur = document.querySelector('#compteur');
var i = 0;
var increment = function (e) {
    e.preventDefault();
    i++;
    var span = document.querySelector('span');
    if (span) {
        span.textContent = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
