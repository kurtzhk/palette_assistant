var active1, active2, active3, active4, active5;

window.addEventListener("load", startup, false);

function startup() {
    //fetching all the input children and arrayifying them
    var children = Array.from($("#activepalette").children('input'));

    //apply some listeners to them
    children.forEach(picker =>
        addEventListener("input", updateColor, false),
        addEventListener("change", updateColor, false));
}

function updateColor(event) {
    //same shiz
    var palettes = Array.from($("#activepalette").children('input'));
    var mirrors = Array.from($("#zombiepalette").children('.colorblock'));

    for(i = 0; i < palettes.length; i++){
        $(mirrors[i]).css({"backgroundColor":palettes[i].value});
    }
}