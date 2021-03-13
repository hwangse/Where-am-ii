function initializePhotoGallery() {
    $('#Journey .album ul.first').bsPhotoGallery({
        "classes": "col-3 col-lg-3 col-md-3 col-sm-3",
        "hasModal": true,
        "shortText": false
    });
};
initializePhotoGallery();

var nationMap = {
    0: "kor",
    1: "tai",
    2: "jap",
    3: "nep",
    4: "mong",
    5: "sing",
    6: "mal",
    7: "aus",
    8: "usa"
}

$(document).ready(function () {
    $("#Journey #journey_icon img").click(function () {
        // display album
        var idx = $(this).index();

        $("#Journey .album").css("display", "none").eq(idx).css("display", "block");

        var selected = $("#Journey .album").eq(idx);
        var ul = $(selected).find("ul")
        ul.empty();
        for (var i = 1; i <= 20; i++) {
            ul.append("<li><img alt='' src='./albums/" + nationMap[idx] + "/" + i + ".jpg'></li>");
        }
        initializePhotoGallery();

        // move person icon
        var first = (($(window).width()) / 100) * 10;
        var pos_icon = $(this).position(); // returns an object with the attribute top and left
        var pos_person = $("#moving_person").position();

        var diff = (pos_icon.left + first) - pos_person.left;
        $("#moving_person").animate({left: "+=" + (diff) + "px"}, 500);

    });

    $("#main-image").hover(function () {
            $("body").css({ // when hover
                transition: 'background 0.6s ease-in-out',
                "background": "#160d48" //dark blue
            });
            $("#navbar").css({
                transition: 'background 0.6s ease-in-out',
                "background": "#160d48" //dark blue
            });

            $('#moving_img').fadeOut(500, function () {
                $('#moving_img').attr("src", "./images/star_moving.gif");
                $('#moving_img').fadeIn(500);
            });
        },
        function () { // when not hover
            $("body").css("background", "#30b5a8");		//sky blue
            $("#navbar").css("background", "#30b5a8");  //sky blue
            $('#moving_img').fadeOut(500, function () {
                $('#moving_img').attr("src", "./images/cloud_moving.gif");
                $('#moving_img').fadeIn(500);
            });
        });
});