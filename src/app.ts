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


const compteur = document.querySelector('#compteur');
let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = document.querySelector('span');
    if (span) {
        span.textContent = i.toString();
    }
}

compteur?.addEventListener('click', increment);