"use strict";
var A08Server;
(function (A08Server) {
    window.addEventListener("load", init);
    let navLi;
    async function onClickButton(_click) {
        //Form-Element aus der HTML Datei ziehen
        let formData = new FormData(document.forms[0]);
        let url = "https://compaktdisk.herokuapp.com/";
        // tslint:disable-next-line: no-any
        //alle Zeichen nach dem "?"
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let urlEmpfangen = await fetch(url);
        let urlAusgeben = await urlEmpfangen.url;
        urlAusgeben = urlAusgeben.replace("https://compaktdisk.herokuapp.com/", "");
        console.log(urlAusgeben);
    }
    async function init(_event) {
        //Der Button mit der id hallo wird in dem Element navLi eingespeichert
        navLi = document.querySelector("#hallo");
        //onClickButton wird bei einem Click auf den Button ausgeführt
        navLi.addEventListener("click", onClickButton.bind(navLi));
    }
})(A08Server || (A08Server = {}));
//# sourceMappingURL=testClass.js.map