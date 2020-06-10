namespace Abgabe07 {

    //Objekte erstellen
    window.addEventListener("load", init);
    let articleCounter: number = 0;
    let articlePriceCounter: number = 0;
    let saleDiv: HTMLDivElement;
    let favoritesDiv: HTMLDivElement;
    let divMusic: HTMLDivElement;
    let hideHeadlineFav: HTMLHeadingElement;
    let hideHeadlineSal: HTMLHeadingElement;

    
   

    //main Methode, legt Laufrichtung fest
    async function init(_event: Event): Promise <void> {
        await communicate("artikel.json");
      
        //Artikel erstellen 
        generateArticles();
        
        
        //hier werden die beiden gesetzen h1 Überschriften aus der html selektiert, um sie bei Click-Anforderung auszublenden. 
        hideHeadlineFav = <HTMLHeadingElement>document.querySelector("#favoriten");
        hideHeadlineSal = <HTMLHeadingElement>document.querySelector("#sales");
        //selbsterklärend lul
        loadNavListeners();
    }


    //Funktion für Artikel Sales&Favoriten
    function generateArticles(): void {

        console.log(jsonObj);
        for (let index: number = 0; index < jsonObj.length; index++) {
            if (jsonObj[index].kategorie == "sale") {

                //leeres div aus HTMl selektieren und attribuieren 
                saleDiv = <HTMLDivElement>document.querySelector("#sales + div");
                saleDiv.setAttribute("id", "masterSales");

                //Inhaltefestlegen//div
                divMusic = document.createElement("div");
                divMusic.setAttribute("class", "music");

                //divMusic wird an div("masterSales") angehängt
                saleDiv.appendChild(divMusic);


            }
            else {

                //leeres div aus HTMl selektieren und attribuieren 
                favoritesDiv = <HTMLDivElement>document.querySelector("#favoriten + div");
                favoritesDiv.setAttribute("id", "masterFavorites");

                //Inhaltefestlegen//div
                divMusic = document.createElement("div");
                divMusic.setAttribute("class", "music");

                //divMusic wird an div("masterFavorites") angehängt
                favoritesDiv.appendChild(divMusic);
            }



            //Inahltefestlegen//Pictures
            let img: HTMLImageElement = document.createElement("img");
            img.setAttribute("src", jsonObj[index].image);
            img.setAttribute("alt", "Music Covers");


            //Inhalte festlegen//Beschreibungen (Titel, Interpret, Album, Preis)
            let pTitel: HTMLElement = document.createElement("p");
            pTitel.setAttribute("class", "text");

            let pAlbum: HTMLElement = document.createElement("p");
            pAlbum.setAttribute("class", "text");

            let pInterpret: HTMLElement = document.createElement("p");
            pInterpret.setAttribute("class", "text");

            let pPrice: HTMLElement = document.createElement("a");
            pPrice.setAttribute("class", "text");


            //Inhalte festlegen//Warenkorb icon
            let button: HTMLElement = document.createElement("a");
            button.setAttribute("title", "Ab in den Warenkorb!");
            button.setAttribute("class", "fas fa-shopping-bag");
            button.setAttribute("href", "#fas fa-shopping-bag");

            //Jeder "button" der generiert wird, bekommt ein Eventlistener
            button.addEventListener("click", onClickButton.bind(jsonObj[index]));


            //Inhalte festlegen//Audios
            let audio: HTMLAudioElement = document.createElement("audio");
            audio.setAttribute("controls", "");
            audio.setAttribute("src", jsonObj[index].audio);
            audio.setAttribute("class", "pAudio");
            audio.setAttribute("alt", "Audio Lines");


            //Inhalte generieren
            //Inhalte generieren//Pictures
            divMusic.appendChild(img);

            //Inhalte generieren//Warenkorb
            divMusic.appendChild(button).innerHTML = "Preis: " + jsonObj[index].preis + "€";

            //Inhalte generieren//Beschreibungen
            divMusic.appendChild(pTitel).innerHTML = jsonObj[index].titel;
            divMusic.appendChild(pAlbum).innerHTML = jsonObj[index].ablum;
            divMusic.appendChild(pInterpret).innerHTML = jsonObj[index].interpret;

            //Inhalte generieren//Audio
            divMusic.appendChild(audio).innerHTML = jsonObj[index].audio;




        }
    }





    //Funktion/EventListener für Preis-aufaddieren/Artikelcounter
    function onClickButton(this: Artikel, _click: MouseEvent): void {
        articlePriceCounter += this.preis;
        console.log("Summe: " + Math.round((articlePriceCounter + Number.EPSILON) * 100) / 100);
        let basketNumber: HTMLLIElement = <HTMLLIElement>document.querySelector("li:last-child");
        let standardBasket: HTMLElement = document.createElement("i");
        standardBasket.setAttribute("class", "fas fa-shopping-basket");
        articleCounter++;
        if (articlePriceCounter > 0) {
            basketNumber.setAttribute("id", "basketNumber");
            basketNumber.innerHTML =  "" + articleCounter;
        }
        else {
            basketNumber.innerHTML = "";
        }
    }


    //Funktion um erste 3 Elemente aus der Navigation zu selektieren und sie dann an den Eventlistener("onCLickNavBar") zu binden 
    function loadNavListeners(): void {
        let navLi: HTMLAnchorElement;
        let literateNavbar: number = 4;
        for (let index: number = 1; index < literateNavbar; index++) {
            navLi = <HTMLAnchorElement>document.querySelector(".menu li:nth-child(" + index + ") a");
            navLi.addEventListener("click", onClickNavBar.bind(navLi));

        }


    }


    //Funktion um die 3 verschiedenen Click-Möglichkeiten zu unterscheiden (Startseite, Sales, Charts)
    function onClickNavBar(this: HTMLAnchorElement, _click: MouseEvent): void {


        let onClick: String = <String>this.getAttribute("href");
        switch (onClick) {
            case "#Everything": showEverthing();
                                break;
            case "#Sales": showSales();
                           break;
            case "#Favoriten": showFavorites();
                               break;
        }
    }


    //Zusatzmethoden die innerhalb "onClickNavbar" in den 3 unterschiedlichen Fällen jeweils aufgerufen wird // die Artikel werden nicht gelöscht, sondern lediglich ausgeblendet.  
    function showEverthing(): void {

        saleDiv.style.display = "grid";
        favoritesDiv.style.display = "grid";

        hideHeadlineFav.style.display = "block";
        hideHeadlineSal.style.display = "block";


    }
    function showSales(): void {
        saleDiv.style.display = "grid";
        favoritesDiv.style.display = "none";

        hideHeadlineSal.style.display = "block";
        hideHeadlineFav.style.display = "none";

    }
    function showFavorites(): void {
        saleDiv.style.display = "none";
        favoritesDiv.style.display = "grid";

        hideHeadlineFav.style.display = "block";
        hideHeadlineSal.style.display = "none";
    }
}