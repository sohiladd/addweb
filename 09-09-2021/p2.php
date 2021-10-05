<?php


// use constructor as interface flow us web https://stackoverflow.com/questions/13271068/
//php-class-constructor-in-interface-or-class/37824315
interface Animal
{
    public function __construct($name);
    
}

class Cat implements Animal
{
    protected $name=null;
    public function __construct($name)
    {
     $this->name=$name; 
 }
}
    

class Dog implements Animal
{
    protected $name=null;
    public function __construct($name){ $this->name=$name; }
    }


}
$name="cat";
$obj=new Cat($name);

?>