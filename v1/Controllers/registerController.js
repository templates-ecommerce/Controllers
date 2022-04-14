if (pagenames == "account") {
    if (localStorage.getItem("gotrue.user") != null) {
        window.location.href = window.location.origin + "/";

    }
    function validate() {
       
        var errorschecks = "success";
        var r_fullname = document.getElementById("r_fullname").value;
        var r_email = document.getElementById("r_email").value;
        var r_phone = document.getElementById("r_phone").value;
        var r_password = document.getElementById("r_password").value;


        document.getElementById("e_fullname").innerHTML = "";
        document.getElementById("e_phone").innerHTML = "";
        document.getElementById("e_email").innerHTML = "";
        document.getElementById("e_password").innerHTML = "";

        if (r_fullname == "") {
            document.getElementById("e_fullname").innerHTML = "Fullname required";
            errorschecks = "error";
        }
        else {
            if (errorschecks == "success") { errorschecks = "success"; }
        }
        if (r_email == "") {
            document.getElementById("e_email").innerHTML = "Email required";
            errorschecks = "error";
        } else {
            if (errorschecks == "success") {
                var emailregExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                var email = r_email.match(emailregExp);

                if (email) {
                    errorschecks = "success";
                } else {
                    document.getElementById("e_email").innerHTML = "Invaild email";
                    errorschecks = "error";
                }
            }

        }
        if (r_password == "") {
            document.getElementById("e_password").innerHTML = "Password required";
            errorschecks = "error";
        } else {
            if (errorschecks == "success")
                errorschecks = "success";
        }
        if (r_phone == "") {
            document.getElementById("e_phone").innerHTML = "Phone number required";
            errorschecks = "error";
        } else {
            if (errorschecks == "success") {
                var regExp = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
                var phonesnum = r_phone.match(regExp);
                if (phonesnum) {
                    errorschecks = "success";
                }
                else {
                    document.getElementById("e_phone").innerHTML = "Enter 11 to 14 digits";
                    errorschecks = "error";
                }

            }

        }
        if (errorschecks == "success") {
            $('#ec-overlay').show()
            registeraccount(null,r_fullname, r_email, r_phone, r_password,"Email")
        }
       
    }



    function phonevalidcheck() {
        var phone = document.getElementById("r_phone").value;
        var regExp = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
        var phonesnum = phone.match(regExp);
        if (phonesnum) {
            document.getElementById("e_phone").innerHTML = "";
        }
        else {
            document.getElementById("e_phone").innerHTML = "Enter 11 to 14 digits";
        }
    }
    function emailvalidcheck() {
        var email = document.getElementById("r_email").value;
        var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var checkemail = email.match(regExp);
        if (checkemail) {
            document.getElementById("e_email").innerHTML = "";
        }
        else {
            document.getElementById("e_email").innerHTML = "Invaild email";
            errorschecks = "error";
        }
    }

    function registeraccount(id, fname, email, phone, pass, mode) {
        $('#ec-overlay').show()
        registerdata = {
            "SSO": id,
            "Name": fname,
            "Email": email,
            "Contact": phone,
            "Password": pass,
            "Mode": mode
        };
        $.ajax({
            url: apicon + "/api/ECom/SetCustomer",
            method: "POST",
            headers: {
                'SubDomain': subdomain,
                'AccessKey': AccessKey,
            },

            data: JSON.stringify(registerdata),
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                $('#ec-overlay').hide()
                if (response.includes('SSO')) {
                    var user = JSON.parse(response);

                    $('.noneDashboard').removeClass('d-none')
                    localStorage.removeItem('gotrue.user');
                    const newItem = {
                        'id': user[0].Uid,
                        'email': user[0].Email,
                        'fullname': user[0].FullName,
                        'mode': mode,
                    };
                    localStorage.setItem('gotrue.user', JSON.stringify(newItem));
                    showUserDetails(user)
                }
                else if (response.includes('Success')) {
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

                    toast.success("Confirmation Email Has Been Sent.");
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

                    toast.error("Could not sign you in! Please try again...");
                }
                $('#ec-overlay').hide()
            },

        });

    }
}
