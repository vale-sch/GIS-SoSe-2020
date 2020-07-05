namespace A11Server {
  window.addEventListener("load", init);
  let navLi0: HTMLButtonElement;
  let navLi1: HTMLButtonElement;
  let div: HTMLDivElement;
  let text: HTMLParagraphElement;
  let url: string;
  async function init(_event: Event): Promise<void> {

    div = <HTMLDivElement>document.querySelector("h1");
    text = document.createElement("p");
    //Der Button mit der id hallo wird in dem Element navLi eingespeichert
    navLi0 = <HTMLButtonElement>document.querySelector("#receive");
    navLi1 = <HTMLButtonElement>document.querySelector("#storeData");
    //onClickButton wird bei einem Click auf den Button ausgeführt

    navLi0.addEventListener("click", onClickButtonRet.bind(navLi0));
    navLi1.addEventListener("click", onClickButtonStoreData.bind(navLi1));
    div.append(text);
  }

  async function onClickButtonRet(_click: MouseEvent): Promise<void> {
    let _isReceive: boolean = true;
    //let url: string = "http://localhost:8100";
    url = "https://compaktdisk.herokuapp.com";
    let formData: FormData = new FormData(document.forms[0]);

    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    // url += "/";
    url += _isReceive ? "/receive" : "/storeData";
    url += "?" + query.toString();

    //console.log(url);
    let response: Response = await fetch(url);
    let responseText: string = await response.text();

    let responseJson: JSON = JSON.parse(responseText);
    text.innerHTML = "JSON-Objekt: " + responseText;
    console.log(responseJson);


  }
  function onClickButtonStoreData(_click: MouseEvent): void {
    let _isReceive: boolean = false;
    //let url: string = "http://localhost:8100";
    url = "https://compaktdisk.herokuapp.com";
    let formData: FormData = new FormData(document.forms[0]);

    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    // url += "/";
    url += _isReceive ? "/receive" : "/storeData";
    url += "?" + query.toString();



    text.innerHTML = "StoredData!";





  }


}
