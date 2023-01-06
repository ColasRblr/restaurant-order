let storedQuantity;
let storedPrix;

const bouton = document.getElementById("validate");

//Je selectionne  mes trois boutons
const plus = document.getElementById("carte10Plus");
const minus = document.getElementById("carte10Minus");
let quantityString = document.getElementById("carte10Value");

//Transcription un string en nombre
let quantity = parseInt(quantityString.value);

//Récupère le nom du burger et le prix de la carte
let prix = document.getElementById("cheeseburger").getElementsByTagName("span")[0].innerHTML;
let burgerName = document.getElementById("cheeseburger").getElementsByTagName("h3")[0].innerHTML;

//Je crée un espace pour lister les éléments de ma commande 
let lister = document.getElementById("list");


//Fonction prend l'argument "quant" et réduit le nombre de commandes et enlève le dernier burger de la liste
function quantityMinus(quant) {
    let current;
    if (quant >= 1) {
        current = (quant -= 1);
        quantity = current;
        menuRemover();
        return quantityString.value = quantity; //injecter la nouvelle quantity 
    }
}

//Ajouter un listener sur le buton moins qui appele les 2 funct.
minus.addEventListener("click", function () {
    quantityMinus(quantity);
    updateOrder();
});

// Function prend un arg "quant" et augmente la commande 
function quantityPlus(quant) {
    let current = quant += 1;
    quantity = current;
    return quantityString.value = quantity;
}

// Ajouter une listener sur le buton plus qui appellee les 2 funct et ajoute un burger sur la liste.
plus.addEventListener("click", function () {
    quantityPlus(quantity);
    updateOrder();
    lister.innerHTML += "<li>" + burgerName + "</li>";
})

//Function qui actualise le quantity total et la prix
function updateOrder() {
    document.getElementById("order").innerHTML = quantity;
    let bill = quantity * prix;
    document.getElementById("price").innerHTML = bill + " ,00€";
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('prix', bill);
    storedQuantity = localStorage.getItem('quantity');
    storedPrix = localStorage.getItem('prix');
}

// Function qui permet d'enlever le dernier burger sur la liste 
function menuRemover() {
    if (quantity == 0) {
        lister.getElementsByTagName("li")[0].remove();
    } else if (quantity >= 1) {
        lister.getElementsByTagName("li")[quantity - 1].remove();
    }
}

bouton.addEventListener("click", function () {
    document.location.href = "./pagepaiement.html";
});
