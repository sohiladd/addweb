<?php
interface Info {

	// Define the methods  to implement
	public function username($name);
	public function useraddress($address);
	public function __construct($abc,$xyz,$pqr);
	public function describe($desc);
}

class Bank implements Info {

	public function username($name) {
		return $name;
	}

	public function useraddress($address) {
		return $address;
	}

	public function describe($desc) {
		return $desc;
	}
	public function __construct($abc,$xyz,$pqr);
	{
		
		return $all=array('name' => $abc,'add' => $xyz,'city' => $pqr );
	}
}

$obj = new Bank();

// Set the color
echo "username &nbsp;&nbsp;:&nbsp;".$obj->username('sohil');

echo "<br>user address&nbsp;&nbsp;:&nbsp;".$obj->useraddress('visnagar');

echo "<br>user decr&nbsp;&nbsp;:&nbsp; ".$obj->describe('13234567899');

echo $obj->Bank("sohil","addweb","ahm");

?>
