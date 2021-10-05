interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;


const x:Animal=

    {
        live(){
            console.log("hii this is dog interface run as condition")
        }

    };

let z=(x.live());

