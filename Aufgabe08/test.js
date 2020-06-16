"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aufgabe08 = void 0;
const Http = require("http");
var aufgabe08;
(function (aufgabe08) {
    test08();
    async function test08() {
        let formData = new FormData(document.forms[0]);
        let url = "https://compaktdisk.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        await fetch(url);
    }
    Http.createServer();
})(aufgabe08 = exports.aufgabe08 || (exports.aufgabe08 = {}));
console.log("test");
//# sourceMappingURL=test.js.map