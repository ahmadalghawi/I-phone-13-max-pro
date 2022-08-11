let imageChange = document.getElementById("imagess");
let changeColor = document.querySelector('body');
function changeImage(phone ,color) {
    imageChange.src = phone;
    changeColor.style.background = color;
}


