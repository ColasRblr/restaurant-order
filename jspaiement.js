const radioCB = document.getElementById("card");
const radioEspece = document.getElementById("cash");
const formCB = document.getElementById("formCB");
const formAppoint = document.getElementById("appoint");
const submitBtn = document.getElementById("button");

radioCB.addEventListener("click", isChecked);
radioEspece.addEventListener("click", isChecked);

function isChecked() {

    if (radioCB.checked) {

        formCB.style.display = "block";
    } else {

        formCB.style.display = "none";
    }

    if (radioEspece.checked) {

        formAppoint.style.display = "block";
    } else {

        formAppoint.style.display = "none";
    }
}

const nameCust = document.getElementById("name");
const phone = document.getElementById("phone");
const adresse = document.getElementById("adresse");
const code = document.getElementById("code");
const city = document.getElementById("city");

const namecb = document.getElementById("namecb");
const numberCard = document.getElementById("numberCard");
const dateExpiration = document.getElementById("dateExpiration");
const security = document.getElementById("security");

const error = document.getElementsByClassName("error");

let isFalse = true;

let customer = {
    nameCust : "",
    phone : "",
    adresse: "",
    code : "",
    city : "",
    namecb : "",
    numberCard : "",
    dateExpiration : "",
    security : "",
}

function Verif(event) {

    if(nameCust.value.length <= 0) {
        event.preventDefault();
        error[0].innerHTML = "Veuillez taper votre nom et prenom";

    } else {
        error[0].innerHTML = "";
        customer.nameCust = nameCust.value;

    }

    if(phone.value.length != 10 || isNaN(phone.value)) {
        event.preventDefault();
        error[1].innerHTML = "Veuillez entrer un n° de telephone valide";

    } else {
        error[1].innerHTML = "";
        customer.phone = phone.value;
    }

    if(adresse.value.length <= 0) {
        event.preventDefault();
        error[2].innerHTML = "Veuillez entrer une adresse valide";
        
    } else {
        error[2].innerHTML = "";
        customer.adresse = adresse.value;

    }

    if(code.value.length <=0 || isNaN(code.value)) {
        event.preventDefault();
        error[3].innerHTML = "Le code postal est invalide"

    } else {
        error[3].innerHTML = "";
        customer.code = code.value;
        
    }

    if(city.value.length <= 0) {
        event.preventDefault();
        error[4].innerHTML = "le champ Ville ne doit pas etre vide";

    } else {
        error[4].innerHTML = "";
        customer.city = city.value;

    }

    if(namecb.value.length <= 0) {
        event.preventDefault();
        error[5].innerHTML = "Entrez le Nom indique sur votre carte";
        
    } else {
        error[5].innerHTML = "";
        customer.namecb = namecb.value;

    }

    if(numberCard.value.length != 16 || isNaN(numberCard.value)) {
        event.preventDefault();
        error[6].innerHTML = "Entrez le numero de votre carte";

    } else {
        error[6].innerHTML = "";
        customer.numberCard = numberCard.value;

    }

    if(dateExpiration.value.length != 4 || isNaN(dateExpiration.value)) {
        event.preventDefault();
        error[7].innerHTML = "Entrez la date de validité de votre carte";
        
    } else {
        error[7].innerHTML = "";
        customer.dateExpiration = dateExpiration.value;

    }
    
    if(security.value.length != 3 || isNaN(security.value)) {
        event.preventDefault();
        error[8].innerHTML = "Entrez votre code ccv";

    } else {
        error[8].innerHTML = "";
        customer.security = security.value;

    }

    console.log(customer);
}
let storedQuantity = localStorage.getItem('quantity');
let storedPrix = localStorage.getItem('prix');

let euro = document.getElementById("price");
euro.innerHTML = storedPrix;