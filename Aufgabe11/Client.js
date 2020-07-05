"use strict";
var A11Server;
(function (A11Server) {
    window.addEventListener("load", init);
    let navLi0;
    let navLi1;
    let div;
    let text;
    async function init(_event) {
        div = document.querySelector("h1");
        text = document.createElement("p");
        //Der Button mit der id hallo wird in dem Element navLi eingespeichert
        navLi0 = document.querySelector("#retrieve");
        navLi1 = document.querySelector("#noretrieve");
        //onClickButton wird bei einem Click auf den Button ausgeführt
        navLi0.addEventListener("click", onClickButtonRet.bind(navLi0));
        navLi1.addEventListener("click", onClickButtonNoRet.bind(navLi1));
        div.append(text);
    }
    async function onClickButtonRet(_click) {
        let _isRetrieve = true;
        let url = "https://compaktdisk.herokuapp.com";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        // url += "/";
        url += _isRetrieve ? "/retrieve" : "/noRetrieve";
        url += "?" + query.toString();
        //console.log(url);
        let response = await fetch(url);
        //let responseText: string = await response.text();
        console.log(response);
    }
    async function onClickButtonNoRet(_click) {
        let _isRetrieve = false;
        let url = "https://compaktdisk.herokuapp.com";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        // url += "/";
        url += _isRetrieve ? "/retrieve" : "/noRetrieve";
        url += "?" + query.toString();
        //console.log(url);
        let response = await fetch(url);
        //let responseText: string = await response.text();
        console.log(response);
    }
})(A11Server || (A11Server = {}));
//# sourceMappingURL=Client.js.map