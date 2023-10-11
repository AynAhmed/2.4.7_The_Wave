$(document).ready(function(){
var HEIGHT = $(window).height();
var divs = $(".move");

function animateDivDown(index) {

    var currentDiv = divs[index];
     console.log(currentDiv)
    $(currentDiv).animate({ top: HEIGHT - $(currentDiv).height() }, 1000, function () {
        $(this).animate({ top: 0 }, 1000, function () {
            if (index < divs.length - 1) {
                animateDivDown(index + 1);
            } else {
                animateDivUp(index);
            }
        });
    });
}

function animateDivUp(index) {
    var currentDiv = divs[index];
    console.log(currentDiv)
    $(currentDiv).animate({ top: 0 }, 1000, function () {
        $(this).animate({ top: HEIGHT - $(this).height() }, 1000, function () {
            if (index > 0) {
                animateDivUp(index - 1);
            } else {
                animateDivDown(0);
            }
        });
    });
}

animateDivDown(0);
})