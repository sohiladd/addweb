type R = { a: number }

type MyType<T> = T extends infer R ? never : never; // infer new variable R from T
type MyType2<T> = T extends R ? R : any; // compare T with above type R

type T1 = MyType<{b: string}> // T1 is { b: string; }
type T2 = MyType2<{b: string}> // T2 is never



var S:R={a:10};
console.log(S);
