<?php
 //how to call all php function overid
class Grandfather
{

public function desc()
{
	echo "<br>this is the grandfathe class";
}
}
class Father extends Grandfather
{

public function desc()
{
	parent::desc();
	echo "<br>this is the fathe class";
}
}
class Son extends Father
{

public function desc()
{

	parent::desc();
	
	echo "<br>this is the son class";
}

}


$obj=new Son();
$obj->desc();


















?>