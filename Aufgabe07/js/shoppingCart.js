"use strict";
var Abgabe07;
(function (Abgabe07) {
    let container;
    let article;
    window.addEventListener("load", init);
    function init(_event) {
        container = document.querySelector("#Warenkorb");
        buildArticles();
    }
    function buildArticles() {
        //console.log(localStorage);
        for (let index = 0; index <= localStorage.length; index++) {
            let articleKey = localStorage.key(index);
            let jsonString = localStorage.getItem(articleKey);
            article = JSON.parse(jsonString);
            container.appendChild(Abgabe07.generateDiv(article));
        }
    }
})(Abgabe07 || (Abgabe07 = {}));
//# sourceMappingURL=shoppingCart.js.map