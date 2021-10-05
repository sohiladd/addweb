<?php



abstract class natural
{
	abstract function demo();
}

class ClassName extends natural
{
	
	public function demo()
	{
		echo "hii abstract class";
	}
	public function __construct()
	{
		echo "hiii abstract";
	}
}

$obj=new ClassName();
$obj->demo();


?>