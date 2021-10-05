<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body style="height:1500px">

<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">sohil</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Save</a></li>
      <li><a href="#">Run</a></li>
    
    </ul>
  </div>
</nav>
  
<div class="container-fluid" style="margin-top:50px">

  <div class="row">
    <div class="col-sm-6" style="background-color:yellow;">
     <textarea id="demo" name="w3review" rows="7" cols="70">


  </textarea>
    </div>
    <div class="col-sm-6" style="background-color:pink;">
     <iframe src="login.php" height="200px" width="100%"></iframe>
    </div>
  </div>

</div>


</body>
</html>
<script>

  loadDoc();
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "login.php", true);
  xhttp.send();
}
</script>