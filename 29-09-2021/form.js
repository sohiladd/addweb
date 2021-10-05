var abcd = document.querySelector('#myform');
var x = document.getElementById('username');
console.log(x);
abcd.onsubmit = function () {
    var formData = new FormData(abcd);
    console.log(x);
};
