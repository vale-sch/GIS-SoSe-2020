import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";
//import { ParsedUrlQuery } from "querystring";


export namespace A11Server {

  interface Data {

    // tslint:disable-next-line: no-any
    [type: string]: string | string[] | undefined;
  }

  let server: Http.Server = Http.createServer();

  let port: number | string | undefined = process.env.PORT;
  let datas: Mongo.Collection;
  let databaseUrl: string[] = ["mongodb+srv://SchmidbergerValentin:tixzo1-Qofqir-bazruf@schmidbergervalentin.kklg0.mongodb.net/Database?retryWrites=true&w=majority", "mongodb://localhost:27019"];
  //mongodb+srv://SchmidbergerValentin:tixzo1-Qofqir-bazruf@schmidbergervalentin.kklg0.mongodb.net/Database?retryWrites=true&w=majority
  //let databaseUrl: string = ;
  if (!port)
    port = 8100;
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);



  startServer(port);
  connectToDatabase(databaseUrl);

  function startServer(_port: number | string): void {
    port = Number(process.env.PORT);
    console.log("Starting server");

  }

  async function connectToDatabase(_url: string[]): Promise<void> {
    let myArgs: string[] = process.argv.slice(2);
    let switchURL: string;

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
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(switchURL, options);
    await mongoClient.connect();
    datas = mongoClient.db("DatabaseGIS").collection("Entries");
    console.log("Database connection", datas != undefined);




  }

  //eine Port-Nummer wird vergeben

  //Wenn port nicht erreichbar ist, soll der Port den Wert 8100 annehmen --> localhost:8100

  //Server und zugehörige listener werden erstellt/geaddet


  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

    //Diesen Code innerhalb von einem aktiven Server testen:
    //im Header --> ServerResponse daten
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    let adresse: string = <string>_request.url;
    let _url: url.UrlWithParsedQuery = url.parse(adresse, true);
    let pathname: string = <string>_url.pathname;
    //let jsonString: string = JSON.stringify(_url.query);

    //Adresse parsen (umwandeln):


    if (_request.url) {
      switch (pathname) {
        case "retrieve":
          _response.write(receiveDatas());
          break;
        case "noretrieve":
          break;

      }
    }

    for (let key in _url.query) {
      //_response.setHeader("content-type" , "json/application");
      _response.write(key + ":    " + _url.query[key] + "<br/>");

    }





    storeDatas(_url.query);
    console.log("Response successful");
    _response.end();

  }

  function storeDatas(_datas: Data): void {
    datas.insertOne(_datas);
  }
  async function receiveDatas(): Promise<Data[]> {

    //tslint:disable-next-line: no-any
    let receivedData: Data[];
    receivedData = await datas.find().toArray();
    //console.log(receivedData);
    return receivedData;
  }
}
