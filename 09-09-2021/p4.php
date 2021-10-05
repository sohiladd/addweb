<?php

class Grandfather
{

public function desc()
{
	echo "this is the grandfathe class";
}
}
class Father extends Grandfather
{

public function desc()
{
	echo "this is the fathe class";
}
}
class Son extends Father
{

public function desc()
{
	
	echo "this is the son class";
}

}


$obj=new Son();
$obj->desc();


















?>