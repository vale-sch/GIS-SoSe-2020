"use strict";
var A09Server;
(function (A09Server) {
    window.addEventListener("load", init);
    let navLi0;
    let navLi1;
    let div;
    let text;
    let responseJson;
    async function init(_event) {
        div = document.querySelector("h1");
        text = document.createElement("p");
        //Der Button mit der id hallo wird in dem Element navLi eingespeichert
        navLi0 = document.querySelector("#button0");
        navLi1 = document.querySelector("#button1");
        //onClickButton wird bei einem Click auf den Button ausgeführt
        navLi0.addEventListener("click", onClickButton0.bind(navLi0));
        navLi1.addEventListener("click", onClickButton1.bind(navLi1));
    }
    async function onClickButton0(_click) {
        let url = "https://compaktdisk.herokuapp.com/";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        div.appendChild(text).innerHTML = "Eingabe: " + responseText;
    }
    async function onClickButton1(_click) {
        let url = "https://compaktdisk.herokuapp.com/";
        let formData = new FormData(document.forms[0]);
        //Form-Element aus der HTML Datei ziehen
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        responseJson = JSON.parse(responseText);
        console.log(responseJson);
    }
})(A09Server || (A09Server = {}));
//# sourceMappingURL=testClass.js.map