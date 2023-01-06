let storedQuantity = localStorage.getItem('quantity');
let storedPrix = localStorage.getItem('prix');

let euro = document.getElementById("price");
euro.innerHTML = storedPrix;