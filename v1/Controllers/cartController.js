try {
    


if(pagenames == "Cartpage")
{
    var deliveryprice =0;
function cardpage()
{
    try {
        $("#tbodyload tr").remove();
        
        items = localStorage.getItem("itemsArray");
        json = JSON.parse(items);
        const result = json.filter(ss => ss.user_id === ueres_id);
        var count = 0;
        toprice = 0;
        var student = '';
        for (i = 0; i < result.length; i++) {
            // console.log(json[i]);
            count++;
            student +='<tr>'
            student +='<td data-label="Product" class="ec-cart-pro-name"><a href="'+window.location.origin+'/products/'+result[i].id+'" target="_blank"><img class="ec-cart-pro-img mr-4" src="' + result[i].img + '" alt="' +result[i].name + '" />' +result[i].name + '</a></td>'
            student +='<td data-label="Price" class="ec-cart-pro-price"><span class="amount">PKR: '+new Intl.NumberFormat().format(parseFloat(result[i].price))+'</span></td>'
            student +='<td data-label="Quantity" class="ec-cart-pro-qty" style="text-align: center;">'
            student +='<div class="cart-qty-plus-minus"> <input class="cart-plus-minus" style="width: 100%;" type="number" onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57" oninput="this.value = Math.abs(this.value)" min="1"  maxlength="3" onkeyup="' + "cartpricechnage(this,'" + result[i].id + "'," + i + "," + result[i].price + ",'cart')" + '"' + 'onchange="' + "cartpricechnage(this,'" + result[i].id + "'," + i + "," + result[i].price + ",'cart')" + '" value="' + result[i].quantity + '" /></div>'
            student +='</td>'
            // student +='<td data-label="Total" class="ec-cart-pro-subtotal">$56.00</td>'
      
            student +='<td data-label="Remove" class="ec-cart-pro-remove">'
    
            student +='<a href="#" onclick="add_delete(' +
            "'" + result[i].id + "'"
            + ',this)"><i class="ecicon eci-trash-o"></i></a>'
            student +='</td>'
            student +='</tr>'


            var price = parseFloat(result[i].price * result[i].quantity)
            toprice = parseFloat(toprice + price);

            $("#tbodyload tr").remove();
            $('#tbodyload').append(student);

        };
        $('#p_subamount').text(new Intl.NumberFormat().format(parseFloat(toprice)));
        $('#t_amount').text(new Intl.NumberFormat().format(parseFloat(toprice)))
       // $(".p_count").text(count);
       getcities()

    } catch (error) {
        var count = 0;
        toprice = 0;
     
        $('#p_subamount').text(toprice);
        $('#t_amount').text(new Intl.NumberFormat().format(parseFloat(toprice)))
        getcities()
        //$(".p_count").text(count);

    }
}

function getcities(){
    try {
        
    
    $.ajax({
        "url": apicon+"/api/Ecom/GetManageDelivery",
        "method": "GET",
        "headers": {
            "SubDomain": subdomain,
            "AccessKey": AccessKey
        },
        success: function (response) {
            var datas = JSON.parse(response);
            // console.log(datas)
            var len = 0;
            if (datas != null) {
                len = datas.length;
            }
            else {

            }
                // alert(response)
            
            if (len > 0) {

                for (var i = 0; i < len; i++) {

                    fottor = '<option value="' + datas[i].CityID + '" data-miniorder="' + datas[i].MinimumOrderAmount + '" data-price="' + datas[i].Charges + '">' + datas[i].Name + '</option>';

                    $('#getcitys').append(fottor);
                }
               
            }

        }
    });
} catch (error) {
        
}
}
function onchacity() {
    deliveryprice = parseFloat($('#getcitys :selected').data("price"));
    $('#d_amount').text(new Intl.NumberFormat().format(deliveryprice));

    $('#t_amount').text(new Intl.NumberFormat().format(parseFloat(toprice)+deliveryprice))
}
}

} catch (error) {
    // console.log(error)
}