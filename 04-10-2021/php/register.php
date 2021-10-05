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
      <h2>Register</h2>
     <form method="post" action="" enctype="multipart/form-data">
      <div class="form-group">
       
        <input type="text" class="form-control" id="username" name="username" placeholder="Enter UserName">
    </div>


    <div class="form-group">
        
        <input type="text" class="form-control" name="email" id="email" placeholder="Enter Email">
    </div>



    <div class="form-group">
       
        <input type="text" class="form-control" id="password" name="password" placeholder="Enter password">
    </div>




   <div class="form-group">
         <select name="country" id="country" onchange="fun();" class="form-control" >
             <option value="">--- Select Country ---</option>
             <option>India</option>
	         <option>Usa</option>
        </select>
       
   </div>


    
   <div class="form-group">
         <select name="state" id="state"  class="form-control" >
            <option>-- Select item ---</option>
        </select>       
   </div>



   


    <table class="table table-borderless">
    <thead>
      <tr>
        <th>Select Degree's</th>
        <td>  <input type="checkbox" class="form-check-input" id="check1" name="option1" value="Bca" >Bca</td>
        <td> <input type="checkbox" class="form-check-input" id="check1" name="option1" value="Mca" >Mca</td>
        <td> <input type="checkbox" class="form-check-input" id="check1" name="option1" value="Pg"dca > Pgdca</td>
      </tr>
    </thead>
    </tbody>
  </table>




    <table class="table table-borderless">
    <thead>
      <tr>
        <th> Select Zender</th>
        <td> <input type="radio" class="form-check-input" id="radio2" name="optradio" value="Male">Male</td>
        <td> <input type="radio" class="form-check-input" id="radio2" name="optradio" value="Female">Female</td>
        <td> <input type="radio" class="form-check-input" id="radio2" name="optradio" value="Other">Other</td>
      </tr>
    </thead>
    </tbody>
  </table>


        
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
            Have an  Account <a href="login.php">Login</a></div></td>
               
        
       
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
