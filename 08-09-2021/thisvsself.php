<?php



class abc
{ 
  protected $b=100;
  function fun()
  {
  	return $this->b;
  }
	
}

class xyz extends abc
{
  public $a=20;
  function fun()
  {
    return $this->a + $this->b;
  }
}

$ob=new xyz();
echo $ob->fun();

?>