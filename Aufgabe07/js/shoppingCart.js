"use strict";
var Abgabe07;
(function (Abgabe07) {
    communicate("Artikel.json");
    async function communicate(_url) {
        let response = await fetch("Artikel.json");
        let jsonObj = await response.json();
        console.log("Response", jsonObj);
        //let produkte: Artikel[] = JSON.parse(jsonObj);
        //console.log("Produkte: ", produkte);
    }
})(Abgabe07 || (Abgabe07 = {}));
//# sourceMappingURL=shoppingCart.js.map