/*
============================================
  Title: Code Monkey Cafe Java Script File
  ----------------------------------------
  Date: 
  ----------------------------------------
  Contributors - All
    Dev: 
    Dev:
    Dev:
    Dev: Kalin Bowden - Home Page & Header

============================================
  Notes
  ----------------------------------------
  Prolog: all notes at this level should clarify
    and instruct the reader on how they should 
    interperet the following structure of this 
    Java Script file.
  ----------------------------------------
  Note 0: Author - Kalin Bowden
    All further Notes should follow this, the 
    example provided in note 0. Where the Note
    number and note author are listed in 
    identical fashion. 
============================================
*/


// Class level Variabels
var currentUser = "";
var allUsers = ["admin@admin","KalinBowden@gmail.com", ""];
var allPasswords = ["password", "CodePride1", "y"];
var userAvatar = ["images/avatar0.jpg", "images/avatar1.jpg", "images/avatar2.jpg"];
var burgerImgs = ["images/burger0.jpg", "images/burger1.jpg", "images/burger2.jpg", "images/burger3.jpg"];
var burgerName = ["burger0","burger1","burger2","burger3"];
var count = 0;

// When the page loads do these things
function onLoadMain()
{
  var loginBar = document.getElementById("headerLogInBar");
  var loginBtn = document.getElementById("headLogIn");
  var loginBtn1 = document.getElementById("logIn");
  

  loginBtn.addEventListener("click", attemptLogin, false);
  loginBtn1.addEventListener("click", submitLogin, false);
  loginBar.style.display = "none";
}

/*
  JavaScript Functionality for the Header of CodeMonkeyCafe
*/


// TODO
function submitLogin()
{
  // Function level variables
  var count = 0;
  var isUser = false;
  var isPass = false;

  // Grab elements
  var userName = document.getElementById("email0").value;
  var passWord = document.getElementById("password0").value;

  // Test for correct Login Email
  do
  {
    if (userName === allUsers[count++])
    {
      isUser = true;
      count = 0;
    }
  } while(!isUser && count < allUsers.length);

  // Test for correct Login Email
  do
  {
    if (passWord === allPasswords[count++])
    {
      isPass = true;
    }

  } while(!isPass && count < allPasswords.length);

  // If either fails alert the user
  if(!isUser || !isPass)
  {
    onLoginFail();
  }

  // If both account and password match
  if (isUser && isPass)
  {
    onLoginSuccess();
  }
}


// TODO
function attemptLogin()
{
  var loginBar = document.getElementById("headerLogInBar");
  loginBar.style.display = "";
}


// TODO
function getUserInfo()
{
  var userName = "";
  var passWord = "";
}


// TODO
function onLoginSuccess()
{
  var loginBar = document.getElementById("headerLogInBar");
  loginBar.style.display = "none";

  //
  var loginSec = document.getElementById("loginSec");

  loginSec.innerHTML = '<img src="' + userAvatar[0] + '" alt="an Avatar" height="40" width="40" >' + 
  '<button type="button" class="btn btn-default" aria-label="Left Align" id="headLogIn">Sign Out</button>';
}

// TODO
function onLoginFail()
{
  alert("That account does not exist or the password was incorrect.")
}

// TODO
function changeLink(pic)
{
  if (pic === 0)
  {
    var text = document.getElementById("link1").style.background = "linear-gradient( 0deg, #303030	, #888888)";
  }
  else if (pic === 1)
  {
    var text = document.getElementById("link2").style.background = "linear-gradient( 0deg, #303030	, #888888)";
  }
  else if (pic === 2)
  {
    var text = document.getElementById("link3").style.background = "linear-gradient( 0deg, #303030	, #888888)";
  }
  else if (pic === 3)
  {
    var text = document.getElementById("link4").style.background = "linear-gradient( 0deg, #303030	, #888888)";
  }
}

// TODO
function changeBack(pic)
{
  if (pic === 0)
  {
    var text = document.getElementById("link1").style.background = "none";
  }
  else if (pic === 1)
  {
    var text = document.getElementById("link2").style.background = "none";
  }
  else if (pic === 2)
  {
    var text = document.getElementById("link3").style.background = "none";
  }
  else if (pic === 3)
  {
    var text = document.getElementById("link4").style.background = "none";
  }
}

/* End Header Section*/

/* Home Page Functionality */


function logIn()
{
  // Set variables for login
  var email = document.getElementById("email0").value;
  var password = document.getElementById("password0").value;

  if (email === "" || password === "")
  {
    alert("please enter your email and password!");
  }
  else
  {
    // Give the user a friendly welcome.
    alert('Welcome Back User @' + email);
    var log0 = document.getElementById("log0").style.display = "none";
    var log1 = document.getElementById("log1").style.display = "block";
  }

  
  // TODO
  function logOut()
  {
    var log0 = document.getElementById("log0").style.display = "block";
    var log1 = document.getElementById("log1").style.display = "none";
    alert("Please log in to continue...");
    email.value = "";
    password.value = "";
  }
}


// TODO
function burgerImageSwap()
{
  //
  var burgerPics = document.getElementById("burgerPics");
  
  //
  if (count === 0)
  {
    for (var index = 0; index < 4; index++)
    {
      burgerPics.innerHTML += '<div class="col-md-6"><img src="images/burger' + count + '.jpg" alt="burger0" height="160" width="160" class="burgerThumbHome bord"></div>'
    }
  }
  else if (count === 7)
  {
    for (var index = 0; index < 4; index++)
    {
      burgerPics.innerHTML += '<div class="col-md-6"><img src="images/burger0.jpg" alt="burger0" height="160" width="160" class="burgerThumbHome bord"></div>'
    }
    count = 0;
  }

  alert(count);

  //
  count++;
}

/* End Home Page Functionality */



// Event List
window.setInterval(burgerImageSwap, 3000);
window.addEventListener("load", onLoadMain, false);