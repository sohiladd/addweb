<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  

  <script>
		function fun() {
			var x=document.getElementById('country').value;
			if (x==="India") {
				var array=['gujarat','maharastra','haryana','panjab'];
			}else if(x==="Usa")
			{
				var array=['New York','California','Texas','Illinois'];

			}else{
			var array=[''];

			}
			 var string="";
			for (var i =0; i<array.length ;i++)
			 {
				
			 	 string=string+"<option value='array[i]'>"+array[i]+"</option>";

			}
			document.getElementById('state').innerHTML=string.toUpperCase();

		}

	</script>

<style>
    h2{
        text-shadow:5px 5px 10px black;
    }
.div{

    background: azure;
}
#log{
   background: linear-gradient(45deg, black, transparent);
}
</style>
</head>
<body >

<div class="container p-5">
 
  <div class="container m-5 ">     
    <div class="row">
      <div class="col-sm-1 ">
       
      </div>
      <div class="col-sm-10  text-center div  border border-warning rounded-sm">
     
     <form method="post" action="" enctype="multipart/form-data">
     <h2>Login</h2>
      


    <div class="form-group">
        
        <input type="text" class="form-control" name="email" id="email" placeholder="Enter Email">
    </div>



    <div class="form-group">
       
        <input type="text" class="form-control" id="password" name="password" placeholder="Enter password">
    </div>






   






        
    <table class="table table-borderless">
    <thead>
      <tr>
        
        <td> <div class="form-group">
       
        <input type="submit" class="form-control" id="submit" name="submit" >
   </div></td>
        <td> <div class="form-group">
       
       <input type="Reset" class="form-control" id="submit" name="reset" values="Reset" >
   </div></td>
       
      </tr>



      <tr >
        
        <td colspan="2">  <div class="form-group" id="log">
            Have an  Account <a href="register.php">Login</a></div></td>
               
        
       
      </tr>





















    </thead>
    </tbody>
  </table>








</form>





      </div>
      <div class="col-sm-1 ">
             </div>
    </div>
  </div>
</div>
    
</body>
</html>
