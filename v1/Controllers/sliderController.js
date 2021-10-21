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
                    
                    $(".sliders_items_imgs").remove();
                }
                else{
                    $(".slider_main_id").remove();
                    
                }
                $.each(response, function (index, element) {

                   
                        
                        imgas += '<div class="ec-slide-item swiper-slide d-flex">' +
                            '<img class="d-block w-100" src="' + element.src + '">' +
                            '</div>';
                    

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