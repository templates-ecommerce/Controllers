try {

    if (pagenames == "Home") {
        function sort() {
            var id = $('#pricerageallow').val();
            var content = document.querySelector('#search');
            var els = Array.prototype.slice.call(document.querySelectorAll('#search > .categoryserch'));


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
            pagination()
        }





        var toprice = 0;
        var categories = [];
        function Check(ids, title, dec, price, img, qty) {


            const oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
            const idToUse = ids;
            const existingItem = oldItems.find(ss => ss.id === idToUse && ss.user_id === ueres_id);
            if (existingItem) {
                Object.assign(existingItem, {
                    'name': decodeURIComponent(title).replaceAll('+', ' '),
                    'quantity': existingItem.quantity + qty,
                    'price': parseFloat(price),
                    'dec': decodeURIComponent(dec).replaceAll('+', ' '),
                    'img': img,
                    'user_id': ueres_id,
                })
            } else {
                const newItem = {
                    'id': idToUse,
                    'name': decodeURIComponent(title).replaceAll('+', ' '),
                    'quantity': qty,
                    'price': parseFloat(price),
                    'dec': decodeURIComponent(dec).replaceAll('+', ' '),
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

            toast.success("Product added to your cart");

            cardload();
        }




        var products = [];
        $(document).ready(function () {
            $('.myInput-hide').show();
            $(".myInput").on("keyup", function () {
                $('#search .pricesrangeclass').removeClass('categoryserch');
                var value = $(this).val().toLowerCase();
                $("#search .pricesrangeclass").filter(function () {
                    var category = $(this).data("category");
                    var price = parseInt($(this).data("price"));
                    if (categories.length) {
                        $(this).toggle($(this)[0].outerText.toLowerCase().indexOf(value) > -1 && categories.indexOf(category) > -1 && price >= parseInt($('#sprice').val()) && price <= parseInt($('#hprice').val()));
                    }
                    else {
                        $(this).toggle($(this)[0].outerText.toLowerCase().indexOf(value) > -1 && price >= parseInt($('#sprice').val()) && price <= parseInt($('#hprice').val()));
                    }
                   
                });
                pagination()
            });


            $('#search .pricesrangeclass').each(function () {
                var product = {
                    price: parseInt($(this).data("price")),
                    category: $(this).data("category")
                }
                products.push(product);
            })
            if (products.length > 0) {
                var prices = products.map(x => x.price)
                $('#ec-sliderPrice').attr("data-max", Math.max(...prices));
                sliderprice()
                setcat()
            }
        });

        function setcat() {

            ArrayArray = products.reduce(function (item, e1) {
                var matches = item.filter(function (e2) { return e1.category == e2.category });
                if (matches.length == 0) {
                    item.push(e1);
                    var cat = ''
                    cat += '<li>'
                    cat += '<div class="ec-sidebar-block-item">'
                    cat += '<input type="checkbox" value="' + e1.category + '" id="' +e1.category + '" onchange="checkbox(this)"/> <label style="margin-left: 12%;text-transform: capitalize;" for="' + e1.category + '">' + decodeURIComponent(e1.category).replaceAll('+',' ') + '</label><span class="checked"></span>'
                    cat += '</div>'
                    cat += '</li>'
                    $('#catulli').append(cat);
                }
                return item;
            }, []);
        }

        function sliderprice() {
            /*----------------------------- Slider Price -------------------------------- */
            const slider = document.getElementById('ec-sliderPrice');
            if (slider) {
                const rangeMin = parseInt(slider.dataset.min);
                const rangeMax = parseInt(slider.dataset.max);
                const step = parseInt(slider.dataset.step);
                const filterInputs = document.querySelectorAll('input.filter__input');

                noUiSlider.create(slider, {
                    start: [rangeMin, rangeMax],
                    connect: true,
                    step: step,
                    range: {
                        'min': rangeMin,
                        'max': rangeMax
                    },

                    // make numbers whole
                    format: {
                        to: value => parseInt(value),
                        from: value => parseInt(value)
                    }
                });

                // bind inputs with noUiSlider 
                slider.noUiSlider.on('update', (values, handle) => {
                    filterInputs[handle].value = values[handle];
                });

                filterInputs.forEach((input, indexInput) => {
                    input.addEventListener('change', () => {
                        slider.noUiSlider.setHandle(indexInput, input.value);
                    })
                });
            }
        }

        function onButtonClick() {
            document.getElementsByClassName('myInput-hide').className = "show form-control";
            document.getElementById('hide').className = "hide";
        }


        // function filter() {
        //     $("#search .pricesrangeclass").filter(function () {
        //         var price = parseInt($(this).data("price"));
        //         $(this).toggle(price >= parseInt($('#sprice').val()) && price <= parseInt($('#hprice').val()));
        //     });
        // }


        function checkbox(element) {
            $('#search .pricesrangeclass').removeClass('categoryserch');
            if (element == null) {
                $('#catulli input[type="checkbox"]').each(function () {
                    if ($(this).checked)
                        categories.push($(this).value);
                })
            }
            if (element) {
                if (element.checked)
                    categories.push(element.value);
                else {
                    const index = categories.indexOf(element.value);
                    if (index > -1)
                        categories.splice(index, 1)
                }
            }
            $("#search .pricesrangeclass").filter(function () {
                
                var category = $(this).data("category");
                var price = parseInt($(this).data("price"));
                if (categories.length) {
                    // categoryserch
                    
                       
                   
                   
                    $(this).toggle(categories.indexOf(category) > -1 && price >= parseInt($('#sprice').val()) && price <= parseInt($('#hprice').val()));
                   
                    
                    
                } else {
                    $(this).toggle(price >= parseInt($('#sprice').val()) && price <= parseInt($('#hprice').val()));
                }
   
            });
            pagination()
        }




        function pagination() {
            pageSize = 12;
            $("#pagin li").remove();
            $(".pricesrangeclass:visible").addClass('categoryserch')
            $(".pricesrangeclass").hide();
            var pageCount = $(".categoryserch").length / pageSize;

            for (var i = 0; i < pageCount; i++) {

                $("#pagin").append('<li><a href="#' + (i + 1) + '">' + (i + 1) + '</a></li>');
            }
            $("#pagin li a").first().addClass("active")
            if($(".categoryserch").length)
            {
                showPage = function (page) {
                    $(".pricesrangeclass").hide();
                    $(".categoryserch").each(function (n) {
                        if (n >= pageSize * (page - 1) && n < pageSize * page) {
                          
                                $(this).show();
                            
                            // $(this).show();
                            // checkbox(null);
                        }
                    });
                }
            }
           

            showPage(1);

            $("#pagin li a").click(function () {
                $("#pagin li a").removeClass("active");
                $(this).addClass("active");
                showPage(parseInt($(this).text()))
            });
        }
        $(document).ready(function () {
            pagination()


        }
        )
    }

} catch (error) {
    console.log(error)
}