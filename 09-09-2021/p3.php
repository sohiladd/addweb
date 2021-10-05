<?php

interface Actors 
{
	 function Actorslist($name);
}


interface Aamir extends Actors
{
	 function aamirkhan($name);
}
interface Family extends Aamir
{
	 function actorfamily($name);
}

class Info implements Family
{

	public function Actorslist($name)
	{
		return $name;
	}
	public function actorfamily($name)
	{
		return $name;
	}
	public function aamirkhan($name)

		{
		return $name;
	}
}


$obj=new Info();
echo "<br> actor name ".$obj->Actorslist("aamir");
echo "<br> name is  ".$obj->aamirkhan("aamirkhan");
echo "<br> amir familys".$obj->actorfamily("son");


?>