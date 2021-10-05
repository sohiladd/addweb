<?php 

class xyz
{

public static function abc()
	{	
			
	}
}
echo self::abc();
?>


<?php
class MyClass {
  public static $str = "Hello World!";
  
  public static function hello() {
    echo MyClass::$str;
  }
}

echo MyClass::$str;
echo "<br>";
echo MyClass::hello();
?>