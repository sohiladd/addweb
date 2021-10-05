type GetReturnTypes<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
 
type Nums = GetReturnTypes<() => number>;


var Cs:Nums={a:10};
