namespace A09Server {
  window.addEventListener("load", init);
  let navLi0: HTMLButtonElement;
  let navLi1: HTMLButtonElement;
  let div: HTMLDivElement;
  let text: HTMLParagraphElement;
  
  async function init(_event: Event): Promise<void> {

    div = <HTMLDivElement>document.querySelector("h1");
    text = document.createElement("p");
    //Der Button mit der id hallo wird in dem Element navLi eingespeichert
    navLi0 = <HTMLButtonElement>document.querySelector("#button0");
    navLi1 = <HTMLButtonElement>document.querySelector("#button1");
    //onClickButton wird bei einem Click auf den Button ausgeführt
    
    navLi0.addEventListener("click", onClickButtonHTML.bind(navLi0));
    navLi1.addEventListener("click", onClickButtonJSON.bind(navLi1));
    div.append(text);
  }

  async function onClickButtonHTML(_click: MouseEvent): Promise<void> {
    let _isHTML: boolean = true;
    let url: string = "https://compaktdisk.herokuapp.com";
    let formData: FormData = new FormData(document.forms[0]);
    
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    
    url += _isHTML ? "/html" : "/json";
    url += "?" + query.toString();
   //console.log(url);
    let response: Response = await fetch(url);
    let responseText: string = await response.text();

    text.innerHTML =  responseText;

  }
  async function onClickButtonJSON(_click: MouseEvent): Promise<void> {
    let _isHTML: boolean = false;
    let url: string = "https://compaktdisk.herokuapp.com";
    let formData: FormData = new FormData(document.forms[0]);
    //Form-Element aus der HTML Datei zieh
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);

    url += _isHTML ? "/html" : "/json";
    url += "?" + query.toString();
    //console.log(url);
    let response: Response = await fetch(url);
    let responseText: string = await response.text();
    text.innerHTML = "JSON-Objekt: " + responseText;
    let responseJson: JSON = JSON.parse(responseText);
    console.log(responseJson);
   
    
   
  }


}
