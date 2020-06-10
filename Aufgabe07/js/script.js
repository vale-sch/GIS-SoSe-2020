"use strict";
var Abgabe07;
(function (Abgabe07) {
    //Objekte erstellen
    window.addEventListener("load", init);
    let articleCounter = 0;
    let articlePriceCounter = 0;
    let saleDiv;
    let favoritesDiv;
    let divMusic;
    let hideHeadlineFav;
    let hideHeadlineSal;
    //main Methode, legt Laufrichtung fest
    async function init(_event) {
        await Abgabe07.communicate("artikel.json");
        //Artikel erstellen 
        generateArticles();
        //hier werden die beiden gesetzen h1 Überschriften aus der html selektiert, um sie bei Click-Anforderung auszublenden. 
        hideHeadlineFav = document.querySelector("#favoriten");
        hideHeadlineSal = document.querySelector("#sales");
        //selbsterklärend lul
        loadNavListeners();
    }
    //Funktion für Artikel Sales&Favoriten
    function generateArticles() {
        console.log(Abgabe07.jsonObj);
        for (let index = 0; index < Abgabe07.jsonObj.length; index++) {
            if (Abgabe07.jsonObj[index].kategorie == "sale") {
                //leeres div aus HTMl selektieren und attribuieren 
                saleDiv = document.querySelector("#sales + div");
                saleDiv.setAttribute("id", "masterSales");
                //Inhaltefestlegen//div
                divMusic = document.createElement("div");
                divMusic.setAttribute("class", "music");
                //divMusic wird an div("masterSales") angehängt
                saleDiv.appendChild(divMusic);
            }
            else {
                //leeres div aus HTMl selektieren und attribuieren 
                favoritesDiv = document.querySelector("#favoriten + div");
                favoritesDiv.setAttribute("id", "masterFavorites");
                //Inhaltefestlegen//div
                divMusic = document.createElement("div");
                divMusic.setAttribute("class", "music");
                //divMusic wird an div("masterFavorites") angehängt
                favoritesDiv.appendChild(divMusic);
            }
            //Inahltefestlegen//Pictures
            let img = document.createElement("img");
            img.setAttribute("src", Abgabe07.jsonObj[index].image);
            img.setAttribute("alt", "Music Covers");
            //Inhalte festlegen//Beschreibungen (Titel, Interpret, Album, Preis)
            let pTitel = document.createElement("p");
            pTitel.setAttribute("class", "text");
            let pAlbum = document.createElement("p");
            pAlbum.setAttribute("class", "text");
            let pInterpret = document.createElement("p");
            pInterpret.setAttribute("class", "text");
            let pPrice = document.createElement("a");
            pPrice.setAttribute("class", "text");
            //Inhalte festlegen//Warenkorb icon
            let button = document.createElement("a");
            button.setAttribute("title", "Ab in den Warenkorb!");
            button.setAttribute("class", "fas fa-shopping-bag");
            button.setAttribute("href", "#fas fa-shopping-bag");
            //Jeder "button" der generiert wird, bekommt ein Eventlistener
            button.addEventListener("click", onClickButton.bind(Abgabe07.jsonObj[index]));
            //Inhalte festlegen//Audios
            let audio = document.createElement("audio");
            audio.setAttribute("controls", "");
            audio.setAttribute("src", Abgabe07.jsonObj[index].audio);
            audio.setAttribute("class", "pAudio");
            audio.setAttribute("alt", "Audio Lines");
            //Inhalte generieren
            //Inhalte generieren//Pictures
            divMusic.appendChild(img);
            //Inhalte generieren//Warenkorb
            divMusic.appendChild(button).innerHTML = "Preis: " + Abgabe07.jsonObj[index].preis + "€";
            //Inhalte generieren//Beschreibungen
            divMusic.appendChild(pTitel).innerHTML = Abgabe07.jsonObj[index].titel;
            divMusic.appendChild(pAlbum).innerHTML = Abgabe07.jsonObj[index].ablum;
            divMusic.appendChild(pInterpret).innerHTML = Abgabe07.jsonObj[index].interpret;
            //Inhalte generieren//Audio
            divMusic.appendChild(audio).innerHTML = Abgabe07.jsonObj[index].audio;
        }
    }
    //Funktion/EventListener für Preis-aufaddieren/Artikelcounter
    function onClickButton(_click) {
        articlePriceCounter += this.preis;
        console.log("Summe: " + Math.round((articlePriceCounter + Number.EPSILON) * 100) / 100);
        let basketNumber = document.querySelector("li:last-child");
        let standardBasket = document.createElement("i");
        standardBasket.setAttribute("class", "fas fa-shopping-basket");
        articleCounter++;
        if (articlePriceCounter > 0) {
            basketNumber.setAttribute("id", "basketNumber");
            basketNumber.innerHTML = "" + articleCounter;
        }
        else {
            basketNumber.innerHTML = "";
        }
    }
    //Funktion um erste 3 Elemente aus der Navigation zu selektieren und sie dann an den Eventlistener("onCLickNavBar") zu binden 
    function loadNavListeners() {
        let navLi;
        let literateNavbar = 4;
        for (let index = 1; index < literateNavbar; index++) {
            navLi = document.querySelector(".menu li:nth-child(" + index + ") a");
            navLi.addEventListener("click", onClickNavBar.bind(navLi));
        }
    }
    //Funktion um die 3 verschiedenen Click-Möglichkeiten zu unterscheiden (Startseite, Sales, Charts)
    function onClickNavBar(_click) {
        let onClick = this.getAttribute("href");
        switch (onClick) {
            case "#Everything":
                showEverthing();
                break;
            case "#Sales":
                showSales();
                break;
            case "#Favoriten":
                showFavorites();
                break;
        }
    }
    //Zusatzmethoden die innerhalb "onClickNavbar" in den 3 unterschiedlichen Fällen jeweils aufgerufen wird // die Artikel werden nicht gelöscht, sondern lediglich ausgeblendet.  
    function showEverthing() {
        saleDiv.style.display = "grid";
        favoritesDiv.style.display = "grid";
        hideHeadlineFav.style.display = "block";
        hideHeadlineSal.style.display = "block";
    }
    function showSales() {
        saleDiv.style.display = "grid";
        favoritesDiv.style.display = "none";
        hideHeadlineSal.style.display = "block";
        hideHeadlineFav.style.display = "none";
    }
    function showFavorites() {
        saleDiv.style.display = "none";
        favoritesDiv.style.display = "grid";
        hideHeadlineFav.style.display = "block";
        hideHeadlineSal.style.display = "none";
    }
})(Abgabe07 || (Abgabe07 = {}));
//# sourceMappingURL=script.js.map