"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A11Server = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
//import { ParsedUrlQuery } from "querystring";
var A11Server;
(function (A11Server) {
    let server = Http.createServer();
    let receivedData;
    let port = process.env.PORT;
    let datas;
    let databaseUrl = ["mongodb+srv://SchmidbergerValentin:tixzo1-Qofqir-bazruf@schmidbergervalentin.kklg0.mongodb.net/Database?retryWrites=true&w=majority", "mongodb://localhost:27019"];
    //mongodb+srv://SchmidbergerValentin:tixzo1-Qofqir-bazruf@schmidbergervalentin.kklg0.mongodb.net/Database?retryWrites=true&w=majority
    //let databaseUrl: string = ;
    if (!port)
        port = 8100;
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        port = Number(process.env.PORT);
        console.log("Starting server");
    }
    async function connectToDatabase(_url) {
        let myArgs = process.argv.slice(2);
        let switchURL;
        switch (myArgs[0]) {
            case "local":
                switchURL = databaseUrl[1];
                console.log("switched to local database");
                break;
            case "remote":
                switchURL = databaseUrl[0];
                console.log("switched to remote server");
                break;
            default:
                switchURL = databaseUrl[1];
                console.log("Sorry, that is not something I know how to do, local will beeing used");
        }
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(switchURL, options);
        await mongoClient.connect();
        datas = mongoClient.db("DatabaseGIS").collection("Entries");
        console.log("Database connection", datas != undefined);
    }
    //eine Port-Nummer wird vergeben
    //Wenn port nicht erreichbar ist, soll der Port den Wert 8100 annehmen --> localhost:8100
    //Server und zugehörige listener werden erstellt/geaddet
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //Diesen Code innerhalb von einem aktiven Server testen:
        //im Header --> ServerResponse daten
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let adresse = _request.url;
        let _url = url.parse(adresse, true);
        let pathname = _url.pathname;
        //let jsonString: string = JSON.stringify(_url.query);
        //Adresse parsen (umwandeln):
        if (_request.url) {
            if (pathname == "/receive") {
                receiveDatas(_response);
            }
            else if (pathname == "/storeData") {
                storeDatas(_url.query, _response, _request);
            }
            if (pathname == "/clearData") {
                datas.drop();
            }
        }
    }
    function storeDatas(_datas, _response, _request) {
        let adresse = _request.url;
        let _url = url.parse(adresse, true);
        for (let key in _url.query) {
            //_response.setHeader("content-type" , "json/application");
            _response.write(key + ": " + _url.query[key] + "<br/>");
        }
        datas.insertOne(_datas);
        _response.end();
    }
    console.log("Response successful");
    async function receiveDatas(_response) {
        //tslint:disable-next-line: no-any
        receivedData = await datas.find().toArray();
        for (let index = 0; index <= receivedData.length; index++) {
            if (receivedData[index]) {
                let current = receivedData[index];
                for (let key in current) {
                    _response.write(key + ": " + JSON.stringify(current[key]) + "<br>");
                }
                _response.write("<br>");
            }
        }
        _response.end();
        //_response.write(JSON.stringify(receivedData));
    }
})(A11Server = exports.A11Server || (exports.A11Server = {}));
//# sourceMappingURL=server.js.map