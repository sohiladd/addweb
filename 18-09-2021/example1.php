<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container-fluid">
  
  <div class="row">    
    		<div class="col-md-2"><span id="login">click login</span>
 </div>            
    		<div class="col-md-8 h-100 bg-warning"> 




            <div class="demo">



            </div>



<script>


var c=document.getElementById('login');
var d=c.addEventListener("click",loadDoc);





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




        </div>            
    		<div class="col-md-2"> </div>  
    </div>
</div>
</body>
</html>
