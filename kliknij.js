function licz()
{
    if (localStorage.ile_razy)
    {
        localStorage.ile_razy = Number(localStorage.ile_razy) + 1;
    }
    else
    {
        localStorage.ile_razy = 1;
    }
    window.alert("Whops, dałeś się nabrać już " +
        localStorage.ile_razy + " raz, nie ma nic za darmo, wypełnij formularz.");
}

function liczSesja()
{
    if (sessionStorage.ile_razyS)
    {
        sessionStorage.ile_razyS = Number(sessionStorage.ile_razyS) + 1;
    }
    else
    {
        sessionStorage.ile_razyS = 1;
    }
    if (sessionStorage.ile_razyS > 4) {
        window.alert("Ehh, widzę, że naprawdę muszę usunąć ten przycisk :(");
        var div = document.getElementById("tutaj");
        div.parentNode.removeChild(div);
    }
    else if (sessionStorage.ile_razyS > 3)
    {
        window.alert("Dobra, " + sessionStorage.ile_razyS + " razy to już za dużo, usuwam to.");
        var div = document.getElementById("tutaj");
        div.innerHTML = "<h2>Proszę nie klikać w ten przycisk, AWARIA!</h2><button type= \"button\" onclick= \"licz(); liczSesja();\" > Kliknij!</button> ";
    }
    else if (sessionStorage.ile_razyS > 1)
    {
        window.alert("Naprawdę, " + sessionStorage.ile_razyS + " razy w tej samej sesji?!\nLepiej zrób sobie przerwę.");
    }
}
function wyswietlDane()
{
    var divDane = document.getElementById("dane");
    divDane.firstChild.innerHTML = "Dane kontaktowe:";
    divDane.firstChild.className = "on";
    var div = document.createElement('div');
    divDane.parentNode.appendChild(div).id = "nowydiv";
    var nowyDiv = document.getElementById("nowydiv");
    nowyDiv.className = "centered";
    nowyDiv.appendChild(document.createElement('h3')).innerHTML = "mail:";
    nowyDiv.appendChild(document.createElement('p')).innerHTML = "acm2524h@gmail.com";
    nowyDiv.appendChild(document.createElement('h3')).innerHTML = "telefon:";
    nowyDiv.appendChild(document.createElement('p')).innerHTML = "887547389";
    nowyDiv.appendChild(document.createElement('h3')).innerHTML = "adres:";
    nowyDiv.appendChild(document.createElement('p')).innerHTML = "ul. Warszawska 16/31";
    nowyDiv.appendChild(document.createElement('p')).innerHTML = "Warszawa, 01-109";
}