namespace Abgabe07 {

    //Attribute erstellen
    interface Artikel {
        kategorie: string;
        image: string;
        titel: string;
        ablum: string;
        interpret: string;
        audio: string;
        preis: number;
    }
    communicate("Artikel.json");
    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch("Artikel.json");
        let jsonObj: Artikel [] = await response.json();
        console.log("Response", jsonObj);
       //let produkte: Artikel[] = JSON.parse(jsonObj);
       //console.log("Produkte: ", produkte);


    }
}