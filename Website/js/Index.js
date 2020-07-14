"use strict";
var Eisdiele;
(function (Eisdiele) {
    let setupDiv;
    let waffelDiv;
    let eisDiv;
    let sosenDiv;
    let stecksachenDiv;
    let streuselDiv;
    let formatDiv;
    let iceDiv;
    let img;
    let amount = 1;
    let eis;
    let constantNumber;
    let articleCounter;
    //let previousImage: string;
    function init() {
        appendFunction();
        theIceCreator();
    }
    function appendFunction() {
        setupDiv = document.getElementById("setupDiv");
        waffelDiv = document.getElementById("WaffelnDiv");
        eisDiv = document.getElementById("EisDiv");
        sosenDiv = document.getElementById("SosenDiv");
        stecksachenDiv = document.getElementById("StecksachenDiv");
        streuselDiv = document.getElementById("StreuselDiv");
        iceDiv = document.getElementById("iceDiv");
        iceDiv = document.getElementById("iceDiv");
    }
    init();
    communicate("eis.json");
    async function communicate(_url) {
        let response = await fetch(_url);
        Eisdiele.jsonObj = await response.json();
        generateIce();
    }
    function generateIce() {
        for (let index = 0; index < Eisdiele.jsonObj.length; index++) {
            if (Eisdiele.jsonObj[index].kategorie == "Waffel") {
                formatDiv = document.createElement("div");
                formatDiv.setAttribute("class", "formatDiv");
                setupDiv.appendChild(waffelDiv);
                waffelDiv.appendChild(formatDiv);
            }
            if (Eisdiele.jsonObj[index].kategorie == "Eis") {
                formatDiv = document.createElement("div");
                formatDiv.setAttribute("class", "formatDiv");
                setupDiv.appendChild(eisDiv);
                eisDiv.appendChild(formatDiv);
            }
            if (Eisdiele.jsonObj[index].kategorie == "Stecksachen") {
                formatDiv = document.createElement("div");
                formatDiv.setAttribute("class", "formatDiv");
                setupDiv.appendChild(stecksachenDiv);
                stecksachenDiv.appendChild(formatDiv);
            }
            if (Eisdiele.jsonObj[index].kategorie == "Soßen") {
                formatDiv = document.createElement("div");
                formatDiv.setAttribute("class", "formatDiv");
                setupDiv.appendChild(sosenDiv);
                sosenDiv.appendChild(formatDiv);
            }
            if (Eisdiele.jsonObj[index].kategorie == "Streusel") {
                formatDiv = document.createElement("div");
                formatDiv.setAttribute("class", "formatDiv");
                setupDiv.appendChild(streuselDiv);
                streuselDiv.appendChild(formatDiv);
            }
            let img = document.createElement("img");
            img.setAttribute("src", Eisdiele.jsonObj[index].image);
            let beschreibung = document.createElement("p");
            beschreibung.setAttribute("class", "text");
            let preis = document.createElement("p");
            preis.setAttribute("class", "text");
            let button = document.createElement("button");
            button.setAttribute("class", "creationButton");
            button.addEventListener("click", onClickCreation.bind(Eisdiele.jsonObj[index]));
            formatDiv.appendChild(img);
            formatDiv.appendChild(beschreibung).innerHTML = "-->" + Eisdiele.jsonObj[index].beschreibung;
            formatDiv.appendChild(preis).innerHTML = "Kosten pro Stück: " + Eisdiele.jsonObj[index].preis + "€";
            formatDiv.appendChild(button).innerHTML = "Ab in die Kreation! ";
        }
    }
    function onClickCreation(_click) {
        if (localStorage.length > 0) {
            if (this.kategorie == "Eis") {
                constantNumber = localStorage.length;
                console.log("constantjo: " + constantNumber);
            }
        }
        if (localStorage.length == 0) {
            amount = 0;
        }
        amount++;
        this.stück = amount;
        pushToLocalStorage(this);
        onClickclearIceDiv(iceDiv);
    }
    function theIceCreator() {
        if (localStorage.length > 0) {
            let actualCreation = document.createElement("p");
            iceDiv.appendChild(actualCreation).innerHTML = "Ihre persönliche Kreation:";
        }
        for (let index = 0; index <= localStorage.length - 1; index++) {
            let articleKey = localStorage.key(index);
            let jsonString = localStorage.getItem(articleKey);
            eis = JSON.parse(jsonString);
            img = document.createElement("img");
            img.setAttribute("src", eis.image);
            let informationTag = document.createElement("p");
            informationTag.addEventListener("click", onClickDeleteStorage.bind(eis));
            let pictureDiv;
            pictureDiv = document.createElement("div");
            pictureDiv.setAttribute("class", "pictureDiv");
            iceDiv.appendChild(pictureDiv);
            iceDiv.appendChild(informationTag).innerHTML = eis.stück + "." + "-" + eis.name;
            if (eis.kategorie == "Waffel") {
                img.style.position = "fixed";
                img.style.bottom = "0%";
                img.style.left = "10%";
                pictureDiv.appendChild(img);
            }
            else if (eis.kategorie == "Eis") {
                if (eis.stück == 2) {
                    console.log("BEdingung eis.stück = 2");
                    img.style.position = "fixed";
                    img.style.left += "10%";
                    img.style.bottom += "300px";
                    pictureDiv.appendChild(img);
                }
                else {
                    console.log("Eis");
                    console.log("constant: " + constantNumber);
                    img.style.position = "fixed";
                    img.style.left += ("10%");
                    //img.style.left = - (index * 7) * 49 + "px";
                    img.style.bottom += (eis.stück * 95) + 120 + "px";
                    //img.style.bottom = "-100px";
                    pictureDiv.appendChild(img);
                }
            }
            if (eis.kategorie == "Stecksachen") {
                img.style.position = "fixed";
                img.style.left += ("10%");
                img.style.bottom += (constantNumber * 100) + 300 + "px";
                let rotateNumber = index * 3;
                img.style.transform += ("rotate" + "(" + rotateNumber + "deg)");
                pictureDiv.appendChild(img);
            }
            if (eis.kategorie == "Streusel") {
                img.style.position = "fixed";
                img.style.left += ("10%");
                img.style.bottom += (constantNumber * 190) - (25 * index) + "px";
                pictureDiv.appendChild(img);
            }
            if (eis.kategorie == "Soßen") {
                img.style.position = "fixed";
                img.style.left += ("10%");
                img.style.bottom += (constantNumber * 190) - (20 * index) + "px";
                pictureDiv.appendChild(img);
            }
        }
        if (localStorage.length > 0) {
            let tryAgain;
            tryAgain = document.createElement("a");
            tryAgain.setAttribute("class", "fas fa-redo-alt");
            tryAgain.setAttribute("href", "#fas fa-redo-alt");
            tryAgain.style.textAlign = "right";
            tryAgain.style.textDecorationColor = "lila";
            iceDiv.appendChild(tryAgain).innerHTML = " New Creation";
            tryAgain.addEventListener("click", onClickDeleteStorage.bind(tryAgain));
            let basketLink;
            basketLink = document.createElement("a");
            basketLink.setAttribute("class", "fas fa-shopping-bag");
            basketLink.setAttribute("href", "#fas fa-shopping-bag");
            basketLink.style.textAlign = "right";
            basketLink.style.textDecorationColor = "lila";
            basketLink.style.lineHeight = "50px";
            iceDiv.appendChild(basketLink).innerHTML = " In den Warenkorb!";
            iceDiv.addEventListener("click", onClickBasket.bind(basketLink));
        }
        console.log("------localstorage-------");
        console.log(localStorage);
    }
    function onClickDeleteStorage() {
        localStorage.clear();
        location.reload();
    }
    function pushToLocalStorage(_eis) {
        let inhalt = JSON.stringify(_eis);
        if (_eis.stück > 0) {
            localStorage.setItem(_eis.stück.toString(), inhalt);
        }
        else {
            localStorage.setItem(_eis.stück.toString(), inhalt);
        }
    }
    function onClickclearIceDiv(_iceDiv) {
        iceDiv.innerHTML = "";
        theIceCreator();
    }
    function onClickBasket() {
        articleCounter = localStorage.length;
        console.log("HALLLLO");
        let basketNumber = document.querySelector("li:last-child");
        basketNumber.setAttribute("id", "basketNumber");
        if (articleCounter > 0) {
            basketNumber.setAttribute("id", "basketNumber");
            basketNumber.innerHTML = "" + articleCounter;
        }
        else {
            basketNumber.innerHTML = "";
        }
    }
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=Index.js.map