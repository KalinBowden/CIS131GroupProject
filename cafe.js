

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