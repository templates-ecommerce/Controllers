try{

if(foternameallow == 'fotter')
{
var ueres_id = null;
function onlodergetusersids() {


    if (localStorage.getItem("gotrue.user") != null) {
        login = localStorage.getItem("gotrue.user");
        logins = JSON.parse(login);

        ueres_id = logins.id;
        const oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];


        if (oldItems) {
            for (i = 0; i < oldItems.length; i++) {

                const idToUse = oldItems[i].id;
                const existingItem = oldItems.find(ss => ss.id === idToUse && ss.user_id === null);
                if (existingItem) {
                    Object.assign(existingItem, {
                        'user_id': ueres_id,
                    })
                }
                localStorage.setItem('itemsArray', JSON.stringify(oldItems));

            }
        }
    }
    else {
        ueres_id = null;
    }
    
    cardload();

    try {
        socialtagsandcontant()
    } catch (error) {

    }

}




function socialtagsandcontant() {
    // Social file start
    try {
        $.getScript('/javascript/social_links.js', function () {
            // Social media allow start
            try {
                if (fb != null && fb != '' && fb.trim() != '') {
                    $('#facebook').attr("href", fb);
                    $("#itemfb").removeClass("d-none");
                }
            } catch (error) {

            }

            try {
                if (tw != null && tw != '' && tw.trim() != '') {
               
                    $('#twitter').attr("href", tw);
                    $("#itemtw").removeClass("d-none");
                }
            } catch (error) {

            }



            try {
                    if (yt != null && yt != '' && yt.trim() != '') {
                    $('#youtube').attr("href", yt);
                    $("#itemyt").removeClass("d-none");
                }
            } catch (error) {

            }



            try {
                if (insta != null && insta != '' && insta.trim() != '') {
                    $('#instagram').attr("href", insta);
                    $("#iteminta").removeClass("d-none");
                }
            } catch (error) {

            }



            try {
                if (pt != null && pt != '' && pt.trim() != '') {
              
                    $('#pinterest').attr("href", pt);
                    $("#itempt").removeClass("d-none");
                }
            } catch (error) {

            }
            // Social media allow end

            // contact allow start
            try {
                    if (social_mobile != null && social_mobile != '' && social_mobile.trim() != '') {
                    $(".parmobile").html('<a class="text-color" href="tel:' + social_mobile + '"><i class="fa fa-mobile mr-2"></i>' + social_mobile + '</a>');
                    $(".parmobile").removeClass("d-none");
                }
            } catch (error) {

            }
            try {
                    if (social_email != null && social_email != '' && social_email.trim() != '') {
                    $(".paremail").html('<a class="text-color" href="mailto:' + social_email + '"><i class="fa fa-envelope-o mr-2"></i>' + social_email + '</a>');
                    $(".paremail").removeClass("d-none");
                }
            } catch (error) {

            }
            try {

                if (social_location != null && social_location != '' && social_location.trim() != '') {
                    $(".parlocation").html('<i class="fa fa-map-marker mr-2"></i>' + decodeURIComponent(social_location).replaceAll('+',' '));
                    $(".parlocation").removeClass("d-none");
                }
            } catch (error) {

            }
            try {
                if (about_info != null && about_info != '' && about_info.trim() != '') {
                    $("#aboutdetails").text(decodeURIComponent(about_info).replaceAll('+',' '));
                   
                }
            } catch (error) {

            }

            try {
                if (social_mobile != null && social_mobile != '' && social_mobile.trim() != '') {
               // $(".whatsappallow").html('<a class="text-color" href="tel:' + social_mobile + '"><i class="ti-mobile text-primary mr-2"></i>' + social_mobile + '</a>');
                $(".whatsappallow").removeClass("d-none");
            }
        } catch (error) {

        }
            // contact allow end

            
        //     <a href="https://api.whatsapp.com/send/?phone=15551234567&text=I%27m+interested+in+your+car+for+sale&app_absent=0"  class="btn btn-sm btn-outline-primary" target="_blank">
        //     <i class="fa fa-whatsapp" aria-hidden="true" style="font-size: 20px;"></i>
        //   </a>
        });

    }
    catch (error) {

    }
    // Social file end
}

}
} catch (error) {
    console.log(error)
}
// Listen for input event on numInput.
// Reusable Function to Enforce MaxLength
