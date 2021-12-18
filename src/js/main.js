

let button = $('.first');
let overlay = $('.overlay');
let close = $('.popup__close');
let second = $('.second');
let form = $(".popup__form");
let thanks = $(".popup__thanks");
let phone = $(".tel")

phone.inputmask("+\\9\\96(999)99-99-99");

button.on('click', function () {
    thanks.fadeOut("slow")
    overlay.fadeOut('slow');
    overlay.fadeIn('slow');
    form.fadeIn('slow');
});

close.on('click', function () {
    overlay.fadeOut('slow')
    form.fadeOut('slow')
});

second.on('click', function (e) {
    e.preventDefault()
    overlay.fadeOut('slow');
    form.fadeOut('slow');
    overlay.fadeIn("slow")
    thanks.fadeIn("slow")
});

var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.850167, 74.500394],
        zoom: 20
    });

    var myIcon = DG.icon({
        iconUrl: 'https://res.cloudinary.com/teepublic/image/private/s--rfVOjsKZ--/c_crop,x_10,y_10/c_fit,h_1567/c_crop,g_north_west,h_1038,w_1038,x_64,y_304/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-111,y_-111/b_rgb:000000/c_limit,f_auto,h_313,q_90,w_313/v1613594853/production/designs/19508335_0',
        iconSize: [50, 50],
        className: 'map_icon'
    });


    DG.marker([42.850167, 74.500394], {icon:myIcon, label: 'My home'}).addTo(map);
});