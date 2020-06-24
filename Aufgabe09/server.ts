import * as Http from "http";
import * as url from "url";
//import { ParsedUrlQuery } from "querystring";

export namespace A09Server {
  console.log("Starting server");
  //eine Port-Nummer wird vergeben
  let port: number = Number(process.env.PORT);
  //Wenn port nicht erreichbar ist, soll der Port den Wert 8100 annehmen --> localhost:8100
  if (!port)
    port = 8100;
  //Server und zugehörige listener werden erstellt/geaddet
  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

    //Diesen Code innerhalb von einem aktiven Server testen:
    //im Header --> ServerResponse daten
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    let adresse: string = <string>_request.url;
    //Adresse parsen (umwandeln):
    let q: url.UrlWithParsedQuery = url.parse(adresse, true);

    let jsonString: string = JSON.stringify(q.query);
    _response.write(jsonString);
    /*if (_request.url) {
        for (let key in q.query) {
          _response.write(key + ":    " + q.query[key] + "<br/>");
          
        }
      }*/


    console.log("Response successful");
    _response.end();

  }
}
