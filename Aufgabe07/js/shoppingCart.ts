namespace Abgabe07 {
    export let jsonObj: Artikel [] = [];
    export interface Artikel {
        kategorie: string;
        image: string;
        titel: string;
        ablum: string;
        interpret: string;
        audio: string;
        preis: number;
    }
    communicate("artikel.json");
    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch("artikel.json");
        let jsonObj: Artikel [] = await response.json();
       //let produkte: Artikel[] = JSON.parse(jsonObj);
       //console.log("Produkte: ", produkte);


    }
}