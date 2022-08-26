"use strict";
// const user: {
//     name: string;
//     [key: string]: string;
// } = {
//     name: 'Max',
//     lastname: 'Mustermann',
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PointTwo = void 0;
// const func: Function = (e: MouseEvent): void => {
//     console.log(e);
// }
// const cb: (e: MouseEvent) => void = (e: MouseEvent): void => {
//     console.log(e);
// }
// const compteur = document.getElementById('compteur') as HTMLButtonElement;
var printId = function (id) {
    console.log(id.toString());
    if (typeof id === 'number') {
        console.log(id.toString());
    }
    else {
        console.log(id.toUpperCase());
    }
};
function isDate(a) {
    return a instanceof Date;
}
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
var user = {
    fistname: 'Max',
    lastname: 'Mustermann'
};
var idUser = 123;
function identity(arg) {
    return arg;
}
var aa = identity(1);
function reverse(arr) {
    return arr.slice().reverse();
}
var A = /** @class */ (function () {
    function A() {
        this.a = 3;
        this.b = 2;
    }
    A.prototype.log = function () {
        console.log(this.a);
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.log = function () {
        console.log(this.b);
    };
    return B;
}(A));
var aInstance = new A();
var TwoDimensionPoint = /** @class */ (function () {
    function TwoDimensionPoint() {
        this.x = 0;
        this.y = 0;
    }
    return TwoDimensionPoint;
}());
function draw(point) {
    console.log(point.x, point.y);
}
draw(new TwoDimensionPoint());
function a(arg) {
    if (arg instanceof HTMLInputElement) {
        arg.value = 'hello';
    }
    else {
        console.log('not an input');
    }
}
var STEPS;
(function (STEPS) {
    STEPS["Intro"] = "Intro";
    STEPS["Selection"] = "Selection";
    STEPS["Panier"] = "Panier";
    STEPS["Paiement"] = "Paiement";
})(STEPS || (STEPS = {}));
var steps = STEPS.Intro;
console.log(STEPS["Intro"]);
var PointTwo = /** @class */ (function () {
    function PointTwo() {
        this.x = 0;
        this.y = 0;
    }
    PointTwo.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    return PointTwo;
}());
exports.PointTwo = PointTwo;
var scroll_to_1 = require("scroll-to");
(0, scroll_to_1["default"])(500, 1200, {
    ease: 'out-bounce',
    duration: 2000
});
var Poisson = /** @class */ (function () {
    function Poisson() {
    }
    return Poisson;
}());
var Chat = /** @class */ (function () {
    function Chat() {
    }
    Chat.prototype.cri = function () {
        return "J";
    };
    return Chat;
}());
// function generator<T extends {nager: any} | {sauter: any}>(options: T): T extends {nager: any} ? Poisson : Chat {
//     if ("nager" in options) {
//         return new Poisson()
//     } else {
//         return new Chat()
//     }
// }
// const d = generator({nager: "asa"})
