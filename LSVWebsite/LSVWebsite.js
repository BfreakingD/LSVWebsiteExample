let ahsButton = document.getElementById("AHSButton");
let bmhsButton = document.getElementById("BMHSButton"); 
let ahsTrenner = document.getElementById("AHSTrennung");
let BMHSTrenner = document.getElementById("BMHSTrennung");
let sliderButton = document.getElementById("slideButton");
let sliderPicture = document.getElementById("sliderPicture");
let miniDesc = document.getElementById("kurzBeschreibung");
let imageLink = document.getElementById("imageLink");
let menuButton = document.getElementById("menuIcon");
let menu = document.getElementById("menu");
let menuItems = document.getElementsByClassName("menuItem");
let sliderNameTag = document.getElementsByClassName("sliderNameTag");
let clickCounter = 1;
// Schooltype Buttons.
ahsButton.onclick = () => {
    window.location = "#AHSTrennung";
}

bmhsButton.onclick = () => {
    window.location = "#BMHSTrennung";
}
//bringt den slider zum laufen, passt die Bilder, Text und Link an. 
slideButton.onmousedown = () => {
    clickCounter++;
    switch(clickCounter) {
        case 2:
            sliderPicture.src = "Emily.jpg"; 
            miniDesc.innerHTML = "<span>Emily Baralic: </span>Mein Ziel ist es eine starke und repräsentative Stimme für <span> alle</span> Schüler*innen zu sein. Wir brauchen mehr Mitbestimmung und eine zukunftsfitte Vertretung!";
            miniDesc.href = "#EmilyText";
            imageLink.href = "#EmilyText";
            sliderNameTag.innerText = "Emily Baralic";
        break; 
        case 3: 
            sliderPicture.src = "Felix.jpg"; 
            miniDesc.innerHTML = "<span>Felix Niederhuber: </span>Mein Ziel ist es, dass alle Schüler*innen sich durch die LSV vertreten fühlen und wissen wofür sie steht. Nur so können die Interessen der Schüler*innen endlich im Vordergrund stehen.";
            miniDesc.href = "#FelixText";
            imageLink.href = "#FelixText";
            sliderNameTag.innerText = "Felix Niederhuber";
            break; 
        case 4:
            sliderPicture.src= "Milena.jpg";
            miniDesc.innerHTML = "<span>Milena Danzinger: </span>Ich möchte mich aktiv dafür einsetzten, dass die LSV und ihre Möglichkeiten bekannt werden, und gleichzeitig eine zentrale Anlaufstelle für Verbesserungsvorschläge und konstruktive Kritik geschaffen wird.";
            miniDesc.href = "#MilenaText";
            imageLink.href = "#MilenaText";
            sliderNameTag.innerText = "Milena Danzinger";
            break;
        case 5:
            sliderPicture.src = "Pia.jpg";
            miniDesc.innerHTML = "<span>Pia Steiner: </span>Um für einen solidarischen Umgang einzustehen, und allen Schüler*innen den Raum zu geben, offen über Probleme zu reden, kandidiere ich für die LSV.";
            miniDesc.href = "#PiaText";
            imageLink.href = "#PiaText";
            sliderNameTag.innerText = "Pia Steiner";
            break;
        case 6:
            sliderPicture.src = "Theo.jpg";
            miniDesc.innerHTML = "<span>Theo Löcker: </span>Ich will mich dafür einsetzen, dass Klimaschutz endlich auch im Bildungssystem den notwendigen Stellenwert bekommt. Unsere Schulen müssen klima- und zukunftsfit werden!";
            miniDesc.href = "#AHSTrennung";
            imageLink.href = "#AHSTrennung";
            sliderNameTag.innerText = "Theo Löcker";
            clickCounter = 1;
            break;
        default: 
        sliderPicture.src = "TheoPlaceholder.jpg"; 
        clickCounter = 1;
        miniDesc.href = "#AHSTrennung";
        imageLink.href = "#AHSTrennung";
        break;
    }
    //Theo, Felix, Milena, Pia, Emily
}

menuButton.onmousedown = () => {
    if(!menu.classList.contains("menuActive")) {
        menu.classList.add("menuActive");
    } else {
        menu.classList.remove("menuActive");
    }
}

function menuDisappearOnClick() {
    menu.classList.remove("menuActive");
}

for (let i = 0; i < menuItems.length; i++) {

    menuItems[i].addEventListener("click", menuDisappearOnClick);
}