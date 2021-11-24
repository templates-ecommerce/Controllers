function verfyaccountdone(){ 
    
    if (localStorage.getItem("gotrue.user") != null) {
      
    }else{
        var url = new URL(window.location.href);
        var tokenid = url.searchParams.get("id");
        if(tokenid !=null)
        {
            $.ajax({
    
                url: apicon+"/api/ECom/ActivateCustomer?id=45007F39-D2D7-403A-99A1-5748094418F2",
                // url: apicon + "/api/ECom/ActivateCustomer?id="+tokenid,
                method: "GET",
                headers: {
                    "SubDomain": subdomain,
                    'AccessKey': AccessKey,
                },
                success: function (response) {
                    if(JSON.parse(response).length){
                        $('.noneDashboard').removeClass('d-none')
                    localStorage.removeItem('gotrue.user');
                    var Response = JSON.parse(response)
                    const newItem = {
                        'id': Response[0].ID,
                        'email': Response[0].Email,
                        'fullname': Response[0].Name,
                    };
                    localStorage.setItem('gotrue.user', JSON.stringify(newItem));
                    if(sessionStorage.checkout !=null){
                        window.location.href = window.location.origin + "/checkout";
                      }else{
                        window.location.href = window.location.origin;
                      }
                    }
                }
            })


        
        }
    }
}