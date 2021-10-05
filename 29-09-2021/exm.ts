interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
    if (s.kind=="square") {
        return s.size * s.size;
    } else if (s.kind == "rectangle") {
        return s.width * s.height;
    } else if (s.kind=="circle"){
        return Math.PI*s.radius**2;
    }
     else {
        const _exhaustiveCheck: never = s;
    //Argument of type 'Circle' is not assignable to parameter of type 'never'.
    }
}
var square: Shape={
kind:"square",
size:200,
}
console.log((area(square)));