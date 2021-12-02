function validate() {
    var errorschecks = "success";
    
    var l_email = document.getElementById("l_email").value;


    document.getElementById("e_email").innerHTML = "";
   

    if (l_email == "") {
        document.getElementById("e_email").innerHTML = "Email required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success") { errorschecks = "success"; }

    }


    
    if (errorschecks == "success") {
        forget(l_email)
    }
   
}


function forget(l_email){
    $('#ec-overlay').show()
    $.ajax({
        url: apicon + "/api/ECom/forgetpassword?Email="+l_email,
        method: "get",
        headers: {
            'SubDomain': subdomain,
            'AccessKey': AccessKey,
        },
        success: function (response) {
            console.log(response)
            if (!response.includes('exists')) {
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

                toast.success(response);
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

                toast.error(response);
            }
            $('#ec-overlay').hide()
        },

    });
}

var url = new URL(window.location.href);
var email = url.searchParams.get("email");
var id = url.searchParams.get("id");
document.getElementById("l_email").value = email;
function validate1() {
    var errorschecks = "success";
    
    var l_email = document.getElementById("l_email").value;


    document.getElementById("e_email").innerHTML = "";
   

    if (l_email == "") {
        document.getElementById("e_email").innerHTML = "Email required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success") { errorschecks = "success"; }

    }
    var l_password = document.getElementById("l_password").value;


    document.getElementById("e_password").innerHTML = "";
   

    if (l_password == "") {
        document.getElementById("e_password").innerHTML = "Password required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success") { errorschecks = "success"; }

    }


    var url = new URL(window.location.href);
    var email = url.searchParams.get("email");
    if (errorschecks == "success") {
        reset(l_password)
    }
   
}


function reset(password){
    $('#ec-overlay').show()
    $.ajax({
        url: apicon + "/api/ECom/changepassword?id="+id+"&password="+password,
        method: "get",
        headers: {
            'SubDomain': subdomain,
            'AccessKey': AccessKey,
        },
        success: function (response) {
            console.log(response)
            if (!response.includes('exists')) {
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

                toast.success(response);

                loginaccount(null,null,document.getElementById("l_email").value, password,"Email")
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

                toast.error(response);
            }
            $('#ec-overlay').hide()
        },

    });
}

