try {
  
  var mode;

// Your web app's Firebase configuration
    var firebaseConfig = {
apiKey: "AIzaSyAxdMRbp7vzLQCL9596Vlugb42LpBAnhSk",
  authDomain: "login.eralive.net",
  projectId: "eralive-b4e71",
  storageBucket: "eralive-b4e71.appspot.com",
  messagingSenderId: "358101573616",
  appId: "1:358101573616:web:1609e97f3f8cf0c8ef0735"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

if(pagenames == "account")
{
  if (localStorage.getItem("gotrue.user") != null) {
    window.location.href = window.location.origin + "/";

}
  $('.noneDashboard').addClass('d-none')


  let Googleprovider = new firebase.auth.GoogleAuthProvider(); Googleprovider.addScope('email');
  let fbprovider = new firebase.auth.FacebookAuthProvider()
fbprovider.addScope('email');
  function GoogleLogin() {
//     console.log('Login Btn Call')
    firebase.auth().signInWithPopup(Googleprovider).then(res => {
//       console.log(res.user.providerData[0])
      var datafb =res.user.providerData[0];
      // document.getElementById('LoginScreen').style.display = "none"
      $('.noneDashboard').removeClass('d-none')
      mode= "Google";
      var id =datafb.uid;
      var fname = datafb.displayName;
      var email = datafb.email;
      var phone = null;
      var pass = null;
      
      if(typeof accountname == 'undefined' ? null : accountname  == "loginallow" )
      {
        loginaccount(id,fname,email, pass, mode)
      }
      else{
        registeraccount(id,fname, email, phone, pass,mode)
      }
      
      // showUserDetails(res.user)
    }).catch(e => {
      console.log(e)
    })
  }
  function fbLogin() {
    console.log('Login Btn Call')
    firebase.auth().signInWithPopup(fbprovider).then(res => {
//       console.log(res.user)
      var datagl =res.user.providerData[0];
      mode= "Facebook";
      var id = datagl.uid;
      var fname = datagl.displayName;
      var email = datagl.email;
      var phone = null;
      var pass = null;
      

      if(typeof accountname == 'undefined' ? null : accountname  == "loginallow" )
      {
        loginaccount(id,fname,email, pass, mode)
      }
      else{
        registeraccount(id,fname, email, phone, pass,mode)
      }
      
      $('.noneDashboard').removeClass('d-none')
      // showUserDetails(res.user)
    }).catch(e => {
      console.log(e)
    })
  }

  function guLogin() {
    console.log('Login Btn Call')
    firebase.auth().signInAnonymously()
    .then(() => {
      checkAuthState()
     
      // Signed in..
    })
    .catch((error) => {
      console.log(error)
      // ...
    });
  }

  function showUserDetails(user) {
    
    // document.getElementById('userDetails').innerHTML = `
    //     <img src="${user.photoURL}" style="width:10%">
    //     <p>Name: ${user.displayName}</p>
    //     <p>Email: ${user.email}</p>
    //   `;
    if(sessionStorage.checkout !=null){
      window.location.href = window.location.origin + "/checkout";
    }else{
      window.location.href = window.location.origin;
    }
      // $('.noneDashboard').removeClass('d-none')
  }

  function checkAuthState() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        mode= "guest";
        // $('.noneDashboard').removeClass('d-none')
          localStorage.removeItem('gotrue.user');
          const newItem = {
            'id': user.uid,
            'email': user.email,
            'fullname': user.displayName,
            'mode': mode,
          };
          localStorage.setItem('gotrue.user', JSON.stringify(newItem));
          showUserDetails(user)
      } else {
        
      }
    })
  }

  
  

}

function LogoutUser() {
  console.log('Logout Btn Call')
  firebase.auth().signOut().then(() => {
    localStorage.removeItem('gotrue.user');
    localStorage.removeItem('itemsArray');
    $('.noneDashboard').addClass('d-none')
        $('.nonelogin').removeClass('d-none')
        $('.noneregister').removeClass('d-none')
        $('.nonelogout').addClass('d-none')
        window.location.href = window.location.origin;
    // document.getElementById('LoginScreen').style.display = "block"
    // document.getElementById('dashboard').style.display = "none"
  }).catch(e => {
    console.log(e)
  })
}

} catch (error) {
  console.log(error)
}
