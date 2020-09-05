function random() {
    document.getElementById("prize1").innerHTML = String(Math.floor(Math.random()*999999)).padStart(6, "0");
    document.getElementById("prize3-1").innerHTML = String(Math.floor(Math.random()*999)).padStart(3, "0");
    document.getElementById("prize2").innerHTML = String(Math.floor(Math.random()*99)).padStart(2, "0");
    document.getElementById("prize3-2").innerHTML = String(Math.floor(Math.random()*999)).padStart(3, "0");
}
