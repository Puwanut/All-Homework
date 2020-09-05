function changecolor() {
  let hexcolor = document.getElementById("codeColor").value;
  document.getElementsByClassName("box")[0].style.backgroundColor = hexcolor;
  document.getElementsByClassName("box")[1].style.backgroundColor = hexcolor;
  document.getElementsByClassName("box")[2].style.backgroundColor = hexcolor;
}
