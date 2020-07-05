"use strict";
var A11Server;
(function (A11Server) {
    window.addEventListener("load", init);
    let navLi0;
    let navLi1;
    let navLi2;
    let div;
    let text;
    async function init(_event) {
        div = document.querySelector("h1");
        text = document.createElement("p");
        //Der Button mit der id hallo wird in dem Element navLi eingespeichert
        navLi0 = document.querySelector("#receive");
        navLi1 = document.querySelector("#storeData");
        navLi2 = document.querySelector("#clear");
        //onClickButton wird bei einem Click auf den Button ausgeführt
        navLi0.addEventListener("click", onClickButtonRet.bind(navLi0));
        navLi1.addEventListener("click", onClickButtonStoreData.bind(navLi1));
        navLi2.addEventListener("click", onClickButtonClearData.bind(navLi2));
        div.append(text);
    }
    async function onClickButtonRet(_click) {
        let _isReceive = true;
        //let url: string = "http://localhost:8100";
        let url = "https://compaktdisk.herokuapp.com";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        // url += "/";
        url += _isReceive ? "/receive" : "/storeData";
        url += "?" + query.toString();
        //console.log(url);
        let response = await fetch(url);
        let responseText = await response.text();
        text.innerHTML = "Json Obejekte:" + "<br/>" + responseText;
    }
    async function onClickButtonStoreData(_click) {
        let _isReceive = false;
        //let url: string = "http://localhost:8100";
        let url = "https://compaktdisk.herokuapp.com";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        // url += "/";
        url += _isReceive ? "/receive" : "/storeData";
        url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        // location.reload();
        text.innerHTML = "Json Objekt aufgedruselt:" + "<br/>" + responseText;
    }
    async function onClickButtonClearData(_click) {
        //let url: string = "http://localhost:8100";
        let url = "https://compaktdisk.herokuapp.com";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        // url += "/";
        url += "/clearData";
        url += "?" + query.toString();
        //console.log(url);
        let response = await fetch(url);
    }
})(A11Server || (A11Server = {}));
//# sourceMappingURL=Client.js.map