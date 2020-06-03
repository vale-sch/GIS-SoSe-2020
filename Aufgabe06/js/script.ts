namespace Abgabe05 {
    window.addEventListener("load", init);
    let articleCounter: number = 0;
    let articlePriceCounter: number = 0;
    let saleDiv: HTMLDivElement;
    let favoritesDiv: HTMLDivElement;
    let hideHeadlineFav: HTMLHeadingElement;
    let hideHeadlineSal: HTMLHeadingElement;
    //Attribute erstellen
    interface Artikel {
        showMe: boolean;
        image: string;
        titel: string;
        ablum: string;
        interpret: string;
        audio: string;
        preis: number;
    }

    //Artikel Musik Sale
    let artikel01: Artikel = {
        showMe: true,
        image: "Pictures/2.png",
        titel: "Titel: B.A.X",
        ablum: "Album: SC2019",
        interpret: "Interpret: Pongour Falls",
        preis: 2.49,
        audio: "music/1.m4a"
    };
    let artikel02: Artikel = {
        showMe: true,
        image: "Pictures/4.png",
        titel: "Titel: Dagger",
        ablum: "Album: Cloak & Degger",
        interpret: "Interpret: OC&Verde",
        preis: 0.99,
        audio: "music/2.m4a"

    };
    let artikel03: Artikel = {
        showMe: true,
        image: "Pictures/6.png",
        titel: "Titel: Fades (Original Mix)",
        ablum: "Album: Muse EP",
        interpret: "Interpret: Julian Wassermann",
        preis: 1.49,
        audio: "music/3.m4a"
    };
    let artikel04: Artikel = {
        showMe: true,
        image: "Pictures/8.png",
        titel: "Titel: Hangdrum (Extended Mix)",
        ablum: "Album: Hangdrum /Dust",
        interpret: "Interpret: Robin M.",
        preis: 1.99,
        audio: "music/4.m4a"
    };
    let artikel05: Artikel = {
        showMe: true,
        image: "Pictures/10.png",
        titel: "Titel: Jado (Original Mix)",
        ablum: "Album: Jado",
        interpret: "Interpret: 8Kays, Posting",
        audio: "music/5.m4a",
        preis: 0.49
    };
    let artikel06: Artikel = {
        showMe: true,
        image: "Pictures/12.png",
        titel: "Titel: La Nuit Sans Fin",
        ablum: "Album: La Nuit Sans Fin",
        interpret: "Interpret: Bodaishin",
        audio: "music/6.m4a",
        preis: 1.49
    };
    let artikel07: Artikel = {
        showMe: true,
        image: "Pictures/14.png",
        titel: "Titel: Nature",
        ablum: "ALbum: 1948",
        interpret: "Interpret: Sergio Sanchez",
        audio: "music/7.m4a",
        preis: 0.99
    };
    let artikel08: Artikel = {
        showMe: true,
        image: "Pictures/16.png",
        titel: "Titel: Sagna (Original Mix)",
        ablum: "Album: Versoria EP",
        interpret: "Interpret: Stephan Jolk",
        audio: "music/8.m4a",
        preis: 1.49
    };
    let artikel09: Artikel = {
        showMe: true,
        image: "Pictures/18.png",
        titel: "Titel: Olson (Original Mix)",
        ablum: "Album: Reunion",
        interpret: "Interpret: Fejka",
        audio: "music/9.m4a",
        preis: 1.99
    };
    let artikel10: Artikel = {
        showMe: true,
        image: "Pictures/20.png",
        titel: "Titel: Wahah",
        ablum: "Album: Wahah EP",
        interpret: "Interpret: Doctor Dru",
        audio: "music/10.m4a",
        preis: 0.99
    };
    let artikel11: Artikel = {
        showMe: true,
        image: "Pictures/22.png",
        titel: "Titel: Oppression",
        ablum: "Album: Oppression",
        interpret: "Interpret: Several Definitions",
        audio: "music/11.m4a",
        preis: 2.99
    };
    let artikel12: Artikel = {
        showMe: true,
        image: "Pictures/24.png",
        titel: "Titel: Oasis (Timo Maas 2020 Remix)",
        ablum: "Album: Oasis EP",
        interpret: "Interpret: Peter Dundov",
        audio: "music/12.m4a",
        preis: 1.49
    };
    //Artikel Musik Favorites
    let artikel13: Artikel = {
        showMe: true,
        image: "Pictures/1.png",
        titel: "Titel: Action speaks louder than words",
        ablum: "Album: Fire in the Jungle",
        interpret: "Interpret: Oliver Koletzki",
        audio: "musicfavorites/1.m4a",
        preis: 2.49
    };
    let artikel14: Artikel = {
        showMe: true,
        image: "Pictures/5.png",
        titel: "Titel: Eastern Sun (Original Mix)",
        ablum: "Album: Carousel",
        interpret: "Interpret: De Montero",
        audio: "musicfavorites/2.m4a",
        preis: 0.99

    };
    let artikel15: Artikel = {
        showMe: true,
        image: "Pictures/9.png",
        titel: "Titel: Illusion of us (Original Mix)",
        ablum: "Album: Obsession",
        interpret: "Interpret: Baris Bayrak",
        audio: "musicfavorites/3.m4a",
        preis: 1.49
    };
    let artikel16: Artikel = {
        showMe: true,
        image: "Pictures/11.png",
        titel: "Titel: Kamel Bani",
        ablum: "Album: Laconia",
        interpret: "Interpret: Sam Shure, CIOZ",
        audio: "musicfavorites/4.m4a",
        preis: 1.99
    };
    let artikel17: Artikel = {
        showMe: true,
        image: "Pictures/13.png",
        titel: "Titel: Madame",
        ablum: "Album: Madame",
        interpret: "Interpret: Ron Flatter",
        audio: "musicfavorites/5.m4a",
        preis: 0.49
    };
    let artikel18: Artikel = {
        showMe: true,
        image: "Pictures/15.png",
        titel: "Titel: Rain Dance",
        ablum: "Album: Channel Tropico",
        interpret: "Interpret: Tunnelvisions ",
        audio: "musicfavorites/6.m4a",
        preis: 1.49
    };
    let artikel19: Artikel = {
        showMe: true,
        image: "Pictures/17.png",
        titel: "Titel: Taboo",
        ablum: "Album: Amnesia, Taboo",
        interpret: "Interpret: Enamour",
        audio: "musicfavorites/6a.m4a",
        preis: 0.99
    };
    let artikel20: Artikel = {
        showMe: true,
        image: "Pictures/19.png",
        titel: "Titel: Vacant (Original Mix)",
        ablum: "Album: Modus",
        interpret: "Interpret: Daniel Di Martino",
        audio: "musicfavorites/7.m4a",
        preis: 1.49
    };
    let artikel21: Artikel = {
        showMe: true,
        image: "Pictures/21.png",
        titel: "Titel: Xanax (Original Mix)",
        ablum: "Album: Ethernal Techno #007",
        interpret: "Interpret: Clwz SG",
        audio: "musicfavorites/8.m4a",
        preis: 1.99
    };



    //alle Artikel aus dem Sale
    const allSales: Artikel[] = [artikel01, artikel02, artikel03, artikel04, artikel05, artikel06, artikel07, artikel08, artikel09, artikel10, artikel11, artikel12];

    //alle Artikel von masterFavorites
    const allFavorites: Artikel[] = [artikel13, artikel14, artikel15, artikel16, artikel17, artikel18, artikel19, artikel20, artikel21];

    //Kategorie 1
    function init(_event: Event): void {
        generateSales();
        generateFavorites();

        hideHeadlineFav = <HTMLHeadingElement>document.querySelector("#Favoriten");
        hideHeadlineSal = <HTMLHeadingElement>document.querySelector("#sales");

        loadNavListeners();



    }

    function generateSales(): void {
        saleDiv = <HTMLDivElement>document.querySelector("#sales + div");
        saleDiv.setAttribute("id", "masterSales");

        for (let index: number = 0; index < allSales.length; index++) {

            //Inhalte/Attribute festlegen


            //Inhalte festlegen//div-element

            let divMusic: HTMLElement = document.createElement("div");
            divMusic.setAttribute("class", "music");
            //Inahltefestlegen//Pictures
            let img: HTMLElement = document.createElement("img");
            img.setAttribute("src", allSales[index].image);
            img.setAttribute("alt", "Music Covers");
            //Inhalte festlegen//Beschreibungen
            let pTitel: HTMLElement = document.createElement("p");
            pTitel.setAttribute("class", "text");
            let pAlbum: HTMLElement = document.createElement("p");
            pAlbum.setAttribute("class", "text");
            let pInterpret: HTMLElement = document.createElement("p");
            pInterpret.setAttribute("class", "text");
            let pPrice: HTMLElement = document.createElement("p");
            pPrice.setAttribute("class", "text");

            //Inhalte festlegen//Warenkorb icon
            let button: HTMLElement = document.createElement("a");
            button.setAttribute("title", "Ab in den Warenkorb!");
            button.addEventListener("click", onClickButton.bind(allSales[index]));
            button.setAttribute("class", "fas fa-shopping-basket");

            //Inhalte festlegen//Audios
            let audio: HTMLElement = document.createElement("audio");
            audio.setAttribute("controls", "");
            audio.setAttribute("src", allSales[index].audio);
            audio.setAttribute("class", "pAudio");
            audio.setAttribute("alt", "Audio Lines");


            //Inhalte generieren
            //Inhalte generieren//Pictures

            saleDiv.appendChild(divMusic);
            divMusic.appendChild(img);

            //Inhalte generieren//Warenkorb
            divMusic.appendChild(button).innerHTML = "Preis: " + allSales[index].preis + "€";

            //Inhalte generieren//Beschreibungen
            divMusic.appendChild(pTitel).innerHTML = allSales[index].titel;
            divMusic.appendChild(pAlbum).innerHTML = allSales[index].ablum;
            divMusic.appendChild(pInterpret).innerHTML = allSales[index].interpret;

            //Inhalte generieren//Audio
            divMusic.appendChild(audio).innerHTML = allSales[index].audio;


        }
    }

    //Kategorie 2
    function generateFavorites(): void {
        favoritesDiv = <HTMLDivElement>document.querySelector("#Favoriten + div");
        favoritesDiv.setAttribute("id", "masterFavorites");
        for (let index: number = 0; index < allFavorites.length; index++) {

            //Inhalte/Attribute festlegen//Pictures
            let img: HTMLElement = document.createElement("img");
            img.setAttribute("src", allFavorites[index].image);
            img.setAttribute("alt", "Music Covers");

            //Inhalte festlegen//div-element

            let div: HTMLElement = document.createElement("div");
            div.setAttribute("class", "music");

            //Inhalte festlegen//Beschreibungen
            let pTitel: HTMLElement = document.createElement("p");
            pTitel.setAttribute("class", "text");
            let pAlbum: HTMLElement = document.createElement("p");
            pAlbum.setAttribute("class", "text");
            let pInterpret: HTMLElement = document.createElement("p");
            pInterpret.setAttribute("class", "text");
            let pPrice: HTMLElement = document.createElement("p");
            pPrice.setAttribute("class", "text");

            //Inhalte festlegen//Warenkorb icon
            let button: HTMLElement = document.createElement("a");
            button.setAttribute("title", "Ab in den Warenkorb!");
            button.addEventListener("click", onClickButton.bind(allFavorites[index]));
            button.setAttribute("class", "fas fa-shopping-basket");

            //Inhalte festlegen//Audios
            let audio: HTMLElement = document.createElement("audio");
            audio.setAttribute("controls", "");
            audio.setAttribute("src", allFavorites[index].audio);
            audio.setAttribute("class", "pAudio");
            audio.setAttribute("alt", "Audio Lines");


            //Inhalte generieren//Pictures
            favoritesDiv.appendChild(div);
            div.appendChild(img);

            //Inhalte generieren//Warenkorb
            div.appendChild(button).innerHTML = "Preis: " + allFavorites[index].preis + "€";

            //Inhalte generieren//Beschreibungen
            div.appendChild(pTitel).innerHTML = allFavorites[index].titel;
            div.appendChild(pAlbum).innerHTML = allFavorites[index].ablum;
            div.appendChild(pInterpret).innerHTML = allFavorites[index].interpret;

            //Inhalte generieren//Audio
            div.appendChild(audio).innerHTML = allFavorites[index].audio;


        }

    }
    function onClickButton(this: Artikel, _click: MouseEvent): void {

        articlePriceCounter += this.preis;
        console.log("Summe: " + Math.round((articlePriceCounter + Number.EPSILON) * 100) / 100);
        let basketNumber: HTMLElement = <HTMLElement>document.querySelector("li:last-child a");
        articleCounter++;
        if (articlePriceCounter > 0) {
            basketNumber.innerHTML = "Warenkorb: " + articleCounter;
        }
        else {
            basketNumber.innerHTML = "Warenkorb: ";
        }


    }
    function loadNavListeners(): void {
        let navLi: HTMLAnchorElement;

        for (let index: number = 1; index < 4; index++) {
            navLi = <HTMLAnchorElement>document.querySelector(".menu li:nth-child(" + index + ") a");
            navLi.addEventListener("click", onClickNavBar.bind(navLi));

        }


    }
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