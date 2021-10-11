var pagenames = "track"
function valueChanged()
  {
      if($('#viewdetails').is(":checked"))   
          $("#hidetable").show();
      else
          $("#hidetable").hide();
  }



  // tracking function start
function onloadertrack(){
    try {
        if (pagenames == "track") {
          $('#divLoader').show()
          $('#tabrownode tr').remove(); 
          $("#comamountredy").text(0);
    var ord = '';
    var pro = '';
    trackids=document.getElementById("trackid").value
    $.ajax({
    url: apicon+'/api/ECom/GetOrdersDetail?EOrderID=' + trackids,
    method: "GET",
                            headers: {
                            'SubDomain': subdomain,
                            'AccessKey': AccessKey,
                            },
    success: function(response){
      try {
      thead = ''
      var pamount= 0;
      
      var datas = JSON.parse(response).Table;
        // console.log(datas[0].Status)
        pamount= datas[0].Delivery_Charges;
        ord += '<tr>';
                ord += '<td>'+trackids+'</td>';
                ord += '<td id="comamountredy"></td>';
                if(datas[0].Shipping_City !=null )
                {
                  ord += '<td>' + capitalizeFirstLetter(datas[0].Shipping_City)+ '</td>';
                }
                else{
                  ord += '<td>' + capitalizeFirstLetter(datas[0].Billing_City)+ '</td>';
                }
                
                ord += '<td>' + capitalizeFirstLetter(datas[0].Status)+ '</td>';
                    ord += '<td>' +datas[0].CreatedAt + '</td>';
                    ord += '<td><label><input type="checkbox" id="viewdetails" onchange="valueChanged()"> View details</label></td>';
                               
                              
                                $('#tabrownode tr').remove(); 
                              $('#tabrownode').append(thead,ord);
  
        var productdatas = JSON.parse(response).Table1;
       
        var len = 0;
        if(productdatas != null){
          len = productdatas.length;
        }
        else(
            alert(productdatas.id)
        )
        if(len > 0){
          pro += '<tr>';
            pro += '<th colspan="1">Name</th>';
            pro += '<th colspan="2">Price</th>';
            pro += '<th colspan="2">Quantity</th>';
            pro += '<th colspan="1">Total amount</th>';

            
          for(var i=0; i<len; i++){
            pro += '<tr>';
              pro += '<td colspan="1">'+productdatas[i].Name+'</td>';
  
              pro += '<td colspan="2">Rs: ' + new Intl.NumberFormat().format(parseFloat(productdatas[i].price)) + '</td>';
              pro += '<td colspan="2">' + productdatas[i].quantity + '</td>';
              pro += '<td colspan="1">Rs: ' + new Intl.NumberFormat().format(parseFloat(productdatas[i].price*productdatas[i].quantity)) + '</td>';
              pamount = pamount+productdatas[i].total;         
                              
                                $('#hidetable tr').remove(); 
                              $('#hidetable').append(thead,pro);
  
            
            // var name = response['track'][i];
            // console.log(name);
            
            // document.getElementById("abc").innerHTML = name;
           
          }
          $("#comamountredy").text(new Intl.NumberFormat().format(parseFloat(pamount)));
        }
        $('#divLoader').hide()
      } catch (error) {
        $('#divLoader').hide()
          $('#tabrownode tr').remove(); 
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
    
        toast.error("No order(s) found, please try again");
      }
      }
      
 });
}
} catch (error) {
    
}
}
// tracking function end
