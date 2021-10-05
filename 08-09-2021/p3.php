<?php
class Student {
	
	// Constructor with 1 parameter

public function __construct($name,$age) {
		echo "this is one";
	}

	public function __construct($name) {
		echo $name;
	} 
}

 $obj2 = new Student('abc', '12');

 $obj1 = new Student('abc');

?>
