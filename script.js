var header = document.getElementById("header");

header.onclick = function() {
    if(header.style.color == "red"){
        header.style.color ="green";
    } else{
        header.style.color = "red";
    }
}