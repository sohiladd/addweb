function area(s) {
    if (s.kind == "square") {
        return s.size * s.size;
    }
    else if (s.kind == "rectangle") {
        return s.width * s.height;
    }
    else if (s.kind == "circle") {
        return Math.PI * Math.pow(s.radius, 2);
    }
    else {
        var _exhaustiveCheck = s;
        //Argument of type 'Circle' is not assignable to parameter of type 'never'.
    }
}
var square = {
    kind: "square",
    size: 200
};
console.log((area(square)));
