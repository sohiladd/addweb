<?php

class Foo
{
   private $__aaa = null;

   public function __construct($aaa)
   {
      $this->__aaa = $aaa;
   }

   public static function factory($aaa)
   {
      return new Foo($aaa);
   }

   public function doX()
   {
      return $this->__aaa * 2;
   }
}

echo Foo::factory(10)->doX(); 

?>