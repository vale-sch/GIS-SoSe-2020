"use strict";
var Eisdiele;
(function (Eisdiele) {
    let eis;
    let basketArticleDiv;
    let informationDiv;
    let totalPrice;
    let countPrice = 0;
    init();
    function init() {
        appendHTML();
        generateBasketArticle();
    }
    function appendHTML() {
        basketArticleDiv = document.getElementById("warenKorbArtikel");
        informationDiv = document.getElementById("informationAnzeige");
    }
    function generateBasketArticle() {
        for (let index = 0; index <= localStorage.length - 1; index++) {
            let articleKey = localStorage.key(index);
            let jsonString = localStorage.getItem(articleKey);
            eis = JSON.parse(jsonString);
            let img = document.createElement("img");
            img.setAttribute("src", eis.image);
            let beschreibung = document.createElement("p");
            beschreibung.setAttribute("class", "text");
            let preis = document.createElement("p");
            preis.setAttribute("class", "text");
            let formatDiv = document.createElement("div");
            formatDiv.setAttribute("class", "formatDiv");
            basketArticleDiv.appendChild(formatDiv);
            countPrice += eis.preis;
            console.log(eis.preis);
            console.log(countPrice);
            formatDiv.appendChild(img);
            formatDiv.appendChild(beschreibung).innerHTML = "-->" + eis.beschreibung;
            formatDiv.appendChild(preis).innerHTML = "Kosten pro Stück: " + eis.preis + "€";
        }
        console.log("countPrixe: " + countPrice);
        totalPrice = document.createElement("h2");
        totalPrice.style.textAlign = "left";
        informationDiv.appendChild(totalPrice).innerHTML = "\xa0\xa0" + countPrice + "€";
    }
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=Basket.js.map