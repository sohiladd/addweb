function sayHi(): never { 
    while(true)
        console.log('Hi!')
}

let speech: never = sayHi();
console.log(speech); // undefined