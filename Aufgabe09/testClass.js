"use strict";
var A09Server;
(function (A09Server) {
    window.addEventListener("load", init);
    let navLi0;
    let navLi1;
    let div;
    let text;
    async function init(_event) {
        div = document.querySelector("h1");
        text = document.createElement("p");
        //Der Button mit der id hallo wird in dem Element navLi eingespeichert
        navLi0 = document.querySelector("#button0");
        navLi1 = document.querySelector("#button1");
        //onClickButton wird bei einem Click auf den Button ausgeführt
        navLi0.addEventListener("click", onClickButtonHTML.bind(navLi0));
        navLi1.addEventListener("click", onClickButtonJSON.bind(navLi1));
        div.append(text);
    }
    async function onClickButtonHTML(_click) {
        let _isHTML = true;
        let url = "https://compaktdisk.herokuapp.com";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += _isHTML ? "/html" : "/json";
        url += "?" + query.toString();
        //console.log(url);
        let response = await fetch(url);
        let responseText = await response.text();
        text.innerHTML = responseText;
    }
    async function onClickButtonJSON(_click) {
        let _isHTML = false;
        let url = "https://compaktdisk.herokuapp.com";
        let formData = new FormData(document.forms[0]);
        //Form-Element aus der HTML Datei zieh
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += _isHTML ? "/html" : "/json";
        url += "?" + query.toString();
        //console.log(url);
        let response = await fetch(url);
        let responseText = await response.text();
        text.innerHTML = "JSON-Objekt: " + responseText;
        let responseJson = JSON.parse(responseText);
        console.log(responseJson);
    }
})(A09Server || (A09Server = {}));
//# sourceMappingURL=testClass.js.map