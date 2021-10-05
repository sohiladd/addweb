<?php


	class xyz
	{
public static $x=2; public static $y=2;
		public static function count($x,$y)
		{


			return self::$x++ + self::$y++;
			


		}


}


echo xyz::count($x,$y);
echo xyz::count($x,$y);
echo xyz::count($x,$y);

?>
