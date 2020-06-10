"use strict";
var Abgabe07;
(function (Abgabe07) {
    Abgabe07.jsonObj = [];
    communicate("artikel.json");
    async function communicate(_url) {
        let response = await fetch(_url);
        Abgabe07.jsonObj = await response.json();
    }
})(Abgabe07 || (Abgabe07 = {}));
//# sourceMappingURL=shoppingCart.js.map