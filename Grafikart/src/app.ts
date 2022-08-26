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

// const compteur = document.getElementById('compteur') as HTMLButtonElement;

const printId = (id: string | number): void => {
    console.log(id.toString());
    if (typeof id === 'number') {
        console.log(id.toString());
    } else {
        console.log(id.toUpperCase());
    }
}

function isDate (a: any): a is Date {
    return a instanceof Date;
}

const compteur = <HTMLInputElement>document.querySelector('#compteur');
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

type User = {
    fistname: string;
    lastname: string;
}
type Id = number | string;

const user: User = {
    fistname: 'Max',
    lastname: 'Mustermann',
}
const idUser: Id = 123;

function identity<ArgType>(arg: ArgType): ArgType{
    return arg;
}

const aa = identity<number>(1);

function reverse<T>(arr: readonly T[]): T[] {
    return arr.slice().reverse();
}

class A {
    private a = 3
    protected b = 2
    log(){
        console.log(this.a)
    }
}

class B extends A {
    log() {
        console.log(this.b)
    }
}

const aInstance = new A();

interface Point {
    x: number;
    y: number;
}

class TwoDimensionPoint implements Point {
    x = 0
    y = 0
}

function draw (point: Point) {
    console.log(point.x, point.y)
}

draw(new TwoDimensionPoint())

function a(arg: unknown) {
    if (arg instanceof HTMLInputElement) {
        arg.value = 'hello'
    } else {
        console.log('not an input')
    }
}

enum STEPS {
    Intro = "Intro",
    Selection = "Selection",
    Panier = "Panier",
    Paiement = "Paiement",
}

const steps = STEPS.Intro;
console.log(STEPS["Intro"])

export class PointTwo {
    x = 0
    y = 0

    move (dx: number, dy: number) {
        this.x += dx
        this.y += dy
    }
}

import scrollTo from 'scroll-to'

scrollTo(500, 1200, {
    ease: 'out-bounce',
    duration: 2000
})

class Poisson {
    
}

class Chat {
    cri() {
        return "J"
    }
}

// function generator<T extends {nager: any} | {sauter: any}>(options: T): T extends {nager: any} ? Poisson : Chat {
//     if ("nager" in options) {
//         return new Poisson()
//     } else {
//         return new Chat()
//     }
// }

// const d = generator({nager: "asa"})