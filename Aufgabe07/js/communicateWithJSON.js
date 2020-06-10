"use strict";
var Abgabe07;
(function (Abgabe07) {
    Abgabe07.jsonObj = [];
    async function communicate(_url) {
        let response = await fetch(_url);
        Abgabe07.jsonObj = await response.json();
    }
    Abgabe07.communicate = communicate;
})(Abgabe07 || (Abgabe07 = {}));
//# sourceMappingURL=communicateWithJSON.js.map