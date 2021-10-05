<?php


// infinit parameter in php
class demo
{
	public function calculate(array $a)
	{
		$c=0;

		foreach($a as $val)
		{
			$c=$val+$c;

		}
		echo $c;


	}
}


$obj=new demo();
 
 $a = array(1,2,3,4,5,6,7,8,9 );


$obj->calculate($a);


?>