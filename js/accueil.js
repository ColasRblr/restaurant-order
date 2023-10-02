//definition des variables pour l'effet plus/moin et le calcul du prix total
const minus = document.getElementsByClassName("minus");
const plus = document.getElementsByClassName("plus");
const itemPrice = document.getElementsByClassName("price");
const countItem = document.getElementsByClassName("count_item");
let countItemLength = countItem.length;
let price = [countItemLength];
let totalPrice = 0;

//definition des variables pour l'affichage du recap de la commande et l'affichage du prix total precedement calculé
const itemDiv = document.getElementById("item_div");
const itemCommand = document.getElementsByClassName("item_command");
const showPrice = document.getElementById("command_price");
const dishName = document.getElementsByClassName("dish_name");
let divHTML = "";

//recuperation du bouton valider
const validateButton = document.getElementById("validate");

//defini un listener à chaque balise possedant la classe minus ou plus, du fichier accueil.html
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", () => fn_minus(i));
  plus[i].addEventListener("click", () => fn_plus(i));
}

//permet d'initialiser le tableau price[] a des valeur de zero : ça sert a pouvoir l'utiliser de maniere propre et pratique
//sinon tant que le prix n'est pas mis a jour grace a un clic
//la valeur du tableau serai : undefined, il faudrais cliquer une fois sur tout les menu pour avoir des valeur "existante"
//tout mettre a zero est obligatoire pour travailler proprement et evite des erreur pour la suite du code
//ex : price[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, … ] = 0                                             :valide
//et : price[ 23, undefined, undefined, 12, undefined, ..] = NaN (NotANumber) ou Undefined      :invalide, inutilisable
for (let i = 0; i < countItem.length; i++) {
  price[i] = 0;
}

//ici c'est la boucle qui permet de faire le calcul total du prix, a cet instant du code : = O    :on vien de l'initialiser a zero c'est normal
//je m'en sert principalement pour afficher dans la console le prix au chargement de la page (utile ? oui si on veut une console propre et facile d'utilisation)
//globalement ça affiche juste prix = 0, rien de fou
//suivi par les console log dont on parlais, allez voir ce qu'il font : )
for (let i = 0; i < price.length; i++) {
  totalPrice += price[i];
}
console.log(
  "prix total de la commande au chargement de la page : " + totalPrice + " €"
);
console.log(price);
console.log(" ");

//boucle qui permet de creer 12 fois des div dans l'element itemDiv
//cela permet d'avoir 12 div avec la class item_command
//pour les parcourir plus tard et inserer le nom de l'item cliqué (item je veut dire bouffe hamburger miam menu comme vous voulez)
for (let i = 0; i < countItemLength; i++) {
  divHTML += '<div class="item_command"></div>\n';
}
itemDiv.innerHTML = divHTML;

//la fonction minus, un peu plus longue que la plus car elle verifie plusieur fois la quantité 0, on ne veut pas
//descendre sous zero pour les quantité et si une quantité a zero on veut pas afficher le prix et le nom du menu
//prenez le temps de la lire et de comprendre ligne par ligne
//si cette fonction est executé c'est qu'on a cliqué sur un -
function fn_minus(i) {
  if (countItem[i].value > 0) {
    countItem[i].value--;
    price[i] = countItem[i].value * itemPrice[i].innerHTML;
    console.log("le plat n°[" + i + "] vaut : " + price[i] + " €");
    totalPrice = 0;
    for (let i = 0; i < price.length; i++) {
      totalPrice += price[i];
    }
    console.log("totalPrice : " + totalPrice + " €");
    console.log(price);
    console.log(" ");
    itemCommand[i].innerHTML = countItem[i].value + " x " + dishName[i].innerHTML;
    if (countItem[i].value == 0) {
      itemCommand[i].innerHTML = "";
    }
    showPrice.innerHTML = "Prix total: " + totalPrice + " €";
    if (totalPrice == 0) {
      showPrice.innerHTML = "";
    }

    sessionStorage.setItem("price", totalPrice);
  }
}

function fn_plus(i) {
  countItem[i].value++;
  price[i] = countItem[i].value * itemPrice[i].innerHTML;
  console.log("le plat n°[" + i + "] vaut : " + price[i] + " €");
  totalPrice = 0;
  for (let i = 0; i < price.length; i++) {
    totalPrice += price[i];
  }
  console.log("prix total actuel : " + totalPrice + " €");
  console.log(price);
  console.log(" ");
  itemCommand[i].innerHTML = countItem[i].value + " x " + dishName[i].innerHTML;
  showPrice.innerHTML = "Prix total: " + totalPrice + " €";

  sessionStorage.setItem("price", totalPrice);
}

//relier le prix avec la page paiment.html
//afficher le prix dans la page paiement.html

validateButton.addEventListener("click", openJsPaiement);

function openJsPaiement() {
  document.location.href = "../html/pagepaiement.html";
}
