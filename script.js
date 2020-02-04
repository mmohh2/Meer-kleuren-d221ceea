var backgroundColor = null;
var titleColor = null;
function bg() {
    backgroundColor = document.getElementById("backg").value;
}

function titlecolor() {
    titleColor = document.getElementById("backg").value;
}

function applycolor() {
    document.getElementById("body").style.backgroundColor = backgroundColor;
    document.getElementById("title").style.color = titleColor;
}