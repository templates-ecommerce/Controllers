if(pagenames == "Home")
{
function sort() {
    var id = $('#pricerageallow').val();
    var content = document.querySelector('#search');
    var els = Array.prototype.slice.call(document.querySelectorAll('#search > div'));


    els.sort(function (a, b) {
        na = parseInt(a.querySelector('.rangeprice').innerHTML);
        nb = parseInt(b.querySelector('.rangeprice').innerHTML);

        if (id == 'byPrice') {
            return (na - nb);
        } else {
            return (nb - na);
        }

    });

    els.forEach(function (el) {
        content.appendChild(el);
    });
}





var toprice = 0;
function Check(ids, title, dec, price, img, qty) {


    const oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
    const idToUse = ids;
    const existingItem = oldItems.find(ss => ss.id === idToUse && ss.user_id === ueres_id);
    if (existingItem) {
        Object.assign(existingItem, {
            'name': decodeURIComponent(title).replaceAll('+',' '),
            'quantity': existingItem.quantity + qty,
            'price': parseFloat(price),
            'dec': decodeURIComponent(dec).replaceAll('+',' '),
            'img': img,
            'user_id': ueres_id,
        })
    } else {
        const newItem = {
            'id': idToUse,
            'name': decodeURIComponent(title).replaceAll('+',' '),
            'quantity': qty,
            'price': parseFloat(price),
            'dec': decodeURIComponent(dec).replaceAll('+',' '),
            'img': img,
            'user_id': ueres_id,
        };
        oldItems.push(newItem);
    }

    localStorage.setItem('itemsArray', JSON.stringify(oldItems));
    var options = {
        autoClose: true,
        progressBar: true,
        enableSounds: true,
        sounds: {
      
            success: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",
      
        },
      };
      var toast = new Toasty(options);
      toast.configure(options);
      
      toast.success("New item(s) have been added to your cart");
      
      cardload();
}





$(document).ready(function () {
    $('.myInput-hide').show();
    $(".myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#search .pricesrangeclass").filter(function () {
            $(this).toggle($(this)[0].outerText.toLowerCase().indexOf(value) > -1);
        });
    });
});


function onButtonClick() {
    document.getElementsByClassName('myInput-hide').className = "show form-control";
    document.getElementById('hide').className = "hide";
}





}