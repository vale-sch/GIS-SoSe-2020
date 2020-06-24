"use strict";
var A09Server;
(function (A09Server) {
    window.addEventListener("load", init);
    let navLi;
    let div;
    let text;
    let responseJson;
    async function init(_event) {
        div = document.querySelector("h1");
        text = document.createElement("p");
        //Der Button mit der id hallo wird in dem Element navLi eingespeichert
        navLi = document.querySelector("#hallo");
        //onClickButton wird bei einem Click auf den Button ausgeführt
        navLi.addEventListener("click", onClickButton.bind(navLi));
    }
    async function onClickButton(_click) {
        let url = "https://compaktdisk.herokuapp.com/";
        let formData = new FormData(document.forms[0]);
        //Form-Element aus der HTML Datei ziehen
        //let url: string = "https://compaktdisk.herokuapp.com/";
        // tslint:disable-next-line: no-any
        //alle Zeichen nach dem "?"
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        responseJson = JSON.parse(responseText);
        console.clear();
        console.log(responseText);
        console.log(responseJson);
        div.appendChild(text).innerHTML = "Eingabe: " + responseText;
    }
})(A09Server || (A09Server = {}));
//# sourceMappingURL=testClass.js.map