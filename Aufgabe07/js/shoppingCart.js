"use strict";
var Abgabe07;
(function (Abgabe07) {
    Abgabe07.jsonObj = [];
    communicate("artikel.json");
    async function communicate(_url) {
        let response = await fetch("artikel.json");
        let jsonObj = await response.json();
        //let produkte: Artikel[] = JSON.parse(jsonObj);
        //console.log("Produkte: ", produkte);
    }
})(Abgabe07 || (Abgabe07 = {}));
//# sourceMappingURL=shoppingCart.js.map