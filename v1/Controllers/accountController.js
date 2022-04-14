try {
  
  var mode;

// Your web app's Firebase configuration
    var firebaseConfig = {
apiKey: "AIzaSyDkjke06pLb_N3hRITZi3I9WpmCoOIzIbA",
  authDomain: "login-3c236.firebaseapp.com",
  projectId: "login-3c236",
  storageBucket: "login-3c236.appspot.com",
  messagingSenderId: "335202469896",
  appId: "1:335202469896:web:787dada04fb295675aa9bd",
  measurementId: "G-W93PH9CPK9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

if(pagenames == "account")
{
  if (localStorage.getItem("gotrue.user") != null) {
    window.location.href = window.location.origin + "/";

}
  $('.noneDashboard').addClass('d-none')


  let Googleprovider = new firebase.auth.GoogleAuthProvider()
  let fbprovider = new firebase.auth.FacebookAuthProvider()

  function GoogleLogin() {
    console.log('Login Btn Call')
    firebase.auth().signInWithPopup(Googleprovider).then(res => {
      console.log(res.user)
      // document.getElementById('LoginScreen').style.display = "none"
      $('.noneDashboard').removeClass('d-none')
      mode= "Google";
      var id = res.user.uid;
      var fname = res.user.displayName;
      var email = res.user.email;
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
      console.log(res.user)
      mode= "Facebook";
      var id = res.user.uid;
      var fname = res.user.displayName;
      var email = res.user.email;
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
