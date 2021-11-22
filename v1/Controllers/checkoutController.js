try {
    


if(pagenames == "checkout")
{
    sessionStorage.removeItem("checkout");
    items = localStorage.getItem("itemsArray");
    json = JSON.parse(items);
    if(json !=null)
    {
        if(json.length > 0)
        {
    
        }
        else{
            window.location.href = window.location.origin;
        }
    }
    else{
      
        window.location.href = window.location.origin;
    
    }
var getipaddress;
function getIP(json) {
    getipaddress = json.ip;
    //   alert("My public IP address is: " + json.ip);
}
var dataexmple=[];

var id;
var u_id;
var email;
if (localStorage.getItem("gotrue.user") != null) {
    login = localStorage.getItem("gotrue.user");
    logins = JSON.parse(login);

    u_id = logins.id;
    email = logins.email;
    console.log(logins)

}
else {
    window.location.href = window.location.origin + "/";

}

var ouuid;
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
var sutotle = 0;
var subtot = 0;
var deliveyprice = 0;
function load() {
    sessionStorage.removeItem("checkout");
    $("#tablaa").html('');
    if (localStorage.getItem("itemsArray") != null) {
        items = localStorage.getItem("itemsArray");
        json = JSON.parse(items);
        var count = 0;
        toprice = 0;
        var products = '';
        for (i = 0; i < json.length; i++) {
            if(json[i].id.includes('example'))
            {
                dataexmple.push(json[i])
            }
            
            // console.log(json[i]);
            count++;
            products += '<div class="col-sm-12 mb-6">';
            products += '<div class="ec-product-inner">';
            products += '<div class="ec-pro-image-outer">';
            products += '<div class="ec-pro-image">';
            products += '<div class="image">';
            products += '<img class="main-image" src="' + json[i].img + '" alt="' + json[i].name + '" />';
            products += '</div>';
            products += '</div>';
            products += '</div>';

            products += '<div class="ec-pro-content">';
            products += '<h5 class="ec-pro-title"><a href="'+window.location.origin+'/products/'+json[i].id+'" target="_blank">' + json[i].name + '</a></h5>';
            products += '<span class="ec-price">';
            products += '<span class="new-price">PKR: ' + new Intl.NumberFormat().format(parseFloat(json[i].price)) + '</span>';
            products += '</span>';
         
            products += '<div class="qty-plus-minus"><input type="number" class="qty-input" style="width: 80px;height:30px;border: 1px solid #eeeeee;" onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57" oninput="this.value = Math.abs(this.value)" min="1"  maxlength="3" onkeyup="' + "cartpricechnage(this,'" + json[i].id + "'," + i + "," + json[i].price + ",'checkout')" + '"' + 'onchange="' + "cartpricechnage(this,'" + json[i].id + "'," + i + "," + json[i].price + ",'checkout')" + '" value="' + json[i].quantity + '">';
            products +='<a href="#" onclick="add_delete('+"'" + json[i].id + "'"+ ',this)">&nbsp;&nbsp;<i class="ecicon eci-trash-o" style="font-size: 20px;"></i></a></div>'

            products += '</div>';
            // products += ''
            products += '</div>';
            
            products += '</div>';
            // products += '<button class="btn btn-outline-danger btn-icon" style="padding: 10px 15px;" onclick="add_delete(' +"'" + json[i].id + "'"+ ',this)"><i class="fa fa-trash" aria-hidden="true"></i></button>';
            
            var price = parseFloat(json[i].price * json[i].quantity)
            toprice = parseFloat(toprice + price);
        };
        $('#tablaa').html(products);
        $("#count").text(count + ' items');
        $("#subtotle").text(new Intl.NumberFormat().format(toprice));
        $("#sutotle").text(new Intl.NumberFormat().format(toprice));
        sutotle = toprice;
        subtot = toprice;
        onchacity();
        items = localStorage.getItem("itemsArray");
    json = JSON.parse(items);
    if(json !=null)
    {
        if(json.length > 0)
        {
    
        }
        else{
            window.location.href = window.location.origin;
        }
    }
    else{
      
        window.location.href = window.location.origin;
    
    }
    }
    else {
        $("#count").text(0 + ' items');
        $("#subtotle").text(0);
        $("#sutotle").text(0);
        sutotle = 0;
        subtot = 0;
        $("#tablaa").remove();
        items = localStorage.getItem("itemsArray");
    json = JSON.parse(items);
    if(json !=null)
    {
        if(json.length > 0)
        {
    
        }
        else{
            window.location.href = window.location.origin;
        }
    }
    else{
      
        window.location.href = window.location.origin;
    
    }
    }

}
function validate() {
    var errorschecks = "success";
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("citys").value;
    var phone = document.getElementById("phone").value;
    var emai = document.getElementById("emai").value;

    document.getElementById("errorname").innerHTML = "";
    document.getElementById("errorbaddress").innerHTML = "";
    document.getElementById("errorcity").innerHTML = "";
    document.getElementById("errorphone").innerHTML = "";
    document.getElementById("erroremail").innerHTML = "";
    document.getElementById("error_s_name").innerHTML = "";
    document.getElementById("error_s_citys").innerHTML = "";
    document.getElementById("error_s_address").innerHTML = "";

    if (name == "") {
        document.getElementById("errorname").innerHTML = "Name required";
        errorschecks = "error";
    }
    else {
        if (errorschecks == "success") { errorschecks = "success"; }
    }
    if (address == "") {
        document.getElementById("errorbaddress").innerHTML = "Address required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success") { errorschecks = "success"; }

    }
    if (city == "") {
        document.getElementById("errorcity").innerHTML = "City required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success")
            errorschecks = "success";
    }
    if (phone == "") {
        document.getElementById("errorphone").innerHTML = "Phone number required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success") {
            var regExp = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
            var phonesnum = phone.match(regExp);
            if (phonesnum) {
                errorschecks = "success";
            }
            else {
                document.getElementById("errorphone").innerHTML = "Enter 11 to 14 digits";
                errorschecks = "error";
            }

        }

    }
    if (emai == "") {
        document.getElementById("erroremail").innerHTML = "Email required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success")
        {
            var emailregExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var email = emai.match(emailregExp);

            if (email) {
                errorschecks = "success";
            }else{
                document.getElementById("erroremail").innerHTML = "Invaild email";
                errorschecks = "error";
            }
        }
           
    }
    if ($('#shippingtrue').is(":checked")) {
        var s_name = document.getElementById("s_name").value;
        var s_city = document.getElementById("s_citys").value;
        var s_address = document.getElementById("s_address").value;
        if (s_name == "") {
            document.getElementById("error_s_name").innerHTML = "Name required";
            errorschecks = "error";
        }
        else {
            if (errorschecks == "success")
                errorschecks = "success";
        }
        if (s_city == "") {
            document.getElementById("error_s_citys").innerHTML = "City required";
            errorschecks = "error";
        } else {
            if (errorschecks == "success")
                errorschecks = "success";
        }
        if (s_address == "") {
            document.getElementById("error_s_address").innerHTML = "Address required";
            errorschecks = "error";
        } else {
            if (errorschecks == "success")
                errorschecks = "success";
        }
    }
    if (errorschecks == "success") {
        if(dataexmple.length > 0){
            $('#alert-set-cart div').remove();
            $('#alert-set-cart').append('<div style="background-color: #f8d7da;" class="alert alert-danger alert-dismissible fade show" role="alert">'+
            '<strong>Warning!</strong> You will be able to place order once Products are synced.'+
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'+
          '</div>');
        }
        else{
            adddata()
        }
        
    }
}

function adddata() {
    $('#ec-overlay').show()
    var Line_Items = [];
    totalamounts = 0;
    items = localStorage.getItem("itemsArray");
    json = JSON.parse(items);
    if(json != null)
    {
    if(json.length > 0)
    {
    for (i = 0; i < json.length; i++) {
        var p_name = json[i].name;
        var p_id = json[i].id;
        var qty = json[i].quantity;
        var price = json[i].price;
        var img = json[i].img;
        Line_Items.push({
            product_id: json[i].id,
            product_page: 'hello',
            price: json[i].price,
            quantity: json[i].quantity,
            tax: 0,
            discount: 0,
            total: parseFloat(json[i].price * json[i].quantity),
        });

        totalamounts = parseFloat(totalamounts + json[i].price * json[i].quantity);
    }

    // alert(totalamounts)
 
    var token = $('meta[name="csrf-token"]').attr('content');
    var emai = document.getElementById("emai").value;
    var name = document.getElementById("name").value;
    //    var emai= 
    var address = document.getElementById("address").value;
    var city = document.getElementById("citys").value;

    var devlirychar = document.getElementById("deliveypriceset").value;
    var country = document.getElementById("country").value;
    var province = document.getElementById("province").value;
    var phone = document.getElementById("phone").value;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var useragent = navigator.appName;

    var Shipping;
    if ($('#shippingtrue').is(":checked")) {


        var s_name = document.getElementById("s_name").value;
        var s_city = document.getElementById("s_citys").value;
        var s_country = document.getElementById("s_country").value;
        var s_province = document.getElementById("s_province").value;
        var s_address = document.getElementById("s_address").value;
        Shipping = {
            'name': s_name,
            'address': s_address,
            'city': s_city,
            'state': s_province,
            'country': s_country
        }
        $("#shippinghidediv").show();
    }
    else {
        Shipping = {
            'name': null,
            'address': null,
            'city': null,
            'state': '',
            'country': null
        }

        $("#shippinghidediv").hide();
    }


    // alert(useragent)
    eOrderInput = {
        'order_key': ouuid,
        "date_created": yyyy + '-' + mm + '-' + dd,
        "date_modified": yyyy + '-' + mm + '-' + dd,
        'created_via': 'ecommerce',
        'discount_total': 0,
        'tax': 0,
        'delivery_charges': devlirychar,
        'total': parseFloat(parseFloat(totalamounts) + parseFloat(devlirychar)),
        'customer_id': u_id,
        'customer_ip_address': '' + getipaddress,
        'customer_user_agent': useragent,
        'customer_note': 'dasd',
        'payment_method': 'cash',
        'transaction_id': '1001',
        'date_paid': yyyy + '-' + mm + '-' + dd,
        'status': 'pending',

        Billing: {
            'name': name,
            'address': address,
            'city': city,
            'state': '',
            'country': country,
            'email': emai,
            'phone': phone,
        },

        'Shipping': Shipping,
        'Line_Items': Line_Items,


    };


    // console.log(JSON.stringify(eOrderInput));
    $.ajax({
        url: apicon+"/api/ecom/OrderCreated",
        method: "POST",
        headers: {
            'SubDomain': subdomain,
            'AccessKey': AccessKey,
        },

        data: JSON.stringify(eOrderInput),
        dataType: 'json',
        contentType: 'application/json',
        success: function (dataResult) {
            var id = dataResult;
            // alert(dataResult)
            console.log(dataResult);
            localStorage.removeItem('itemsArray')
            $('#ec-overlay').hide()
            window.location.href = window.location.origin + '/invoice/?orderid=' + dataResult;

        }
    });
}
    
else{
    $('#ec-overlay').hide()
    var options = {
        autoClose: true,
        progressBar: true,
        enableSounds: true,
        sounds: {

            error: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",

        },
    };
    var toast = new Toasty(options);
    toast.configure(options);

    toast.error("You have no items in your shopping cart");
}
}
else{
    $('#ec-overlay').hide()
    var options = {
        autoClose: true,
        progressBar: true,
        enableSounds: true,
        sounds: {

            error: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",

        },
    };
    var toast = new Toasty(options);
    toast.configure(options);

    toast.error("You have no items in your shopping cart");
}
}


function callcity(allowkey, domainname) {


    var Line_data = [];
    $.ajax({
        "url": apicon+"/api/Ecom/GetManageDelivery",
        "method": "GET",
        "headers": {
            "SubDomain": domainname,
            "AccessKey": allowkey
        },
        success: function (response) {
            var datas = JSON.parse(response);
            console.log(datas)
            var len = 0;
            if (datas != null) {
                len = datas.length;
            }
            else (
                alert(response)
            )
            if (len > 0) {

                for (var i = 0; i < len; i++) {

                    fottor = '<option data-cityid="' + datas[i].CityID + '" value="' + datas[i].CityID + '" data-miniorder="' + datas[i].MinimumOrderAmount + '" data-price="' + datas[i].Charges + '">' + datas[i].Name + '</option>';

                    $('.getcitys').append(fottor);
                }
                getuseraddress(domainname, allowkey)
            }

        }
    });
}
function onchacity() {
    $('#sutotle').text(new Intl.NumberFormat().format(parseFloat(sutotle) - parseFloat($('#deliveypriceset').val())))

    if ($('#shippingtrue').is(":checked")) {
        if ($('#s_citys :selected').data("miniorder") != null) {
            if (parseFloat($('#s_citys :selected').data("miniorder")) <= parseFloat(subtot)) {
                $('#delivery_price').text(new Intl.NumberFormat().format(0));
                $('#deliveypriceset').val(0);
                $('#cityidset').val($('#s_citys :selected').data("cityid"));
            }
            else {
                $('#delivery_price').text(new Intl.NumberFormat().format(parseFloat($('#s_citys :selected').data("price"))));
                $('#deliveypriceset').val(parseFloat($('#s_citys :selected').data("price")));
                $('#cityidset').val($('#s_citys :selected').data("cityid"));
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

                toast.success("Avail free delivery on orders above: Rs. " + parseFloat($('#s_citys :selected').data("miniorder")));
            }
        }
        else {
            $('#delivery_price').text(new Intl.NumberFormat().format(parseFloat($('#s_citys :selected').data("price"))));
            $('#deliveypriceset').val(parseFloat($('#s_citys :selected').data("price")));
            $('#cityidset').val($('#s_citys :selected').data("cityid"));
            // $('#sutotle').text(parseInt($('#sutotle').text())+parseInt($('#deliveypriceset').val()))
        }


    }



    else {
        if ($('#citys :selected').data("miniorder") != null) {
            if (parseFloat($('#citys :selected').data("miniorder")) <= parseFloat(subtot)) {
                $('#delivery_price').text(new Intl.NumberFormat().format(0));
                $('#deliveypriceset').val(0);
                $('#cityidset').val($('#citys :selected').data("cityid"));
            }
            else {
                $('#delivery_price').text(new Intl.NumberFormat().format(parseFloat($('#citys :selected').data("price"))));
                $('#deliveypriceset').val(parseFloat($('#citys :selected').data("price")));
                $('#cityidset').val($('#citys :selected').data("cityid"));
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

                toast.success("Avail free delivery on orders above: Rs. " + parseFloat($('#citys :selected').data("miniorder")));
            }
        }
        else {
            $('#delivery_price').text(new Intl.NumberFormat().format(parseFloat($('#citys :selected').data("price"))));
            $('#deliveypriceset').val(parseFloat($('#citys :selected').data("price")));
            $('#cityidset').val($('#citys :selected').data("cityid"));
        }
    }

    $('#sutotle').text(new Intl.NumberFormat().format(parseFloat(sutotle) + parseFloat($('#deliveypriceset').val())))

    // delivery_price
}






function valueChanged() {
    $('#sutotle').text(new Intl.NumberFormat().format(parseFloat(sutotle) - parseFloat($('#deliveypriceset').val())))
    if ($('#shippingtrue').is(":checked")) {
        $("#shippinghidediv").show();
        if ($('#s_citys :selected').data("miniorder") != null) {
            if (parseFloat($('#s_citys :selected').data("miniorder")) <= parseFloat(subtot)) {
                $('#delivery_price').text(new Intl.NumberFormat().format(0));
                $('#deliveypriceset').val(0);
                $('#cityidset').val($('#s_citys :selected').data("cityid"));
            }
            else {
                $('#delivery_price').text(new Intl.NumberFormat().format(parseFloat($('#s_citys :selected').data("price"))));
                $('#deliveypriceset').val(parseFloat($('#s_citys :selected').data("price")));
                $('#cityidset').val($('#s_citys :selected').data("cityid"));
            }
        }
        else {
            $('#delivery_price').text(new Intl.NumberFormat().format(parseFloat($('#s_citys :selected').data("price"))));
            $('#deliveypriceset').val(parseFloat($('#s_citys :selected').data("price")));
            $('#cityidset').val($('#s_citys :selected').data("cityid"));
            // $('#sutotle').text(parseInt($('#sutotle').text())+parseInt($('#deliveypriceset').val()))
        }
    }
    else {
        $("#shippinghidediv").hide();
        if ($('#citys :selected').data("miniorder") != null) {
            if (parseFloat($('#citys :selected').data("miniorder")) <= parseFloat(subtot)) {
                $('#delivery_price').text(new Intl.NumberFormat().format(0));
                $('#deliveypriceset').val(0);
                $('#cityidset').val($('#citys :selected').data("cityid"));
            }
            else {
                $('#delivery_price').text(new Intl.NumberFormat().format(parseFloat($('#citys :selected').data("price"))));
                $('#deliveypriceset').val(parseFloat($('#citys :selected').data("price")));
                $('#cityidset').val($('#citys :selected').data("cityid"));

            }
        }
        else {
            $('#delivery_price').text(new Intl.NumberFormat().format(parseFloat($('#citys :selected').data("price"))));
            $('#deliveypriceset').val(parseFloat($('#citys :selected').data("price")));
            $('#cityidset').val($('#citys :selected').data("cityid"));
        }
    }
    $('#sutotle').text(new Intl.NumberFormat().format(parseFloat(sutotle) + parseFloat($('#deliveypriceset').val())))

}




function phonevalidcheck() {
    var phone = document.getElementById("phone").value;
    var regExp = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
    var phonesnum = phone.match(regExp);
    if (phonesnum) {
        document.getElementById("errorphone").innerHTML = "";
    }
    else {
        document.getElementById("errorphone").innerHTML = "Enter 11 to 14 digits";
    }
}
function emailvalidcheck() {
    var email = document.getElementById("emai").value;
    var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var checkemail = email.match(regExp);
    if (checkemail) {
        document.getElementById("erroremail").innerHTML = "";
    }
    else {
        document.getElementById("erroremail").innerHTML = "Invaild email";
        errorschecks = "error";
    }
}

document.getElementById("emai").value = email;


}
} catch (error) {
    console.log(error) 
}