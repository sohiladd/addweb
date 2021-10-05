<?php

function sum(array $args){
    $sum = 0;
    
    if( is_numeric( implode("", $args) ) ) 
        {
            foreach($args as $arg){
                $sum += $arg;
                }
            return $sum;
        }
  return "Only array with numeric value accepted";
    
}

// if input is an array with values 1, 2, 3, 5
print_r ( sum([1, 2, 3, 5]) );


?>