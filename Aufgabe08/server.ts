import * as Http from "http";

export namespace A08Server {
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
    
    //im Header --> ServerResponse daten
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    //die Requested url wird geschrieben
    _response.write(_request.url);
    console.log(_request.url);
    _response.end();
  }
}
