
<?php
function fun()
{
	yield raja();
	yield "sohil";
	yield "deva";
	
	
	
	yield "bhaijaan";
	
}


foreach(fun() as $key){

echo $key;
echo "<br>";

}

function raja()
{
	echo "hellow i am raja from gujarat";
}
?>