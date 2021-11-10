if(pagenames == "checkout")
{
function getuseraddress(namedomain, keyaccess) {
    try {
        if (pagenames == "checkout") {
            $.ajax({
                url: apicon+'/api/ECom/GetLastBillingInfo?CustomerID=' + u_id,
                method: "GET",
                headers: {
                    'SubDomain': namedomain,
                    'AccessKey': keyaccess,
                },
                success: function (response) {
                    // console.log(JSON.parse(response))
                    var datasjon = JSON.parse(response);
                    if (datasjon.Table1[0] != null) {

                        document.getElementById("s_name").value = datasjon.Table1[0].name;
                        document.getElementById("s_address").value = datasjon.Table1[0].address;
                        $('#s_citys').val(datasjon.Table1[0].city)
                    }

                    document.getElementById("name").value = datasjon.Table[0].name;
                    document.getElementById("address").value = datasjon.Table[0].address;
                    document.getElementById("phone").value = datasjon.Table[0].phone;
                    $('#citys').val(datasjon.Table[0].city)
                    document.getElementById("country").value = datasjon.Table[0].country;
                    document.getElementById("province").value = datasjon.Table[0].province;
                    onchacity()
                }
            });
        }
    } catch (error) {

    }
}
}
if(pagenames == "dashboard")
{
    function getaddressdas() {
        try {
            if (pagenames == "dashboard") {
                $.ajax({
                    url: apicon+'/api/ECom/GetLastBillingInfo?CustomerID=' + u_id,
                    method: "GET",
                    headers: {
                        'SubDomain': subdomain,
                        'AccessKey': AccessKey,
                    },
                    success: function (response) {
                        
                        console.log(JSON.parse(response))
                        var datasjon = JSON.parse(response);
                        if (datasjon.Table1[0] != null) {
                            $("#fullname").text(datasjon.Table1[0].name);
                            $("#baddress").text(datasjon.Table1[0].address);
                            $("#city").text(datasjon.Table1[0].CityName)
                        }
                        else{
                            $("#fullname").text(datasjon.Table[0].name);
                                $("#baddress").text(datasjon.Table[0].address);
                            $("#city").text(datasjon.Table[0].CityName)
                        }
                        $("#phone").text(datasjon.Table[0].phone);
                        $("#email").text(email);
    
                        
                        
                    }
                });
            }
        } catch (error) {
    
        }
    }
}