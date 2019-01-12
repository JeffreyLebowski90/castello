function show() {
    var x = document.getElementById("trovaInput");
    x.disabled = true;
    x.classList.add("trovaInput");
    setTimeout(deleteInput, 600)
    setTimeout(tadaAnim, 2500);
    setTimeout(goToCategories, 6500);
    // x.style.backgroundColor = "red";
    // x.style.color = "white";
}
function deleteInput() {
    var x = document.getElementById("trovaInput");
    x.style.color = "red";
    x.style.fontWeight = "bold";
    x.value = "( versione demo )";
    x.placeholder = "";
}
function tadaAnim() {
    var x = document.getElementById("homeLoader");
    x.classList.add("loader");
    x = document.getElementById("trovaInput");
    x.style.color = "black";
    x.value = "scarpe adidas basse";
    x.classList.add("animated");
    x.classList.add("tada");
}
function goToCategories() {
    window.location.href = 'categories';
}