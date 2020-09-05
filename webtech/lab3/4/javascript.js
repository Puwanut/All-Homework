function rotate(){
    let topLeft = document.getElementById("top_left");
    let topRight = document.getElementById("top_right");
    let bottomLeft = document.getElementById("bottom_left");
    let bottomRight = document.getElementById("bottom_right");

    let topLeftPic = topLeft.src;
    let topRightPic = topRight.src;
    let bottomLeftPic = bottomLeft.src;
    let bottomRightPic = bottomRight.src;

    topLeft.src = bottomLeftPic;
    topRight.src = topLeftPic;
    bottomRight.src = topRightPic;
    bottomLeft.src = bottomRightPic;
}