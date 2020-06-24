namespace A09Server {
  window.addEventListener("load", init);
  let navLi0: HTMLButtonElement;
  let navLi1: HTMLButtonElement;
  let div: HTMLDivElement;
  let text: HTMLElement;
  let responseJson: JSON;
  async function init(_event: Event): Promise<void> {

    div = <HTMLDivElement>document.querySelector("h1");
    text = document.createElement("p");
    //Der Button mit der id hallo wird in dem Element navLi eingespeichert
    navLi0 = <HTMLButtonElement>document.querySelector("#button0");
    navLi1 = <HTMLButtonElement>document.querySelector("#button1");
    //onClickButton wird bei einem Click auf den Button ausgeführt
    
    navLi0.addEventListener("click", onClickButton0.bind(navLi0));
    navLi1.addEventListener("click", onClickButton1.bind(navLi1));

    
  }

  async function onClickButton0(_click: MouseEvent): Promise<void> {
    let url: string = "https://compaktdisk.herokuapp.com/";
    let formData: FormData = new FormData(document.forms[0]);
    
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);

    url += "?" + query.toString();
    let response: Response = await fetch(url);

    let responseText: string = await response.text();

    div.appendChild(text).innerHTML = "Eingabe: " + responseText;

  }
  async function onClickButton1(_click: MouseEvent): Promise<void> {
    let url: string = "https://compaktdisk.herokuapp.com/";
    let formData: FormData = new FormData(document.forms[0]);
    //Form-Element aus der HTML Datei ziehen

    
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);

    url += "?" + query.toString();
    let response: Response = await fetch(url);

    let responseText: string = await response.text();

    responseJson = JSON.parse(responseText);
    console.log(responseJson);


  }


}
