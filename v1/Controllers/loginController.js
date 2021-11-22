if (pagenames == "account") {
    if (localStorage.getItem("gotrue.user") != null) {
        window.location.href = window.location.origin + "/";

    }
    function validate() {
        var errorschecks = "success";
       
        var l_email = document.getElementById("l_email").value;
      
        var l_password = document.getElementById("l_password").value;


        document.getElementById("e_email").innerHTML = "";
        document.getElementById("e_password").innerHTML = "";
      

        if (l_email == "") {
            document.getElementById("e_email").innerHTML = "Email required";
            errorschecks = "error";
        } else {
            if (errorschecks == "success") { errorschecks = "success"; }

        }
        if (l_password == "") {
            document.getElementById("e_password").innerHTML = "Password required";
            errorschecks = "error";
        } else {
            if (errorschecks == "success")
                errorschecks = "success";
        }


        
        if (errorschecks == "success") {
            loginaccount(l_email, l_password)
        }
    }



 
    function loginaccount(email, pass) {
      
        $.ajax({
            url: apicon + "/api/ECom/getlogin?email="+email+"&password="+pass,
            method: "get",
            headers: {
                'SubDomain': subdomain,
                'AccessKey': AccessKey,
            },
            success: function (response) {
                if (!response.includes('Invalid')) {
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
                else {
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

                    toast.error(JSON.parse(response)[0].Error);
                }
            },

        });

    }
}