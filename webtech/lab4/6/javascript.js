let select = 0;

function replyThis(numQuestion) {
    select = numQuestion;
    let reply = document.getElementById("q" + select);
    reply.style.background = "blue";
    reply.style.color = "white";
    for (var i = 1; i < 4; i++) {
        if (select != i) {
            let button = document.getElementById("q" + i);
            button.style.background = "white";
            button.style.color = "blue";
        }
    }
}

function sendReply() {
    if (select == 0) {
        alert("Please select the question you want to reply to.");
    }
    else {
        let ans = document.getElementById("ans" + select);
        ans.innerHTML = document.getElementById("message").value;
    }

}