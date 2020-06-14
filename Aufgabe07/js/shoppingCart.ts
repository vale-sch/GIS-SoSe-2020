namespace Abgabe07 {

    let containerMusic: HTMLDivElement;
    let article: Artikel;
    let divMusic: HTMLDivElement;

    let totalPriceArticles: number = 0;
    let totalArticle: number = 0; 
    let clearAll: HTMLElement;
    window.addEventListener("load", init);



    function init(_event: Event): void {
        containerMusic = <HTMLDivElement>document.querySelector("#warenkorbDiv");
       
        buildArticles();
    }

    //build all Articles from Storage
    function buildArticles(): void {

       

        for (let index: number = 0; index <= localStorage.length - 1; index++) {
      
            //get Data from localStorage
            let articleKey: string = <string>localStorage.key(index);
            let jsonString: string = <string>localStorage.getItem(articleKey);
            article = <Artikel>JSON.parse(jsonString);
          
           
            
            //Inhaltefestlegen//div
            divMusic = document.createElement("div");
            divMusic.setAttribute("class", "music");

            //divMusic wird an div("masterSales") angehängt
            containerMusic.appendChild(divMusic);

            //Inahltefestlegen//Pictures
            let img: HTMLImageElement = document.createElement("img");
            img.setAttribute("src", article.image);
            img.setAttribute("alt", "Music Covers");


            //Inhalte festlegen//Beschreibungen (Titel, Interpret, Album, Preis)
            let pTitel: HTMLElement = document.createElement("p");
            pTitel.setAttribute("class", "text");

            let pAlbum: HTMLElement = document.createElement("p");
            pAlbum.setAttribute("class", "text");

            let pInterpret: HTMLElement = document.createElement("p");
            pInterpret.setAttribute("class", "text");

            let pPrice: HTMLElement = document.createElement("i");
           


            //Inhalte festlegen//Warenkorb icon
            let button: HTMLElement = document.createElement("a");
            button.setAttribute("title", "Kauf entfernen!");
            button.setAttribute("class", "fas fa-trash-alt");
            button.setAttribute("href", "#fas fa-trash-alt");

            //Jeder "button" der generiert wird, bekommt ein Eventlistener
            // button.addEventListener("click", onClickButton.bind(article));
            button.addEventListener("click", onClickDelete.bind(article));

            //Inhalte festlegen//Audios
            let audio: HTMLAudioElement = document.createElement("audio");
            audio.setAttribute("controls", "");
            audio.setAttribute("src", article.audio);
            audio.setAttribute("class", "pAudio");
            audio.setAttribute("alt", "Audio Lines");


            //Inhalte generieren
            //Inhalte generieren//Pictures
            divMusic.appendChild(img);

            //Inhalte generieren//Warenkorb
            divMusic.appendChild(button).innerHTML = "Delete";

            //Inhalte generieren//Beschreibungen
         
            divMusic.appendChild(pTitel).innerHTML = article.titel;
            divMusic.appendChild(pAlbum).innerHTML = article.ablum;
            divMusic.appendChild(pInterpret).innerHTML = article.interpret;

            //Inhalte generieren//Preis
            divMusic.appendChild(pPrice).innerHTML = "Preis: " + article.preis;

              
            //counting Prices
            totalPriceArticles += article.preis;


        }

        //create clickable clearAll Button 
        clearAll = document.createElement("a");
        clearAll.setAttribute("class", "fas fa-trash-alt");
        clearAll.setAttribute("href", "#fas fa-trash-alt");
        clearAll.addEventListener("click", onClickDeleteAll.bind(article));

        countPriceandArticles();

    }

    //function for Article Overview + append clearAll Button
    function countPriceandArticles(): void {

        let informationArticle: HTMLDivElement = <HTMLDivElement> document.querySelector("#informationArticle");

        let totalPriceElement: HTMLElement = document.createElement("p");
        let totalArticleElement: HTMLElement = document.createElement("p");

        //Kleines Extra ohne Funktion
        let goFurther: HTMLElement = document.createElement("a");
        goFurther.setAttribute("class", "fas fa-cash-register");
        goFurther.setAttribute("href", "#fas fa-cash-register");
        

        totalArticle = localStorage.length;
        informationArticle.appendChild(goFurther).innerHTML = "Checkout";
        informationArticle.appendChild(totalArticleElement).innerHTML = "Artikelanzahl: " + totalArticle;
        informationArticle.appendChild(totalPriceElement).innerHTML = "Gesamtpreis: " + Math.round((totalPriceArticles + Number.EPSILON) * 100) / 100 + " €" + " zzgl. 3€ Versandkosten";
       
        informationArticle.appendChild(clearAll).innerHTML = " Warenkorb leeren";
       
      

    }

    function onClickDelete(this: Artikel, _click: MouseEvent): void {

        localStorage.removeItem(this.titel);
        location.reload();

    }
    function onClickDeleteAll(_click: MouseEvent): void {

        localStorage.clear();
        location.reload();
    }
}



