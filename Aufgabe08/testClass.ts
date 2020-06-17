
 namespace A08Server {

  async function fetchURl(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://compaktdisk.herokuapp.com/";
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url += url + "?" + query.toString();
    await fetch(url);
  }

  fetchURl();
}
