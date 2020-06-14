"use strict";
var Abgabe07;
(function (Abgabe07) {
    let containerMusic;
    let article;
    let divMusic;
    let totalPriceArticles = 0;
    let totalArticle = 0;
    let clearAll;
    window.addEventListener("load", init);
    function init(_event) {
        containerMusic = document.querySelector("#warenkorbDiv");
        buildArticles();
    }
    function buildArticles() {
        for (let index = 0; index <= localStorage.length - 1; index++) {
            let articleKey = localStorage.key(index);
            let jsonString = localStorage.getItem(articleKey);
            article = JSON.parse(jsonString);
            totalPriceArticles += article.preis;
            //Inhaltefestlegen//div
            divMusic = document.createElement("div");
            divMusic.setAttribute("class", "music");
            //divMusic wird an div("masterSales") angehängt
            containerMusic.appendChild(divMusic);
            //Inahltefestlegen//Pictures
            let img = document.createElement("img");
            img.setAttribute("src", article.image);
            img.setAttribute("alt", "Music Covers");
            //Inhalte festlegen//Beschreibungen (Titel, Interpret, Album, Preis)
            let pTitel = document.createElement("p");
            pTitel.setAttribute("class", "text");
            let pAlbum = document.createElement("p");
            pAlbum.setAttribute("class", "text");
            let pInterpret = document.createElement("p");
            pInterpret.setAttribute("class", "text");
            let pPrice = document.createElement("p");
            pPrice.setAttribute("class", "text");
            //Inhalte festlegen//Warenkorb icon
            let button = document.createElement("a");
            button.setAttribute("title", "Kauf entfernen!");
            button.setAttribute("class", "fas fa-trash-alt");
            button.setAttribute("href", "#fas fa-trash-alt");
            //Jeder "button" der generiert wird, bekommt ein Eventlistener
            // button.addEventListener("click", onClickButton.bind(article));
            button.addEventListener("click", onClickDelete.bind(article));
            //Inhalte festlegen//Audios
            let audio = document.createElement("audio");
            audio.setAttribute("controls", "");
            audio.setAttribute("src", article.audio);
            audio.setAttribute("class", "pAudio");
            audio.setAttribute("alt", "Audio Lines");
            //Inhalte generieren
            //Inhalte generieren//Pictures
            divMusic.appendChild(img);
            //Inhalte generieren//Warenkorb
            divMusic.appendChild(button).innerHTML = "Delete";
            //Inhalte generieren//Beschreibungen
            divMusic.appendChild(pPrice).innerHTML = "Preis: " + article.preis;
            divMusic.appendChild(pTitel).innerHTML = article.titel;
            divMusic.appendChild(pAlbum).innerHTML = article.ablum;
            divMusic.appendChild(pInterpret).innerHTML = article.interpret;
            //Inhalte generieren//Audio
            divMusic.appendChild(audio).innerHTML = article.audio;
        }
        clearAll = document.createElement("a");
        clearAll.setAttribute("href", "#jo");
        clearAll.addEventListener("click", onClickDeleteAll.bind(article));
        countPriceandArticles();
    }
    function countPriceandArticles() {
        let informationArticle = document.querySelector("#totalPrice");
        let totalPriceElement = document.createElement("p");
        let totalArticleElement = document.createElement("p");
        totalArticle = localStorage.length;
        informationArticle.appendChild(clearAll).innerHTML = "Alles entfernen";
        informationArticle.appendChild(totalPriceElement).innerHTML = "Summe: " + Math.round((totalPriceArticles + Number.EPSILON) * 100) / 100;
        informationArticle.appendChild(totalArticleElement).innerHTML = "Artikelanzahl: " + totalArticle;
    }
    function onClickDeleteAll(_click) {
        localStorage.removeItem(this.titel);
        location.reload();
    }
    function onClickDelete(_click) {
        localStorage.clear();
        location.reload();
    }
})(Abgabe07 || (Abgabe07 = {}));
//# sourceMappingURL=shoppingCart.js.map