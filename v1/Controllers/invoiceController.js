if(pagenames == "invoice")
{
// var orderid;
// var u_id;
var email;
if(localStorage.getItem("gotrue.user")!=null){
login = localStorage.getItem("gotrue.user");
logins = JSON.parse(login);

// u_id = logins.id;
// email = logins.email;
// console.log(logins)

}
else{
window.location.href = window.location.origin+"/";
}

function onloaderinvoice()
{
    try {
        if (pagenames == "invoice") {
            var OrderID = getUrlParameter('orderid');
            
            console.log(OrderID)
            $.ajax({
                url: apicon+'/api/ECom/GetOrdersDetail?EOrderID=' + OrderID,
                method: "GET",
                headers: {
                    'SubDomain': subdomain,
                    'AccessKey': AccessKey,
                },
                success: GotOrder,
                onerror: GotOrder
            });

        }
    }
     catch (error) {
    
     }
}


function GotOrder(Response) {
    var OrderDetail = JSON.parse(Response);
    if (OrderDetail != null) {
        if (OrderDetail.Table3 != null && OrderDetail.Table3.length > 0) {
            var CompanyDetail = OrderDetail.Table3[0];
            $('#CompanyName').text(CompanyDetail.CompanyName);
            $('#Contact').text(CompanyDetail.Contact);
            $('#Address').text(CompanyDetail.Address);
            $('#Email').text(CompanyDetail.Email);
        }
        if (OrderDetail.Table != null && OrderDetail.Table.length > 0) {
            var Detail = OrderDetail.Table[0];
            $('#lblCreatedAt').text(Detail.CreatedAt)
            $('#lblInvoice').text(Detail.order_key)
            $('#lblStatus').text(Detail.Status)
            $('#PMethod').text(Detail.Pmethod == 'cash' ? 'CASH ON DELIVERY' : Detail.Pmethod)
            $('#Charges').text("Rs. "+Detail.Delivery_Charges);
            $('#lblCharges').text("Rs. "+Detail.Delivery_Charges);
            $('#Bill_Customer').text(Detail.Billing_Name);
            $('#Bill_Address').text(Detail.Billing_Address);
            $('#Bill_Phone').text(Detail.Billing_Contact);
            $('#Bill_City').text(Detail.Billing_City);
            $('#Bill_Email').text(Detail.Billing_Email);
            if (Detail.Shipping_Name == null)
                $('.Shipping').hide();
            else {
                $('#Ship_Customer').text(Detail.Shipping_Name);
                $('#Ship_Address').text(Detail.Shipping_Address);
                $('#Ship_City').text(Detail.Shipping_City);
            }
        }

        if (OrderDetail.Table1 != null && OrderDetail.Table1.length > 0) {
            var Products = OrderDetail.Table1;
            var numFormat = new Intl.NumberFormat()
            var html = '';
            var SubTotal = 0;
            for (var i = 0; i < Products.length; i++) {
                var seq = i + parseFloat(1)
                // html += '<tr class="item">' + seq + '</td><td class="text-center">' + Products[i].Barcode + '</td>';
                // html += '<td class="text-center">' + Products[i].Name + '</td>';
                // html += '<td class="text-center">' + numFormat.format(Products[i].price) + '</td>';
                // html += '<td class="text-center">' + numFormat.format(Products[i].quantity) + '</td>';
                // html += '<td class="text-right">Rs. ' + numFormat.format(Products[i].quantity * Products[i].price) + '</td>';
                SubTotal += Products[i].quantity * Products[i].price;
                html +='<tr class="item">';
                html +='<td>'+Products[i].Name+'</td>';
                html +='<td>'+numFormat.format(Products[i].quantity)+'</td>';
                html +='<td align="right">Rs. '+numFormat.format(Products[i].price)+'</td>';
                html +='</tr>';


            }
            $('#tbody').html(html);
            $('#lblSubTotal').text("Rs. "+numFormat.format(SubTotal));
            $('#lblTotal').text("Rs. "+numFormat.format(SubTotal + OrderDetail.Table[0].Delivery_Charges));
        }
    }

   
}

function getUrlParameter(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
}