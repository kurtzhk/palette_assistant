var active1, active2, active3, active4, active5;

window.addEventListener("load", startup, false);

function startup() {
    //fetching all the input children and arrayifying them
    var children = Array.from($("#activepalette").children('input'));

    //apply some listeners to them
    children.forEach(picker =>
        addEventListener("input", updateColor, false),
        addEventListener("change", updateColor, false));

    //just to get colors on them on load
    updateColor();
}

function updateColor(event) {
    //same shiz
    var palettes = Array.from($("#activepalette").children('input'));
    var basepalette = Array.from($("#basepalette").children('.colorblock'));
    var pal1 = Array.from($("#modpalette1").children('.colorblock'));
    var pal2 = Array.from($("#modpalette2").children('.colorblock'));
    var pal3 = Array.from($("#modpalette3").children('.colorblock'));

    //iterate through each one and apply color value to div
    for (i = 0; i < palettes.length; i++) {
        //coloring the pickers
        $(palettes[i]).css({ "backgroundColor": palettes[i].value });
        $(basepalette[i]).css({ "backgroundColor": palettes[i].value });

        deuteranopia(palettes, pal1);
        protanopia(palettes, pal2);
        tritanopia(palettes, pal3);
    }
}

function deuteranopia(palettes, pal) {
    //palettes[i].value should be modified by the matrix multi.
    //and then applied to the backgound color V
    $(pal[i]).css({ "backgroundColor": palettes[i].value });
}

function protanopia(palettes, pal) {
    $(pal[i]).css({ "backgroundColor": palettes[i].value });
}

function tritanopia(palettes, pal) {
    $(pal[i]).css({ "backgroundColor": palettes[i].value });
}

function generateScheme() {
    //should take the color from the lonely color box
    //and the forms input
    //and use it to generate a palette
}