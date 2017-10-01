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
var allUsers = ["admin","KalinBowden@gmail.com", "x"];
var allPasswords = ["password", "CodePride1", "y"];

//
var loginBar = document.getElementById("headerLogInBar");
var loginBtn = document.getElementById("headLogIn");


// TODO
function onLoadMain()
{
  var page = document.getElementById("page").style.position = "absolute";
  var header = document.getElementById("CMHeader").style.position = "sticky";
  loginBar.style.display = "none";
}

/*
  JavaScript Functionality for the Header of CodeMonkeyCafe
*/

function attemptLogin()
{
  loginBar.style.display = "";
  alert("it worked");
}

function getUserInfo()
{
  var userName = "";
  var passWord = "";
}

function createUserInfoPromp()
{

}

function onLoginSuccess()
{

}


function onLoginFail()
{

}

/* End Header Section*/



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

  function logOut()
  {
    var log0 = document.getElementById("log0").style.display = "block";
    var log1 = document.getElementById("log1").style.display = "none";
    alert("Please log in to continue...");
    email.value = "";
    password.value = "";
  }
}

window.addEventListener("load", onLoadMain, false);
loginBtn.addEventListener("click", attemptLogin(), false);
