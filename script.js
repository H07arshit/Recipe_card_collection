function toggleItem(item) {
    item.classList.toggle("done");
}

function changeServings(button, change) {
    var card = button.closest(".card");
    var countBox = card.querySelector(".count");
    var servings = Number(countBox.textContent) + change;

    if (servings < 1) {
        return;
    }

    countBox.textContent = servings;

    var quantities = card.querySelectorAll(".qty");

    for (var i = 0; i < quantities.length; i++) {
        var amountPerServing = Number(quantities[i].dataset.amount);
        quantities[i].textContent = amountPerServing * servings;
    }
}