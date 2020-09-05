function addToPlaylist(numMusic) {
    let name = document.getElementById("musicName" + numMusic).innerHTML;
    let artist = document.getElementById("artist" + numMusic).innerHTML;

    let myplaylist = document.getElementById("playlist");
    let instructionTag = document.getElementById("instruction");
    let music = document.createElement("div");
    music.innerHTML =
        '<div class="card mb-3"> \
            <div class="row">\
                <div class="col-md-4">\
                    <img class="card-img" height="100%" src="img/music' + numMusic + '.jpg">\
                </div>\
                <div class="col-md-8">\
                    <div class="card-body">\
                        <h4>' + name + '</h4>\
                        <p class="artist">' + artist + '</p>\
                    </div>\
                </div>\
            </div>\
        </div>'
    myplaylist.insertBefore(music, instructionTag);

}