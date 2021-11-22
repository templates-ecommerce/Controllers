try {
  


if(pagenames == "dashboard")
{
 
var u_id;

$(document).ready(function () {
  if (localStorage.getItem("gotrue.user") != null) {
    login = localStorage.getItem("gotrue.user");
    logins = JSON.parse(login);

    u_id = logins.id;
    email = logins.email;
    // console.log(logins)

  }
  else {
    window.location.href = window.location.origin + "/products";

  }
})
// u_id
var ord = '';


var product=0;


// Dashboard function start
function onloaderdashboard() {
  
  try {
    if (pagenames == "dashboard") {
      $.ajax({
        url: apicon+'/api/ECom/GetOrders?StartDate=2021-01-01&EndDate=3021-01-01&CustomerID=' + u_id,
        method: "GET",
        headers: {
          'SubDomain': subdomain,
          'AccessKey': AccessKey,
        },
        success: function (response) {
          try {
            
          

          var len = 0;
          if (JSON.parse(response) != null) {
            len = JSON.parse(response).length;
          }
          else (
            alert(JSON.parse(response).id)
          )
          if (len > 0) {
            // Read data and create <option >
            var count=0;
            var Delivered=0;
            var subamountset =0;
            
            product=JSON.parse(response)[0].ProductCount;
            for (var i = 0; i < len; i++) {
              var datas = JSON.parse(response)[i];
              count=count+1;
              //   console.log(datas)
 
                if(count <= 10)
                {
                  
                  ord += '<tr>';
                  
                  ord += '<th scope="row"><span>' + datas.order_key + '</th></span>';
                  if(datas.Shipping_City !=null )
                    {
                      ord += '<td><span>' + capitalizeFirstLetter(datas.Shipping_City)+ '</span></td>';
                    }
                    else{
                      ord += '<td><span>' + capitalizeFirstLetter(datas.Billing_City)+ '</span></td>';
                    }
                   
                    ord += '<td><span>'+ capitalizeFirstLetter(datas.status)  + '</span></td>';
                    ord += '<td><span>' + moment(datas.date_created).format('DD-MM-YYYY') + '</span></td>';
                    ord += '<td><span>'+ Intl.NumberFormat().format(parseFloat(datas.total))  + '</span></td>';
                    ord += '<td><a href="' + window.location.origin + '/invoice/?orderid=' + datas.order_key + '" target="_blank" rel="noopener noreferrer"><span>View</span></a></td>';
                    ord += '</tr>';
                }
                else{
                  
                  ord += '<tr class="hidetrdone" style="display: none;">';
                  ord += '<th scope="row"><span>' + datas.order_key + '</th></span>';
                  if(datas.Shipping_City !=null )
                    {
                      ord += '<td><span>' + capitalizeFirstLetter(datas.Shipping_City)+ '</span></td>';
                    }
                    else{
                      ord += '<td><span>' + capitalizeFirstLetter(datas.Billing_City)+ '</span></td>';
                    }
                    ord += '<td><span>'+ capitalizeFirstLetter(datas.status)  + '</span></td>';
                    ord += '<td><span>' + moment(datas.date_created).format('DD-MM-YYYY') + '</span></td>';
                    ord += '<td><span>'+ Intl.NumberFormat().format(parseFloat(datas.total))  + '</span></td>';
                    ord += '<td><a href="' + window.location.origin + '/invoice/?orderid=' + datas.order_key + '" target="_blank" rel="noopener noreferrer"><span>View</span></a></td>';
                    ord += '</tr>';
                }
                // Delivered
             
             
                
              if(capitalizeFirstLetter(datas.status) == "Delivered")
              {
                subamountset = subamountset+datas.total;
                Delivered=1+Delivered;
              }
              // document.getElementById("abc").innerHTML = name;

            }
            $('#spentcounts').html(Intl.NumberFormat().format(parseFloat(subamountset))+"<span> PKR</span>")
            $('#ordercounts').text(count)
            $('#deliveredcounts').text(Delivered)
            $("#productorder tr").remove();
            $('#productorder').append(ord);
            $('#productcount').text(product)
            // 
          }
          getaddressdas();
        } catch (error) {
            
        }
        }
      });


    }
  } catch (error) {

  }
}
// Dashboard function end


function showallorder(){
  $('.hidetrdone').show();
}

}

} catch (error) {
  // console.log(error)
}