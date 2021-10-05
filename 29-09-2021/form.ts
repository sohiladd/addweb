
const abcd: HTMLFormElement = document.querySelector('#myform');
var x=document.getElementById('username');
var btn=document.getElementById('submit');
console.log(btn);

abcd.onsubmit = () => {
    const formData = new FormData(abcd);
    console.log(x);
}