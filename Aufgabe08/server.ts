import * as Http from "http";

export namespace A08Server {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }
  async function fetchURl(): Promise <void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://compaktdisk.herokuapp.com/";
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url += url + "?" + query.toString();
    await fetch(url);
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");
    fetchURl();
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);

    _response.end();
  }
}
