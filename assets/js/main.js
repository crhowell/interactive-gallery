/*
    Interactive Gallery - Project 4
    Author: Chris Howell
    Date: 04/29/2018
*/

function load_images($images){
    var $gallery = $('#primary-gallery')
    $.each($images, function($idx,$val){
        $img_el = '<li class="item"><img src="photos/thumbnails/' + $val + '" /></li>';
        $gallery.append($img_el);
    });
}

var $imagesNames = [
    '01.jpg','02.jpg','03.jpg','04.jpg',
    '05.jpg','06.jpg','07.jpg','08.jpg',
    '09.jpg','10.jpg','11.jpg','12.jpg'
];

load_images($imagesNames);