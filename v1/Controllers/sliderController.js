if(foternameallow == 'fotter')
{
function sliderheroactive() {
    // Slider allow start
    try {
        var imgas = '';
        $.ajax({
            url: '/javascript/slider.json',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                if(response.length == 0)
                {
                    
                    $("#sliders_items_imgs .ec-slide-item .swiper-slide").remove();
                }
                else{
                    $("#sliders_items_imgs .ec-slide-item .swiper-slide").remove();
                    
                }
                $.each(response, function (index, element) {

                    if (index == 0) {
                        
                        imgas += '<div class="ec-slide-item swiper-slide d-flex">' +
                            '<img src="' + element.src + '">' +
                            '</div>';
                        
                    }
                    else {
                        
                        imgas += '<div class="ec-slide-item swiper-slide d-flex">' +
                        '<img src="' + element.src + '">' +
                        '</div>';
                    }

                });
                $('#sliders_items_imgs').html(imgas);
                                                                 /*----------------------------- Main Slider ---------------------- */
    var EcMainSlider = new Swiper('.ec-slider.swiper-container', {
        loop: true,
        speed: 2000,
        effect: "slide",
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
            }


        })
    } catch (error) {
        console.log(error)
    }
    // Slider allow end
}
}