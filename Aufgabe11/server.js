"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
const Http = require("http");
const url = require("url");
//import { ParsedUrlQuery } from "querystring";
var A09Server;
(function (A09Server) {
    console.log("Starting server");
    //eine Port-Nummer wird vergeben
    let port = Number(process.env.PORT);
    //Wenn port nicht erreichbar ist, soll der Port den Wert 8100 annehmen --> localhost:8100
    if (!port)
        port = 8100;
    //Server und zugehörige listener werden erstellt/geaddet
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //Diesen Code innerhalb von einem aktiven Server testen:
        //im Header --> ServerResponse daten
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let adresse = _request.url;
        let q = url.parse(adresse, true);
        let pathname = q.pathname;
        //Adresse parsen (umwandeln):
        if (_request.url) {
            if (pathname == "/json") {
                let jsonString = JSON.stringify(q.query);
                //_response.setHeader("content-type", "text/html; charset-utf-8");
                _response.write(jsonString);
            }
            else if (pathname == "/html") {
                for (let key in q.query) {
                    //_response.setHeader("content-type" , "json/application");
                    _response.write(key + ":    " + q.query[key] + "<br/>");
                }
            }
            console.log("Response successful");
            _response.end();
        }
    }
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=server.js.map