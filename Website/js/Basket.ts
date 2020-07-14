namespace Eisdiele {
    let eis: Eis;
    let basketArticleDiv: HTMLDivElement;
    let informationDiv: HTMLDivElement;
    let totalPrice: HTMLParagraphElement;
    let countPrice: number = 0;
    init();
    
    function init(): void {
        appendHTML();
        generateBasketArticle();



    }
    
    function appendHTML(): void {
        basketArticleDiv = <HTMLDivElement>document.getElementById("warenKorbArtikel");
        informationDiv = <HTMLDivElement>document.getElementById("informationAnzeige");

    }

    function generateBasketArticle(): void {
        for (let index: number = 0; index <= localStorage.length - 1; index++) {
            let articleKey: string = <string>localStorage.key(index);
            let jsonString: string = <string>localStorage.getItem(articleKey);
            eis = <Eis>JSON.parse(jsonString);
            let img: HTMLImageElement = document.createElement("img");
            img.setAttribute("src", eis.image);
            
            let beschreibung: HTMLParagraphElement = document.createElement("p");
            beschreibung.setAttribute("class", "text");
            let preis: HTMLParagraphElement = document.createElement("p");
            preis.setAttribute("class", "text");
            let formatDiv: HTMLDivElement = <HTMLDivElement> document.createElement("div");
            formatDiv.setAttribute("class", "formatDiv");
            basketArticleDiv.appendChild(formatDiv);
           
            countPrice += eis.preis;
            console.log(eis.preis);
            console.log(countPrice);

            formatDiv.appendChild(img);
            formatDiv.appendChild(beschreibung).innerHTML = "-->" + eis.beschreibung;
            formatDiv.appendChild(preis).innerHTML = "Kosten pro Stück: " + eis.preis + "€";
           
        }
        console.log("countPrixe: " + countPrice);
        totalPrice = <HTMLParagraphElement>document.createElement("h2");
        totalPrice.style.textAlign = "left";
        informationDiv.appendChild(totalPrice).innerHTML = "\xa0\xa0" + countPrice + "€";

    }


}