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
                    
                    $("#slider_main_id").remove();
                }
                else{
                    $("#slider_main_id").remove();
                    
                }
                $.each(response, function (index, element) {

                    if (index == 0) {
                        
                        imgas += '<div class="carousel-item active">' +
                            '<img class="d-block w-100" src="' + element.src + '">' +
                            '</div>';
                        
                    }
                    else {
                        
                        imgas += '<div class="carousel-item">' +
                            '<img class="d-block w-100" src="' + element.src + '">' +
                            '</div>';
                    }

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