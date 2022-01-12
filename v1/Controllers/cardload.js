try {
    


function cardload()
{
    try {
        $("#product_Addid li").remove();
        
        items = localStorage.getItem("itemsArray");
        json = JSON.parse(items);
        const result = json.filter(ss => ss.user_id === ueres_id);
        var count = 0;
        toprice = 0;
        var student = '';
        if(result.length){
            $('.imgaddtocartremove').hide();
            $('#imgaddtocartremove').hide();
        }
        else{
            $('.imgaddtocartremove').show();
            $('#imgaddtocartremove').show();
        }
        for (i = 0; i < result.length; i++) {
            // console.log(json[i]);
            count++;
            student +='<li>'
            student +='<a href="'+window.location.origin+'/products/'+result[i].old_id+'" target="_blank" class="sidekka_pro_img">'
            student +='<img src="' + result[i].img + '" alt="' +result[i].name + '"></a>'
            student +='<div class="ec-pro-content">'
            student +='<a href="'+window.location.origin+'/products/'+result[i].old_id+'" target="_blank" class="cart_pro_title">' +result[i].name + '</a>'
            
            student +='<span class="cart-price"><span>';
            if(result[i].size !='')
            student +='Size: ('+result[i].size+')<br>'
            student +=new Intl.NumberFormat().format(parseFloat(result[i].price))+'</span></span>'
            
            student +='<div class="qty-plus-minus">'
      
            student +='<input class="qty-input" style="width: 100%;" type="number" onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57" oninput="this.value = Math.abs(this.value)" min="1"  maxlength="3" onkeyup="' + "cartpricechnage(this,'" + result[i].id + "'," + i + "," + result[i].price + ")" + '"' + 'onchange="' + "cartpricechnage(this,'" + result[i].id + "'," + i + "," + result[i].price + ")" + '" value="' + result[i].quantity + '" />'
    
            student +='</div>'
            student +='<a href="#" class="remove" onclick="add_delete(' +
            "'" + result[i].id + "'"
            + ',this)">×</a>'
            student +='</div>'
            student +='</li>'


            var price = parseFloat(result[i].price * result[i].quantity)
            toprice = parseFloat(toprice + price);

            $("#product_Addid li").remove();
            $('#product_Addid').append(student);

        };
        $('.pricedonefotter').text(new Intl.NumberFormat().format(parseFloat(toprice)));
        $(".p_count").text(count);
        checkoutfun()
    } catch (error) {
        var count = 0;
        toprice = 0;
     
        $('.pricedonefotter').text(toprice);
        $(".p_count").text(count);
        checkoutfun()

    }
}

} catch (error) {
    console.log(error)
}