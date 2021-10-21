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
                    
                    $(".slider_main_id").remove();
                }
                else{
                    $(".slider_main_id").remove();
                    
                }
                $.each(response, function (index, element) {

                  $('#sliderappend').append('<div class="ec-slide-item swiper-slide d-flex" id=""><img src="https://controllers.eralive.net/images/E-Shop Banner Placeholder1.png"></div><div class="ec-slide-item swiper-slide d-flex"><img src="https://controllers.eralive.net/images/E-Shop Banner Placeholder2.png"></div>')

                });
                $('#sliders_items_imgs').append(imgas);
            }


        })
    } catch (error) {
        console.log(error)
    }
    // Slider allow end
}
}