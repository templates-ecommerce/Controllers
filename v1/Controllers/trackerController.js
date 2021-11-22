try {
  


if(pagenames == "track")
{
  
function valueChanged()
  {
      if($('#viewdetails').is(":checked"))
      {
        $("#hidetable").show();
        $("#arrowdown").removeClass('fa-arrow-circle-down')
        $("#arrowdown").addClass('fa-arrow-circle-up')
      }
          
      else
      {
          $("#hidetable").hide();
          $("#arrowdown").removeClass('fa-arrow-circle-up')
          $("#arrowdown").addClass('fa-arrow-circle-down')
      }
  }



  // tracking function start
function onloadertrack(){
    try {
        if (pagenames == "track") {
          $('#ec-overlay').show()
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
                // ord += '<td>'+trackids+'</td>';
                ord += '<td>' +datas[0].CreatedAt + '</td>';
                ord += '<td id="comamountredy"></td>';
                if(datas[0].Shipping_City !=null )
                {
                  ord += '<td>' + capitalizeFirstLetter(datas[0].Shipping_City)+ '</td>';
                }
                else{
                  ord += '<td>' + capitalizeFirstLetter(datas[0].Billing_City)+ '</td>';
                }
                
                ord += '<td>' + capitalizeFirstLetter(datas[0].Status)+ '</td>';
                    
                    ord += '<td><label><input type="checkbox" style="height:unset!important;width:unset!important;" id="viewdetails" onchange="valueChanged()" HIDDEN><i class="fa fa-arrow-circle-down" id="arrowdown" aria-hidden="true"></i> View details</label></td>';
                               
                              
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
            pro += '<th colspan="2">Name</th>';
            pro += '<th colspan="1">Price</th>';
            pro += '<th colspan="1">Quantity</th>';
            pro += '<th colspan="1">Total amount</th>';

            
          for(var i=0; i<len; i++){
            pro += '<tr>';
              pro += '<td colspan="2">'+productdatas[i].Name+'</td>';
  
              pro += '<td colspan="1">Rs: ' + new Intl.NumberFormat().format(parseFloat(productdatas[i].price)) + '</td>';
              pro += '<td colspan="1">' + productdatas[i].quantity + '</td>';
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
        $('#ec-overlay').hide()
      } catch (error) {
        $('#ec-overlay').hide()
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
        var emt = '<tr>';
        emt += '<td colspan="6"><img src="https://img.freepik.com/free-photo/empty-miniature-shopping-trolley-near-torn-paper-piece-against-colored-backdrop_23-2147943585.jpg" height="200px" width="100%"/></td>';
        emt += '</tr>'
        $('#tabrownode').html(emt);

      }
      }
      
 });
}
} catch (error) {
  $('#ec-overlay').hide()
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
var emt = '<tr>';
emt += '<td colspan="6"><img src="https://img.freepik.com/free-photo/empty-miniature-shopping-trolley-near-torn-paper-piece-against-colored-backdrop_23-2147943585.jpg" height="200px" width="100%"/></td>';
emt += '</tr>'
$('#tabrownode').html(emt);
}
}
// tracking function end

$("#trackid").keyup(function(event) {
  if (event.keyCode === 13) {
      $("#trackbtndone").click();
  }
});
}

} catch (error) {
  // console.log(error)
}