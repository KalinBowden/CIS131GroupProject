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
  var email = document.getElementById("email0").value;
  var password = document.getElementById("password0").value;
  var lble = document.getElementById("lblEmail").innerHTML = email;
  alert(email + " " + password);
}