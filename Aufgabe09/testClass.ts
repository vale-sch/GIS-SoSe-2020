namespace A09Server {
  window.addEventListener("load", init);
  let navLi: HTMLButtonElement;
  let div: HTMLDivElement;
  let text: HTMLElement;
  let responseJson: JSON;
  async function init(_event: Event): Promise<void> {

    div = <HTMLDivElement>document.querySelector("h1");
    text = document.createElement("p");
    //Der Button mit der id hallo wird in dem Element navLi eingespeichert
    navLi = <HTMLButtonElement>document.querySelector("#hallo");
    //onClickButton wird bei einem Click auf den Button ausgeführt
    navLi.addEventListener("click", onClickButton.bind(navLi));

    
  }

  async function onClickButton(_click: MouseEvent): Promise<void> {
    let url: string = "https://compaktdisk.herokuapp.com/";
    let formData: FormData = new FormData(document.forms[0]);
    //Form-Element aus der HTML Datei ziehen

    //let url: string = "https://compaktdisk.herokuapp.com/";
    // tslint:disable-next-line: no-any
    //alle Zeichen nach dem "?"
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);

    url += "?" + query.toString();
    let response: Response = await fetch(url);

    let responseText: string = await response.text();

    responseJson = JSON.parse(responseText);

    console.log(responseText);
    console.log(responseJson);
    

    div.appendChild(text).innerHTML = "Eingabe: " + responseText;

  }

}
