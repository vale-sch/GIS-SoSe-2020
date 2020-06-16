import * as Http from "http";
export namespace aufgabe08 {
    
    test08();
   
    async function test08(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://compaktdisk.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += url + "?" + query.toString();
        await fetch(url);
    }

    Http.createServer();
}

console.log("test");