
namespace A08Server {
  window.addEventListener("load", init);
  let navLi: HTMLButtonElement;

  async function onClickButton(_click: MouseEvent): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://compaktdisk.herokuapp.com/";
  
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url += "?" + query.toString();
    let urlEmpfangen: Response = await fetch(url);

    let urlAusgeben: string = await urlEmpfangen.url;
    urlAusgeben = urlAusgeben.replace("https://compaktdisk.herokuapp.com/", "");
    console.log(urlAusgeben);
  }
  async function init(_event: Event): Promise<void> {
    navLi = <HTMLButtonElement>document.querySelector("#button");
    navLi.addEventListener("click", onClickButton.bind(navLi));
  }
}
