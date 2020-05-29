namespace Abgabe05 {
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
        //Artikel Musik Favorites
    let artikel01: Artikel = {
        showMe: true,
        image: "Pictures/1.png",
        titel: "Titel: Action speaks louder than words",
        ablum: "Album: Fire in the Jungle",
        interpret: "Interpret: Oliver Koletzki",
        audio: "musicfavorites/1.m4a",
        preis: 2.49
    };
    let artikel02: Artikel = {
        showMe: true,
        image: "Pictures/5.png",
        titel: "Titel: Eastern Sun (Original Mix)",
        ablum: "Album: Carousel",
        interpret: "Interpret: De Montero",
        audio: "musicfavorites/2.m4a",
        preis: 0.99
       
    };
    let artikel03: Artikel = {
        showMe: true,
        image: "Pictures/9.png",
        titel: "Titel: Illusion of us (Original Mix)",
        ablum: "Album: Obsession",
        interpret: "Interpret: Baris Bayrak",
        audio: "musicfavorites/3.m4a",
        preis: 1.49
    };
    let artikel04: Artikel = {
        showMe: true,
        image: "Pictures/11.png",
        titel: "Titel: Kamel Bani",
        ablum: "Album: Laconia",
        interpret: "Interpret: Sam Shure, CIOZ",
        audio: "musicfavorites/4.m4a",
        preis: 1.99
    };
    let artikel05: Artikel = {
        showMe: true,
        image: "Pictures/13.png",
        titel: "Titel: Madame",
        ablum: "Album: Madame",
        interpret: "Interpret: Ron Flatter",
        audio: "musicfavorites/5.m4a",
        preis: 0.49
    };
    let artikel06: Artikel = {
        showMe: true,
        image: "Pictures/15.png",
        titel: "Titel: Rain Dance",
        ablum: "Album: Channel Tropico",
        interpret: "Interpret: Tunnelvisions ",
        audio: "musicfavorites/6.m4a",
        preis: 1.49
    };
    let artikel07: Artikel = {
        showMe: true,
        image: "Pictures/17.png",
        titel: "Titel: Taboo",
        ablum: "Album: Amnesia, Taboo",
        interpret: "Interpret: Enamour",
        audio: "musicfavorites/6a.m4a",
        preis: 0.99
    };
    let artikel08: Artikel = {
        showMe: true,
        image: "Pictures/19.png",
        titel: "Titel: Vacant (Original Mix)",
        ablum: "Album: Modus",
        interpret: "Interpret: Daniel Di Martino",
        audio: "musicfavorites/7.m4a",
        preis: 1.49
    };
    let artikel09: Artikel = {
        showMe: true,
        image: "Pictures/21.png",
        titel: "Titel: Xanax (Original Mix)",
        ablum: "Album: Ethernal Techno #007",
        interpret: "Interpret: Clwz SG",
        audio: "musicfavorites/8.m4a",
        preis: 1.99
    };
    //alle Artikel von masterFavorites
    const allSales: Artikel[] = [artikel01, artikel02, artikel03, artikel04, artikel05, artikel06, artikel07, artikel08, artikel09];
 
    
    createTags();
    function createTags(): void {

        for (let index: number = 0; index < allSales.length; index++) {
            //Inhalte festlegen
            let img: HTMLElement = document.createElement("img");
            img.setAttribute("src", allSales[index].image);
            img.setAttribute("alt", "Music Covers");
            let div: HTMLElement = document.createElement("div");
            div.setAttribute("class", "music");
            let pTitel: HTMLElement = document.createElement("p");
            pTitel.setAttribute("class", "text");
            let pAlbum: HTMLElement = document.createElement("p");
            pAlbum.setAttribute("class", "text");
            let pInterpret: HTMLElement = document.createElement("p");
            pInterpret.setAttribute("class", "text");
            let pPrice: HTMLElement = document.createElement("p");
            pPrice.setAttribute("class", "text");
            let button: HTMLElement = document.createElement("a");
            button.setAttribute("title", "Ab in den Warenkorb!");
            button.setAttribute("href", "https://vale-sch.github.io/GIS-SoSe2020/Aufgabe04/Warenkorb.htm");
            button.setAttribute("class", "fas fa-shopping-basket");
            let audio: HTMLElement = document.createElement("audio");
            audio.setAttribute("controls", "");
            audio.setAttribute("src", allSales[index].audio);
            audio.setAttribute("class", "pAudio");
            audio.setAttribute("alt", "Audio Lines");
            //Inhalte generieren 
            document.getElementById("masterFavorites")?.appendChild(div);
            div.appendChild(img);
            div.appendChild(button).innerHTML = "Preis: " + allSales[index].preis + "€";
            div.appendChild(pTitel).innerHTML = allSales[index].titel;
            div.appendChild(pAlbum).innerHTML =   allSales[index].ablum;
            div.appendChild(pInterpret).innerHTML =   allSales[index].interpret;
            div.appendChild(audio).innerHTML =  allSales[index].audio;
              
            
        }
    }
}

  
